const express = require('express')
const app = express();
const path = require('path');
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname+'/dist')));

// app.get('/', (req, res) => res.send('Hello World!'))
// app.get('/*', function(req,res) {
    
//     res.sendFile(path.join(__dirname,'dist/dalviroo-food-app/index.html'));
// });

// app.listen(port, () => console.log('Example app listening on port 3000!'))

app.listen(port);
// const express = require('express');
// const http = require('http');
// const path = require('path');

// // const api = require('./server/routes/api');
// const app = express();

// app.use(express.static(path.join(__dirname,'/dist')));
// app.get('*',(req,res)=>{
//     // res.sendFile(path.join(__dirname,'dist/index.html'))
//     const index = path.join(__dirname, 'dist/dalviroo-food-app/index.html');
//     res.sendFile(index);
// });

// const port = process.env.PORT || 3000
// app.set('port',port)
// app.listen(port, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });
// // const server  = http.createServer(app)
// // server.listen(port,()=>console.log('Running'))