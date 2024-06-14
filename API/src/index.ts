import express from 'express'
import alumnoRoutes from './routes/Alumno_Routes'


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


app.use('/alumno', alumnoRoutes)

  
