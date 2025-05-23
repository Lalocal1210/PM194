function simulaPeticionApi(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("Datos recibidos correctamente");
        },500);
    });
}

async function obtenerDatos() {
    const resultado = await simulaPeticionApi();
    console.log(resultado);
}

obtenerDatos()