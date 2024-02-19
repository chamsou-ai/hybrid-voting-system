const express = require('express')
const connect = require('../connection')
const router = express.Router()
const upload = require('express-fileupload')
const jwt = require('jsonwebtoken')
const AllEvents = require('../SetterGetter/allevents.js')
const thisEvents = require('../SetterGetter/thisEvent.js')
const myEvents = require('../SetterGetter/myEvents')
const Verify = require('../SetterGetter/methods.js')
const Delete = require('../SetterGetter/delete')
const details = require('../SetterGetter/eventdetails')
const sign = require('../SetterGetter/sign')
const Pools = require('../SetterGetter/CreatePools')
const Follow = require('../SetterGetter/Follow')
const request = require('../SetterGetter/request')
const Allnotification = require('../SetterGetter/Allnotification')
const Candidate = require('../SetterGetter/candidate')
const Voter = require('../SetterGetter/voter')





router.post('/sign', (req, res) => {
  console.log("object");
  sign(req,res)
  });

  router.post('/login',(req,res)=>{

    var user = req.body.username
    var pass = req.body.password

    var sql = `SELECT * FROM users WHERE username= '${user}' and password='${pass}'`
    connect.query(sql,(err,result)=>{
        if(err)
        {
          res.send( {error:err})
        }
      if(result.length==0){
        //res.send({connect:result[0]})
        res.send({error:'c'})  
      }else{
      //console.log(result[0]);
      const token = jwt.sign({id :result[0].id_users_random},'sec')
        res.cookie("access",token,{
            httpOnly :true
        } ).status(200).json(result[0])
    }
    })
  })

  router.post('/logout',(req,res) =>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
      }).status(200).json("User has been logged out.")
  })
  

  router.post('/events',(req,res) =>{
    if(req.files){
      const file = req.files.file
      console.log(file.name);
    const sql = `INSERT INTO events( id_events_random, eventsname, dateStart, dateEnd, location, descr, event_org, instruction, img_back, id_user) VALUES ('${req.body.random}','${req.body.eventname}','${req.body.startdate}','${req.body.eventEndDate}','${req.body.location}','${req.body.descr}','${req.body.eventOrg}','${req.body.instruction}','${file.name}','${req.body.user}')`
    Verify(req,res,sql)
      }
})

router.post('/allevents',(req,res)=>{
  AllEvents(req,res)
})

router.post('/getevent',(req,res)=>{
  thisEvents(req,res)
})
///My events
router.post('/myevents' ,(req,res)=>{
  myEvents(req,res)
})
router.post('/delete',(req,res)=>{
  console.log("object");
Delete(req,res)
})

router.post('/eventdetails',(req,res)=>{
details(req,res)
}
)
router.post('/pools',(req,res)=>{
  
  Pools(req,res)
  
}
)
  router.post('/followrs',(req,res)=>{
  
  Follow(req,res)
  
}
)
  router.post('/request',(req,res)=>{
  
    request(req,res)
  
}
)
  router.post('/Allnotification',(req,res)=>{
  
    Allnotification(req,res)
  
}
)
  router.post('/candidate',(req,res)=>{
  
    Candidate(req,res)
  
}
)
  router.post('/Voter',(req,res)=>{
  
    Voter(req,res)
  
}
)
  module.exports = router