const jwt = require('jsonwebtoken')
const connect = require ('../connection')


function AllEvents(req,res)
{
    const sql2 = `SELECT * FROM events ORDER BY events.id_events DESC` 
  const sql = `SELECT * FROM users WHERE id_users_random = '${req.body.id_users_random}'`
  connect.query(sql,(err,data) =>{
    if(data.length !== 0)
    
    {
      connect.query(sql2,(err,datasend) =>{
        
            res.send(datasend)
          })
        }
      })
      
}
   
module.exports = AllEvents

  