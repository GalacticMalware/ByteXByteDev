let users = [
 {
  name: "juan Calos gomez",
  email: "juan.gomez@crediclub.com",
  phone: "9671273506",
  state: "Chiapas",
  city: "San Cristobal de la Casas",
  cp: 29270
 },
 {
  name: "Daniel Alejandro",
  email: "daniel@crediclub.com",
  phone: "9671273506",
  state: "Chiapas",
  city: "Tuxtla Gutirez",
  cp: 29000
 },
 {
  name: "Rodrigo",
  email: "Rodrigo@crediclub.com",
  phone: "9671273506",
  state: "Nuevo León",
  city:"Monterrey",
  cp: 66635
 }
]




function generarPrecioAleatorio(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dataAI = [];


function buscarPrecioAleatorio(destino) {

 const aeropuertos = [
  { nombre: "Volaris", destino: destino },
  { nombre: "VivaAerobus", destino: destino },
  { nombre: "Aeroméxico", destino: destino }
 ];

 const hoteles = [
  { nombre: "City Express"},
  { nombre: "Fiesta Inn"},
  { nombre: "Holiday Inn"}
 ];


 const taxis = [
  { nombre: "taxis local"},
  { nombre: "Uber"},
  { nombre: "taxi aeropuerto"}
 ];


 
 aeropuertos.forEach(aeropuerto => {
  const precio = generarPrecioAleatorio(1000, 5000);
  aeropuerto.precio = precio;
 });

 hoteles.forEach(hotel => {
  const precio = generarPrecioAleatorio(1000, 5000);
  hotel.precio = precio;
 });

 taxis.forEach(taxi => {
  const precio = generarPrecioAleatorio(300, 600);
  taxi.precio = precio;
 });

 const preciosFiltrados = aeropuertos.filter(aeropuerto => aeropuerto.precio <= 5000);
 const preciosFiltradosH = hoteles.filter(hotel => hotel.precio <= 5000);
 const preciosFiltradosT = taxis.filter(taxi => taxi.precio <= 600);

 if (preciosFiltrados.length > 0) {
 
   aeropuertos.forEach(aeropuerto => {
    const aeroList = document.getElementById("optA");
    const listItem = document.createElement("li");
    listItem.textContent = `Aerolínea : ${aeropuerto.nombre}. Destino ${aeropuerto.destino} $${aeropuerto.precio}`;
    aeroList.appendChild(listItem);
   
  });
  dataAI.push(aeropuerto = {aeropuertos});
 } else {
   console.log("No se encontró ningún precio válido.");
 }

 if (preciosFiltradosH.length > 0) {
  hoteles.forEach(hotel => {
   const hList = document.getElementById("optH");
   const listItem = document.createElement("li");
   listItem.textContent = `Hospedaje : ${hotel.nombre}. Precio $${hotel.precio}`;
   hList.appendChild(listItem);
   
 });
 dataAI.push(hotel = {hoteles});
} else {
  console.log("No se encontró ningún precio válido.");
}

if (preciosFiltradosT.length > 0) {
 
 taxis.forEach(taxi => {
  const tList = document.getElementById("optT");
  const listItem = document.createElement("li");
  listItem.textContent = `Trasporte : ${taxi.nombre}. Precio $${taxi.precio}`;
  tList.appendChild(listItem);
 

});
dataAI.push(taxi= {taxis});
} else {
 console.log("No se encontró ningún precio válido.");
}
}