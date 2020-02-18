const { User, Reservations, Car } = require('../models')

const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(201).json({
            user
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({
            where: { id: id }
        })
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const [updated] = await User.update(req.body, {
            where: { id: id }
        })
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } })
            return res.status(200).json({ user: updatedUser })
        }
        throw new Error('User not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await User.destroy({
            where: { id: id }
        })
        if (deleted) {
            return res.status(200).send('User deleted')
        }
        throw new Error('User not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getReservationsFromUser = async (req, res) => {
    try {
        const { user_id } = req.params
        const reservation = await Reservations.findAll({ where: { userId: user_id } })
        if (reservation) {
            return res.status(200).json({ reservation })
        }
        return res.status(404).send('User with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getReservationByUserId = async (req, res) => {
    try {
        const { user_id, reservations_id } = req.params
        const reservation = await Reservations.findOne({
            where: {
                userId: user_id,
                id: reservations_id
            }
        })
        if (reservation) {
            return res.status(200).json({ reservation })
        }
        return res.status(404).send('Reservation with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const createReservation = async (req, res) => {
    try {
        const user = await User.findOne({ where: { id: req.params.user_id } })
        const reservation = await Reservations.create(req.body)
        await reservation.setUser(user)
        return res.status(201).json({
            reservation
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


const getReservation = async (req, res) => {
    try {
        const reservation = await Reservations.findOne({ where: { id: req.params.id } })
        console.log(reservation)
        res.send({ reservation })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const updateReservation = async (req, res) => {
    try {
        const { id } = req.params
        const updated = await Reservations.update(req.body.reservations, {
            where: { id: id }
        })
        if (updated) {
            const updatedReservation = await Reservations.findOne({ where: { id: id } })
            return res.status(200).json({ reservation: updatedReservation })
        }
        throw new Error('Reservation not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Reservation.destroy({
            where: { id: id }
        })
        if (deleted) {
            return res.status(200).send('Reservation deleted')
        }
        throw new Error('Reservation not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const getAllCars = async (req, res) => {
    try {
        const cars = await Car.findAll()
        return res.status(200).json({ cars })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


const getCarById = async (req, res) => {
    try {
        const { id } = req.params
        const car = await Car.findOne({
            where: { id: id }
        })
        return res.status(200).json({ car })
    } catch (error) {
        return res.status(500).send(error.message)
    }

}

const updateCar = async (req, res) => {
    try {
        const { id } = req.params
        const [updated] = await Car.update(req.body, {
            where: { id: id }
        })
        if (updated) {
            const updatedCar = await Car.findOne({ where: { id: id } })
            return res.status(200).json({ car: updatedCar })
        }
        throw new Error('Car not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    getReservation,
    updateUser,
    deleteUser,
    getReservationsFromUser,
    getReservationByUserId,
    createReservation,
    updateReservation,
    deleteReservation,
    getAllCars,
    getCarById,
    updateCar
}