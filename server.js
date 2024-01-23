const express = require('express');
const app = express();
const connectDB = require('./utils/db');  
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/',function(req, res){
    res.send("welcome to my restaurant");
})



const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);
const PORT = 5000;

connectDB().then(()=>{ 
    app.listen(PORT , ()=>{
        console.log(`server is running at port : ${PORT}`);
    });
});

