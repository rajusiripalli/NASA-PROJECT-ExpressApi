const express = require('express');
const cors = require('cors');


const planetsRouter = require('./routes/planets/planets.router');

const app = express();

// const corsOptions = {
//     //   origin: ["http://localhost:3000"],
//     origin: true,
//     credentials: true,
//   };
//app.use(cors())

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(planetsRouter);



module.exports = app;