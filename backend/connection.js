const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://saniyack2_db_user:saniya@cluster0.b2c7gxz.mongodb.net/kmct?appName=Cluster0')
  .then(()=> {
    console.log('connected!')
  })
.catch((err)=>{
    console.log(err)
})