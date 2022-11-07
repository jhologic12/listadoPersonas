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
       alert("no se puede dejar los campos nombre y apellido vacío")
    }


}




const forma = document.forms['formul'];

forma.addEventListener('focus', (evento)=>{evento.target.style.background = "pink"}, true);
forma.addEventListener('blur', (evento)=>{evento.target.style.background = ""}, true);