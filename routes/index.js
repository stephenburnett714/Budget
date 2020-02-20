const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

// Users
router.post('/users', controllers.createUser)
router.get('/users', controllers.getAllUsers)
router.get('/users/:id', controllers.getUserById)
router.put('/users/:id', controllers.updateUser)
router.delete('/users/:id', controllers.deleteUser)


// Reservations
router.get('/users/:user_id/reservations/:reservation_id', controllers.getReservationByUserId)
router.get('/users/:user_id/reservations', controllers.getReservationsFromUser)
router.get('/users/:id/reservations', controllers.getReservationsFromUser)
router.post('/users/:user_id/reservations', controllers.createReservation)
router.get('/reservations/:id', controllers.getReservation)
router.put('/reservations/:id', controllers.updateReservation)
router.delete('/reservations/:id', controllers.deleteReservation)

//Cars
router.get('/cars/Economy', controllers.searchEconomy)
router.get('/cars/Compact', controllers.searchCompact)
router.get('/cars', controllers.getAllCars)
router.get('/cars/:id', controllers.getCarById)
router.put('/cars/:id', controllers.updateCar)


module.exports = router