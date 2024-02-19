const jwt = require('jsonwebtoken')
const connect = require ('../connection')


function voter(req,res)
{
    const sql = `SELECT * FROM voter,users WHERE id_voter_random ='${req.body.id}' and voter.id_user = users.id_users; `
    const sql3 = `DELETE FROM voter WHERE id_voter_random=${req.body.id}`

    console.log(sql);
    if(req.body.state)
    {
        console.log(sql3);
        connect.query(sql3,(err,data)=>{
            if(err)
            {
                res.send({error:err})

            }
        })
    }else{
        if(req.body.accept)
    {
        const sql4 = `UPDATE voter SET state_acc='1' WHERE id_voter_random =${req.body.id}`
        connect.query(sql4,(err,data2)=>{
            if(err)
            {
                res.send({error:err})
            }else{
                res.send(data2)
            }
        })
    }else{


    

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
    }}
    }
    
}

module.exports = voter