const express = require('express');
const app = express();
const path = require('path');
const PORT = 3030; 

/*configuraciones*/

app.use(express.static('public'));


/*RUTAS*/

app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')));
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')));
app.get('/ingreso',(req,res) => res.sendFile(path.join(__dirname,'views','ingreso.html')));
app.get('/profile',(req,res) => res.sendFile(path.join(__dirname,'views','profile.html')));
app.get('/*',(req,res) => res.sendFile(path.join(__dirname,'views','404.html')));


app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT))