
const apiFetch = document.getElementById("apifetch");
const btnClean = document.getElementById("btnClean");

showTable = ( ) => {return document.getElementById("tabla").style.display = "inline";}
disguiseTable = ( ) => {return document.getElementById("tabla").style.display = "none";}

disguiseTable();
btnClean.disabled= true;

const cacheTime = 60000; // un minuto en milisegundos

apiFetch.onclick = async () => {
    try {
        // Datos de ususario guardados previamente en formato json
        const savedUserData = localStorage.getItem("userData");
        // marca de tiempo en que se guardaron los datos
        const savedTime = localStorage.getItem("userDataTime");
        // tiempo actual en milisegundos
        const currentTime = new Date().getTime();
        apiFetch.disabled= true;
        btnClean.disabled= false;

        // se verifca si savedUserData y savedTime tienen valores, si tienen valosres significa que hay datos en el locl storage
        if (savedUserData && savedTime) {
            // se compara si la diferencia entre el tiempo actual y la marca de tiempo almacenada es menor que cacheTime, si es asi los datos no han expirado
            if (currentTime - Number(savedTime) < cacheTime) {
                const parsedData = JSON.parse(savedUserData);
                showTable();
                showData(parsedData);
                return; // No es necesario realizar una nueva solicitud
            }
        }
        // si lo datos expiraron o no hay datos se realiza la peticion a la api
        const responseJson = await fetch("https://reqres.in/api/users?delay=3");
        const response = await responseJson.json();
        console.log(response);
        showTable();
        showData(response.data);

        // los nuevos datos se almacenan en el local storage
        localStorage.setItem("userData", JSON.stringify(response.data));
        // se almacena la marca de tiempo actual
        localStorage.setItem("userDataTime", currentTime.toString());
    } catch (error) {
        alert("Ha ocurrido un error.");
    }
};



const showData = (data) => {
    console.log(data);
    let body = '';
    for (let i = 0; i < data.length; i++){
        body += `<tr class="tableData"><td>${data[i].id}</td><td>${data[i].first_name}</td><td>${data[i].last_name}</td><td>${data[i].email}</td><td><img src="${data[i].avatar}" alt="Avatar"  class="imgRedonda d-none d-sm-block" /></td></tr>`;
     }
     document.getElementById("data").innerHTML = body;

     localStorage.setItem("userData", JSON.stringify(data));
}


btnClean.onclick = () => {
    let body = '';
    document.getElementById("data").innerHTML = body; 
    apiFetch.disabled= false;
    btnClean.disabled= true;
    disguiseTable();

}



