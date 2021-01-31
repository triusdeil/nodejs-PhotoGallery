const app = require('./app');

//Server
app.listen(app.get('port'), () =>{
    console.log(`server on port ${app.get('port')}`);
})