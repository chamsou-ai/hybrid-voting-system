const jwt = require('jsonwebtoken')
const connect = require ('../connection')




function myEvents(req,res)
{
  const sql = `SELECT * FROM users ,events  WHERE users.id_users = events.id_user AND id_users = '${req.body.id}';`
  connect.query(sql,(error,data)=>{
    if(error)
    {
      
      res.send({error:"check error"})
    }else{
      if(data.length ==0)
      {
      
      res.send({error:"you dont have events"})
    }else{
    
      res.send({data:data})
    }
  }
  })

}

module.exports = myEvents