const express = require('express'),
      path = require('path'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');

const app = express();

// importammos el archivo de rutas que esta en el la carpeta de routes
const customerRoutes = require('./routes/customer');

// confiruracion de puerto para conexion y viclacion de la vista
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));

//  configuracio de conexion de base de datos de mysql
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'victor',
  password: '12345/',
  port: 3306,
  database: 'crudnodejsmysql'
}, 'single'));

app.use(express.urlencoded({extended: false}));

// usamos la ruta
app.use('/', customerRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// inicializamos el servidor de la app configurando el puerto de salida
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
