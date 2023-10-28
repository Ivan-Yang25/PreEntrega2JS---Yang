document.addEventListener('DOMContentLoaded', () => {

   let nombre = prompt('Ingrese su nombre');
   let edad = prompt('Ingrese su edad');
   let asunto = prompt('Ingrese su motivo de consulta');
   let fecha = prompt('Indique la fecha de la reserva');
   let container = document.getElementById('contents');
   let info = document.createElement('div');

   function Consulta(nombre, edad, asunto, fecha) {
        this.nombre = nombre;
        this.edad = edad;
        this.asunto = asunto;
        this.fecha = fecha;
   };
    
   const Consulta1 = new Consulta(nombre, edad, asunto, fecha);

   info.innerHTML = `

        <p>
            Nombre: ${Consulta1.nombre}</br>
            Edad: ${Consulta1.edad}</br>
            Motivo de consulta: ${Consulta1.asunto}</br>
            Fecha solicitada : ${Consulta1.fecha}
        </P>

   `
   
   container.appendChild(info);

   alert('¡Reserva generada con éxito!');
   
});