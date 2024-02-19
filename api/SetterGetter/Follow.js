const connect = require('../connection')
const elliptic = require('elliptic');

const ec = new elliptic.ec('secp256k1');

const keyPair = ec.genKeyPair();

const publicKey = keyPair.getPublic('hex');
const privateKey = keyPair.getPrivate('hex');

function Follow(req,res){

let face
let carte

if(req.files){
    face = req.files.face
    carte = req.files.carte
    face.mv('../project1/public/img/'+face.name,(err)=>
    {
        if (err) throw err
    })
    carte.mv('../project1/public/img/'+carte.name,(err)=>
    {
        if (err) throw err
    })



            if(face.name === '' || carte.name === '' ||req.body.firstname ==='undefined'|| req.body.lastname ==='undefined' || req.body.Category ==='' || req.body.plans ==='' || req.body.id_voter_random ==='' || req.body.event === ''|| req.body.address ===''|| req.body.time ===""||req.body.userId ==="" || req.body.state_acc === "")
            {res.send({field: "required field"})
            console.log("empty");
        }
        else{
            const sql2 = `INSERT INTO voter( id_voter_random, id_events, id_user, Picture_face, plans, picture_catre, state_acc, firstname, lastname, time,address) VALUES ('${req.body.id_voter_random}','${req.body.event}','${req.body.userId}','${face.name}','${req.body.plans}','${carte.name}','${req.body.state_acc}','${req.body.firstname}','${req.body.lastname}','${req.body.time}','${req.body.address}')`;
            connect.query(sql2,(err,data2)=>{
            if(err){
                console.log("Sign222222222222222");
            res.send({error :err})
            console.log(sql2);
                }else{
                    res.send(data2)
                    console.log("Sign222222222222222");
                }

                     })}}  
}

module.exports = Follow



