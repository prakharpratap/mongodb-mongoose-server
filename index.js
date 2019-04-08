const mongoose=require('mongoose');

const Dish_model=require('./models/dishes');
const url='mongodb://localhost:27017/conFusion';
const connect=mongoose.connect(url);

connect.then(function(db) {
    console.log('connected successfully');


    Dish_model.create({
        name: 'Uthappizza',
        description: 'test'
    })
        .then((dish) => {
            console.log(dish);

            return Dish_model.findByIdAndUpdate(dish._id, {
                $set: {description: 'Updated test'}
            }, {
                new: true
            })
                .exec();
        })
        .then((dish) => {
            console.log(dish);

            dish.comments.push({
                rating: 5,
                comment: 'I\'m getting a sinking feeling!',
                author: 'Leonardo di Carpaccio'
            });

            return dish.save();
        })
        .then((dish) => {
            console.log(dish);

            return Dish_model.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
})

