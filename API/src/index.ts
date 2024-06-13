import express from 'express'
import alumnoRouter from './routes/Alumno';


const app = express()
app.use(express.json()) //middleware

  //npm run dev
  //npm start             este no se porque no me acepta los metodos y el otro si

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running 123 on port ${PORT}`)
});




//ACA ARRANCA LA PARTE DE SEGURIDAD osea el MIDDLEWARE


const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE"
};

app.use(cors(corsOptions));
////////////////////////////////////////////////////////////

/* JWT *////////////////////////////////////////////////////
export const jwt = require('jsonwebtoken');

export function generateAccessToken(usuario: string) {
    return jwt.sign({ usuario: usuario }, 'miClaveSecreta', { expiresIn: '1h' });
}

//Una vez otorgado el JWT con esto compurebo que lo tenga
export function authenticate(req: any, res: any, next: any) {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
      return res.status(401).send({ message: "Unauthorized" });
  } else {
      const token: string = authorizationHeader.split(' ')[1];
      try {
          jwt.verify(token, 'shhhhh');
          next();
      } catch (err: any) {
          if (err.name === 'TokenExpiredError') {
              res.status(401).send({ message: "TokenExpiredError" });
          } else {
              const error = new Error("Error! Something went wrong.");
              return next(error);
          }
      }
  }
}


app.get('/test', (req, res) => {    
    console.log("hello world");
    res.send('V 1.1')
});

app.use('/alumno', alumnoRouter);
  
