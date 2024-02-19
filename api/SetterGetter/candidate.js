const jwt = require('jsonwebtoken')
const connect = require ('../connection')


function candidate(req,res)
{
    const sql = `SELECT * FROM events WHERE id_events_random ='${req.body.id}'; `
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
                    const candidate =`SELECT * FROM candidate WHERE id_events = '${ data[0].id_events}' and state_acc = 1 and id_user = '${req.body.id_user}' `
                    connect.query(candidate,(err,data2)=>{
                        console.log(candidate);
                        if(!err)
                        {
                        res.send(data)
                    }
                })

             }
            }
        })
    }
}

module.exports = candidate