const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/users');
//conectar base de datos
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Noe9704:Noe9704@cluster0-isozg.mongodb.net/test?retryWrites=true',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(db => console.log('db is connected'))
  .catch(err => console.log(err));

app.set('port',process.env.PORT||3000);

//midelware
//poder ver en la consola lo que pasa en la pag
app.use(morgan('dev'));
app.use(bodyParser.json());


//rutas
app.use('/users', userRoutes);



//iniciar servidor

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});