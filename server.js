const express = require('express')

const app = express(); 


app.use(express.static('public'))

//MAXapp.use(express.static(path.join(__dirname, 'public')));
const port = 3000; 
app.listen(port, console.log(`App started on port ${port}`))