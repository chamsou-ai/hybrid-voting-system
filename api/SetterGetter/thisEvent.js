const jwt = require('jsonwebtoken')
const connect = require ('../connection')


function thisEvents (req,res)
{
  
  const sql = `SELECT * FROM events WHERE events.id_events_random = '${req.body.id}'`
  connect.query(sql,(err,data)=>{
    if(err)
    {
      res.send({error :err})
    }else{
      if(data.length==0)
      {
        
        res.send({error:'events dont found'})
      }else{
        
        const sql1 = `SELECT * FROM voter WHERE id_events ='${data[0].id_events}' and id_user ='${req.body.userId}'`
        
        connect.query(sql1,(err,data1)=>{
          if(err)
          {
            res.send({error :'err'})
          }else{
                      if(data1.length!==0)
                        {
                          res.send({existe:data[0]})
                          
                        }else{
                        res.send(data[0])
                    }}
                })
      }
    }
  })

}

module.exports = thisEvents