// const {v4: uuidv4 }= require('uuid');
// console.log(uuidv4());
const express= require('express');
const app= express();
const PORT=3000
app.get('/',(req, res)=>{
res.send('hello from node');

})
app.listen(PORT,()=>{
    console.log('listening on 3000 ...')
})

