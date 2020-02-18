const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima('-33.459999', '-70.639999')
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {



    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        console.log(`La temperatura de ${direccion} es de ${temperatura}`);
    } catch (error) {
        console.log(`no se puede determinar el clima de ${direccion}`);
    }

}
getInfo(argv.direccion);