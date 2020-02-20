import axios from 'axios';

const base = 'http://localhost:3000/'


export const getCarByType = async (cartype) => {
    const res = await axios.get(`${base}cars/${cartype}`)
    return res.data
  }