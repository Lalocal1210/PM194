const persona = {
  nombre: "eduardo",
  edad: 22,
  direccion: {
    ciudad: "Qro",
    pais: "MX"
  }
};

// destructuración 
const { nombre, edad, direccion: { ciudad } } = persona;

// Imprime el mensaje
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}.`);
