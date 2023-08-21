
const apiFetch = document.getElementById("apifetch");

const MAX_CACHE_TIME = 60000; // un minuto en milisegundos

apiFetch.onclick = async () => {
    try {
        // Datos de ususario guardados previamente en formato json
        const savedUserData = localStorage.getItem("userData");
        // marca de tiempo en que se guardaron los datos
        const savedTimestamp = localStorage.getItem("userDataTimestamp");
        // tiempo actual en milisegundos
        const currentTime = new Date().getTime();

        // se verifca si savedUserData y savedTmesStamp tienen valores, si tienen valosres significa que hay datos en el locl storage
        if (savedUserData && savedTimestamp) {
            // se compara si la diferencia entre el tiempo actual y la marca de tiempo almacenada es menor que MAX_CACHE_TIME, si es asi los datos no han expirado
            if (currentTime - Number(savedTimestamp) < MAX_CACHE_TIME) {
                const parsedData = JSON.parse(savedUserData);
                showData(parsedData);
                return; // No es necesario realizar una nueva solicitud
            }
        }
        // si lo datos expiraron o no hay datos se realiza la peticion a la api
        const responseJson = await fetch("https://reqres.in/api/users?delay=3");
        const response = await responseJson.json();
        console.log(response);
        showData(response.data);

        // los nuevos datos se almacenan en el local storage
        localStorage.setItem("userData", JSON.stringify(response.data));
        // se almacena la marca de tiempo actual
        localStorage.setItem("userDataTimestamp", currentTime.toString());
    } catch (error) {
        alert("Ha ocurrido un error.");
    }
};



const showData = (data) => {
    console.log(data);
    let body = ''
    for (let i = 0; i < data.length; i++){
        body += `<tr><td>${data[i].id}</td><td>${data[i].first_name}</td><td>${data[i].last_name}</td><td>${data[i].email}</td><td><img src="${data[i].avatar}" alt="Avatar"  class="imgRedonda" /></td></tr>`;
     }
     document.getElementById("data").innerHTML = body;

     localStorage.setItem("userData", JSON.stringify(data));
}