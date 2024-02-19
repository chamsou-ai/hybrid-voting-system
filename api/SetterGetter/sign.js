const jwt = require('jsonwebtoken')
const connect = require ('../connection')

  function sign (req,res){
let file

if(req.files){
  file = req.files.file
  file.mv('../project1/public/img/'+file.name,(err)=>
  {
      if (err) throw err
  })
  let SQL = `INSERT INTO users(id_users_random, firstname, lasrname, country, state, dateB, id_number, username, password, imgFile, sexe) values(`+ req.body.random+`, '`+req.body.firstname+`','`+req.body.lastname+`','`+req.body.country+`','`+req.body.state+`','`+req.body.brith+`','`+req.body.id+`','`+req.body.username+`','`+req.body.pass+`','`+file.name+`','`+req.body.sexe+`')`
        if(req.body.random ==="" || req.body.id ==="" || req.body.firstname ==="" || req.body.lastname ==="" || req.body.country ==="" || req.body.state ==="" || req.body.birth ==="" ||req.body.pass ===""|| req.body.username ==="" ||req.body.sexe ==="")
        {
            res.send({error :err})
            
        }else
        {
        connect.query(SQL,(err,data)=>{
      if(err)
      {
        
        res.send({error:err})
      }else
      {
      
        res.send(data)
      }
    })
        }
    }
  }

module.exports = sign