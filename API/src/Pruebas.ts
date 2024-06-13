/*import express from 'express'
import actividad from './Actividad';
import usuario from '..';
import { stringify } from 'qs';
const router = express.Router();

//TERMINA EL INICIO
//ARRANCA LA CLASE

//Crear Actividad
router.post('/activity',(req,res)=>{
  let activity: actividad = {
    title : req.body.title,
    description : req.body.description,
    image : req.body.image

  }
  const nuevaActividad = usuario.activities.find((actividad) => actividad.title == req.body.title);
  if(nuevaActividad) {
    res.status(200).send('La Actividad que intenta agregar ya existe')
  }
  else {
    usuario.activities.push(activity)
    res.status(200).send('Actividad creada exitosamente')
    //res.status(200).send('Actividad creada exitosamente \n '+ JSON.stringify(usuario.activities))

  }
});


//Mostrar actividades
/*router.get('/activity', (req, res) => {
  const actividades = usuario.activities;
  if (actividades.length > 0) {
    res.status(200).json(actividades); // Enviar o en este caso seria mostrar las actividades como respuesta en formato JSON
  } else {
    res.status(400).send('No hay actividades disponibles'); // Aca no se si es error 200 o 400
  }
});
*/
/*
//Mostrar Actividades 2
router.get('/activity', (req, res) => {
  const actividades = usuario.activities;
  if (actividades.length > 0) {
    // Construir un mensaje legible para mostrar las actividades
    const actividadesFormatted = actividades.map((actividad, index) => {
      return `Actividad ${index + 1}:
        Título: ${actividad.title}
        Descripción: ${actividad.description}
        Imagen: ${actividad.image ? actividad.image : 'No disponible'}
        ----------------------------`;
    }).join('\n');

    const mensaje = `Actividades disponibles:\n${actividadesFormatted}`;
    res.status(200).send(mensaje);
  } else {
    res.status(200).send('No hay actividades disponibles');
  }
});


//Crear Propuesta
router.post('/crearPropuesta',(req,res) =>{
  let propuesta = {
    propuesta:req.body.propuesta
  }
  
  let todoOk= true
  console.log("EL REQ BODY es: "+req.body.propuesta + "\n")
  let texto = req.body.propuesta
  const texto3= stringify(propuesta.propuesta)
  texto3.trim()
  //const texto2= req.body.propuesta
  //console.log(texto+'  ESTO ES LO QUE PARSEO Y QUEDA ASÍ: \n')
  //console.log('texto 1: '+texto)
  //console.log(texto2)
  let texto2 = JSON.stringify(req.body.propuesta)
  console.log("1")
  console.log(texto)
  console.log("2")
  console.log(texto2)
  console.log("3")
  console.log(texto3)
  texto2=texto2.trim()
  const propuestas = texto2.split(',')
  console.log(propuestas)
  const lista: actividad[]=[]
  //console.log(stringify(propuestas))
  propuestas.forEach((propuestaTitulo) => {
    const actividadEncontrada = usuario.activities.find((actividad) => actividad.title === propuestaTitulo);
    if (actividadEncontrada) {
      lista.push(actividadEncontrada);
    }
    else {
      todoOk= false
      res.status(400).send('La actividad '+(propuestaTitulo)+ ' no se encontro')
    }
  });
  if(todoOk){
    usuario.propuestas.push(lista)
    res.send('Propuesta creada con exito '+stringify(lista))
  }

});

  
//Mostrar Propuestas
router.get('/propuestas', (req, res) => {
  const propuestas = usuario.propuestas;

  if (propuestas.length > 0) {
    let mensaje = 'Propuestas disponibles:\n';

    propuestas.forEach((lista, index) => {
      mensaje += `Lista ${index + 1}:\n`;

      lista.forEach((actividad, actividadIndex) => {
        mensaje += `Actividad ${actividadIndex + 1}:\n`;
        mensaje += `  Título: ${actividad.title}\n`;
        mensaje += `  Descripción: ${actividad.description}\n`;
        mensaje += `  Imagen: ${actividad.image ? actividad.image : 'No disponible'}\n`;
        mensaje += '-----------------\n';
      });
    });

    res.status(200).send(mensaje);
  } else {
    res.status(200).send('No hay propuestas disponibles');
  }
});

  




  
  

  

  export default router;//sino pongo esto luego no puedo exportar admin*/


  
































