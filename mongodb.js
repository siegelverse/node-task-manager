//CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    } 
    
    const db = client.db(database)

    // db.collection('users').insertOne({
    //     name: 'marcus',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('users').insertMany([
        {
            name: 'snax', 
            age: 5
        },
        {
            name: 'bernie',
            age: 79
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert users')
        } 

        console.log(result.ops)
    })

    db.collection('tasks').insertMany([
        {
            description: 'work on react interview questions',
            completed: false
        },
        {
            description: 'meeting with tim', 
            completed: true
        }, 
        {
            description: 'tricep and chest push workout', 
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks')
        }
        
        console.log(result.ops)
    })
})