if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const app = require('./app');

//Server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
    console.log('Environment', process.env.NODE_ENV)
})