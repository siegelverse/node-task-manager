const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true, 
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const dinner = new Task({
    description: 'Make thai stir fry for dinner', 
    completed: false
})

dinner.save().then(() => {
    console.log(dinner)
}).catch(() => {
    console.log('Error!', error)
})

const me = new User({
    name: 'Marcus', 
    age: 27
})

me.save().then(() => {
    console.log(me)
}).catch(() => {
    console.log('Error!', error)
})