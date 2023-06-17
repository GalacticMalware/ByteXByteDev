const searchInput = document.getElementById("name");
const userList = document.getElementById("userList");
let cpUser = "";
let cityU = ""
let stateU = "";
let email = "";
let nameU = "";
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm)
  );

  displayUsers(filteredUsers);
});

function displayUsers(users) {
  userList.innerHTML = "";

  users.forEach(user => {
   const listItem = document.createElement("li");
   listItem.textContent = user.name;
   listItem.addEventListener("click", () => {
     showUserInfo(user);
     const originSelect = document.getElementById("origin");
    const estateOption = Array.from(originSelect.options).find(option =>
      option.value === user.state
    );
    if (estateOption) {
     estateOption.selected = true;
     $("#cityUser").val( user.city)
    }
   });
   userList.appendChild(listItem);
  });
}


function showUserInfo(user) {
 userList.innerHTML = ""; // Limpiar la lista de usuarios

 const userInfo = document.createElement("div");
 userInfo.innerHTML = `
   <p>Nombre: ${user.name}</p>
   <p>Email: ${user.email}</p>
   <p>Teléfono: ${user.phone}</p>
   <p>Estado: ${user.state}</p>
 `;
 cpUser = user.cp
 cityU = user.city
 stateU = user.state
 email = user.email
 nameU = user.name
 userList.appendChild(userInfo);
}



$("#submit").click(function(){
  
  let destino = $("#destination").val();
  let city = $("#cityDestination").val();
  buscarPrecioAleatorio(city+","+destino);

 
  let dataChat = {
   prompt: "Dame la mejor opcion de "+JSON.stringify(dataAI) + "y el total"
  };

  let elemento = "resIA1"

  peticionIA(dataChat,elemento);

  

 

let cont = 1;
function peticionIA(data,ele){
 let data2 = {
  prompt: `crear la url para una pestaña de google maps el origen es el codigo postal ${cpUser}, el destino es el aeropuerto mas cercano`
 }

 let dataF = $("#resIA1").text();
 let data3 = {
  prompt: `redacta un coreo para solicitar la factura del taxi, aeropuerto y Hospedaje, pero has lo por separado  ${dataF} mi nombres es ${nameU} y mi correo es ${email}`
 }




 $.ajax({
  url: "http://localhost:5000/chat",
  type: "POST",
  data: JSON.stringify(data),
  contentType: "application/json",
  success: function(mensaje) {
    if (mensaje === "") {
      console.log("error");
    } else {
     if(mensaje.success){

      
      $("#"+ele).html(mensaje.data);
      if(cont == 1){
        dataF = mensaje.data;
      }

      if(ele == "urlm"){
        
        $("#urlm").attr("href",mensaje.data);
      }
     cont++;
      console.log(cont)
      if(cont == 2){
       
       console.log(data2)
       peticionIA(data2,"urlm")
      }

      if(cont == 3){
        console.log(data3)
        peticionIA(data3,"resIA3")
       }

 
     }
      
    }
  },
  error: function() {
    console.log("error");
  }
});
}
  

});