const personas = [
    new Persona ('Jhon' , 'Ospino'),
    new Persona ('Alexander', 'Figueroa')
];


function mostrarPersonas(){
    console.log('funcion mostrarPersonas Iniciada...');

   let texto = '';

   for (let persona of personas){

        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
   }
 
   document.getElementById('personas').innerHTML = texto;

}