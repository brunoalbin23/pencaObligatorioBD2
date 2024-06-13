"use strict";
/*import express from 'express'
const router = express.Router();

//TERMINA EL INICIO
//ARRANCA LA CLASE

interface cuenta {
    gmail: string
    password: string
  }

  const cuentas:cuenta[]=[];
    router.post('/crearCuenta', (req, res) => {
    let cuenta:cuenta = {
      gmail: req.body.mail,
      password: req.body.pass //la primera parte es como se ve y la segunda osea desc es como hay que ponerla en el JSON
    }
    if(cuentas.includes(req.body.mail)){
        res.send("La direccion de correo electrónico proporcionada ya esta en uso")
    }
    cuentas.push(cuenta)
    res.status(200).send("Cuenta creada exitosamente\n"+JSON.stringify(cuentas));
    console.log("probando el metodo")
    //res.send("Cuenta creada exitosamente")
    
  });*/
/*import cuenta from '../cuenta';

 const cuentas:cuenta[]=[];
   router.post('/crearCuenta', (req, res) => {
   let cuenta:cuenta = {
     gmail: req.body.mail, //el nombre de la prop Json debe coincidir con la interfaz
     password: req.body.pass, //la primera parte es como se ve y la segunda osea desc es como hay que ponerla en el JSON
   }
   if(cuentas.includes(req.body.mail)){
       res.send("La direccion de correo electrónico proporcionada ya esta en uso")
   }
   cuentas.push(cuenta)
   res.status(200).send("Cuenta creada exitosamente\n"+JSON.stringify(cuentas));
   console.log("probando el metodo")
   //res.send("Cuenta creada exitosamente")
   
 });

 router.get('/cuenta', (req, res) => {
   const { mail, pass } = req.query; // Obtén los valores de mail y pass de la solicitud GET
 
   // Busca una cuenta que coincida con los valores proporcionados
   const cuentaEncontrada = cuentas.find((cuenta) => cuenta.gmail === mail && cuenta.password === pass);
 
   if (cuentaEncontrada) {
     res.send(cuentaEncontrada);
   } else {
     res.status(404).send("Cuenta no encontrada");
   }
 });
 

 




 
 

 

 export default router;//sino pongo esto luego no puedo exportar admin*/
