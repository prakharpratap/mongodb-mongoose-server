const mongoose=require('mongoose');
const Dishes=require('./models/dishes');

const url='mongodb://localhost:27017/conFusion';

const connect=mongoose.connect(url);

connect.then(function(db){
    Dishes.create({name:"pra",description:"test"})
        .then(function(dish)
        {console.log(dish);
        return Dishes.findByIdAndUpdate(dish._id,{$set:{description:'fucked'}},{new :true})})
        .then(function(dish){
            console.log(dish);
            dish.comments.push({rating:4,comment:'a little good',author:'prakhar'});
            return dish.save();
        })
        .then(function(dish){
            console.log(dish);
            return Dishes.remove({});
        })
        .then(function(){
            console.log('removed everything');
            return mongoose.connection.close();
        })
        .catch(function(err){console.log(err);});

});