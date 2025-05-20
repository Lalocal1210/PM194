const personas = [
  { nombre: "Ana", edad: 22 },
  { nombre: "Luis", edad: 35 },
  { nombre: "María", edad: 28 }
];
  //encontrar a luis
const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log("persona encontrada:",personaLuis);
//imprimir los nombres de la personas con su edad
personas.forEach(persona=> {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

//sumar todas las edades
const totalEdades =personas.reduce((total,persona) => total + persona.edad,0);
console.log("suma total de edades:",totalEdades);