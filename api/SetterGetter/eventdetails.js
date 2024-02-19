const jwt = require('jsonwebtoken')
const connect = require ('../connection')


function details(req,res)
{
    const sql = `SELECT * FROM events WHERE id_events_random ='${req.body.id}' and id_user = '${req.body.id_user}'; `
    
    if(req.body.id)
    {
        connect.query(sql,(err,data)=>
        {
            if(err)
            {
                res.send({error :err})
            }else
            {
             if(data.length==0) 
             {
                res.send({error: "event was not found type error 404"})
             }else{
                res.send(data)
             }
            }
        })
    }
}

module.exports = details