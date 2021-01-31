const express = require('express');
const multer = require('multer');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const { diskStorage } = require('multer');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views') + 'layouts'),
    partialsDir: path.join(app.get('views') + 'partials'),
}))
app.set('view engine', '.hbs');

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename:(req,res,cb) =>{
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer().single('image'));

//Routes
app.use(require('./routes'));

module.exports = app;