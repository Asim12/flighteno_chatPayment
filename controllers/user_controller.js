var express = require('express');
var router = express.Router();

const MongoClient =   require('mongodb').MongoClient;
const objectId    =   require('mongodb').ObjectId;
var conn          =   require("../dataBaseConnection/connection");
var helper        =   require('../helpers/common_helpers');
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.get('/testing', async function(req, res, next) {
    console.log('testing Done')

    let db = await conn
    db.collection('users').countDocuments({}, async (err, result) => {
        if(err){
            console.log('err')

        }else{
            console.log(await result)
        }
    })
    let data = await helper.getBasicAuthCredentials();
    console.log(data)
})


// function tes(req, res, next){  middleware function fir spacific route   
//     console.log('inner testing')
//     next()
// }



module.exports = router;
