"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cards_1 = __importDefault(require("./routes/cards"));
//import admin from './routes/admin'
//const { v4: uuidv4 } = require('uuid');//creo que me falto algo 
const app = (0, express_1.default)();
app.use(express_1.default.json()); //middleware
//npm run dev
//npm start             este no se porque no me acepta los metodos y el otro si
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running 123 on port ${PORT} estas funcionando?`);
});
/*

app.get('/test', (req, res) => {
    console.log("hello world");
    res.send('V 1.1')
});

app.get('/probandocosas', (req, res) => {
    console.log("HOLA MUNDO HERMOSO");
    res.send('PROBANDO EL PROGRAMA')
});


let cards: any[] = [];

app.post('/card', (req, res) => {
    let card = {
      id: uuidv4().toString(),
      text: req.body.text,
      description: req.body.description
    }
    cards.push(card)
    res.send(card);
  });

  app.get('/card', (req, res) => {
    res.send(cards);
  });

  let newcards: any[]=[];

  app.post('/newcard', (req, res) => {
    let card = {
      text: req.body.text,
      description: req.body.desc //la primera parte es como se ve y la segunda osea desc es como hay que ponerla en el JSON
    }
    newcards.push(card)
    res.send(newcards);
  });

  app.get('/newcard', (req, res) => {
    res.send(newcards);
  });

  app.get('/ejemplo', (req, res) => {
    const parametro = req.query.estado; // Obtiene el parámetro 'estado' de la URL
  
    if (!parametro) {
      // Si no se proporciona el parámetro 'estado', se establece el código 400 (Solicitud incorrecta)
      //el parámetro se proporciona de la siguiente manera: http://localhost:3000/ejemplo?estado=PARÁMETRO
      res.status(400).send('Debe proporcionar el parámetro "estado".');
    } else if (parametro === 'exito') {
      // Si el parámetro 'estado' es 'exito', se establece el código 200 (Éxito)
      res.status(200).json({ message: 'Operación exitosa.' });
    } else if (parametro === 'prohibido') {
      // Si el parámetro 'estado' es 'prohibido', se establece el código 403 (Prohibido)
      res.status(403).send('Acceso prohibido.');
    } else {
      // Para cualquier otro valor de 'estado', se establece el código 404 (No encontrado)
      res.status(404).send('Recurso no encontrado.');
    }
  });*/
//ACA ARRANCA EL OBLIGATORIO
app.use('/api/cards', cards_1.default); //el que ellos nos dieron
const cuentas = [];
app.post('/crearCuenta', (req, res) => {
    console.log(req.body);
    let cuenta = {
        gmail: req.body.mail,
        password: req.body.pass, //la primera parte es como se ve y la segunda osea desc es como hay que ponerla en el JSON
    };
    /*if(cuentas.includes(req.body.mail)){ //aca no me da true nunca no se porq
      res.send("La direccion de correo electrónico proporcionada ya esta en uso")
  }*/
    cuentas.forEach((elemento) => {
        console.log(elemento.gmail + " - " + req.body.mail);
        if (elemento.gmail == req.body.mail) { //aca me compara gmail con gmail
            console.log("LA SIGUIENTE CUENTA YA EXISTE");
            console.log(elemento.gmail + " este es el body:");
            console.log(req.body);
            console.log(req.body.mail + " --- " + req.body.password + " y el gmail es " + req.body.gmail); //si pongo mail en vez de gmail sale undefinded y lo mismo si pongo password en vez de pass
            res.send("La direccion de correo electrónico proporcionada ya esta en uso"); // Además si los sumo sin nada en medio la ser una suma de 2 undefined sale NaN
        }
    });
    cuentas.push(cuenta);
    res.status(200).send("Cuenta creada exitosamente\n" + JSON.stringify(cuentas));
    console.log("probando el metodo");
    //res.send("Cuenta creada exitosamente")
});
app.get('/cuenta', (req, res) => {
    const { mail, pass } = req.query; // Obtén los valores de mail y pass de la solicitud GET
    // Busca una cuenta que coincida con los valores proporcionados
    const cuentaEncontrada = cuentas.find((cuenta) => cuenta.gmail === mail && cuenta.password === pass);
    if (cuentaEncontrada) {
        res.send(cuentaEncontrada);
    }
    else {
        res.status(404).send("Cuenta no encontrada");
    }
});
