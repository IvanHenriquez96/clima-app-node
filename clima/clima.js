const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=29de6aea2c4a0d3748168972c283f7c3`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}