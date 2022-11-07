const personas = [
    new Persona ('Jhon' , 'Ospino'),
    new Persona ('Alexander', 'Figueroa'),
];


function mostrarPersonas(){
    console.log('funcion mostrarPersonas Iniciada...');

   let texto = '';

   for (let persona of personas){

        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
   }
 
   document.getElementById('personas').innerHTML = texto;

}


function agregarPersonas(){

    console.log('se presiono el boton agregarPersonas');
    const formul = document.forms['formul'];
    const nombre = formul['nombre'];
    const apellido = formul['apellido'];


    if (nombre.value != '' && apellido.value != ''){

        const persona = new Persona (nombre.value , apellido.value);
        personas.push(persona);
        mostrarPersonas();
        console.log(persona);
    } 
    else {
        console.log("Debe ingresar los datos de nombre y apellido");
    }


}