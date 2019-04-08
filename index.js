const mongoose=require('mongoose');

const Dish_model=require('./models/dishes');
const url='mongodb://localhost:27017/conFusion';
const connect=mongoose.connect(url);

connect.then(function(db){
    console.log('connected successfully');
   const newDish=Dish_model({name:"maggi",description:"test"});
   newDish.save()
       .then(function(dish){
           console.log(dish);
           return Dish_model.find({}).exec();
       })
       .then(function(d3ish){
           console.log(d3ish);
           return Dish_model.remove({});
       })
       .then(function(){
           return mongoose.connection.close();
       })
       .catch(function(err){console.log(err);})
});