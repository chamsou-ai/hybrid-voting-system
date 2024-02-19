const jwt = require('jsonwebtoken')
const connect = require ('../connection')

var i=0;
function Allnotification(req,res)
{

    const sql3 = `SELECT * FROM events where id_events_random =${req.body.idEvent}`
    connect.query(sql3,(err,data)=>{
        if(err || data.length ===0)
        {
            res.send({error :"events was not found"})
        }else{
            const sql = `SELECT  * FROM voter ,users  WHERE voter.id_events = ${data[0].id_events} and state_acc = 0 and voter.id_user = users.id_users ORDER BY id_Voter DESC   `;
            connect.query(sql,(err,data)=>{
                if(err)
                {
                    res.send({error :err})
                }else{
                    if(data.lenght ===0)
                    {
                        res.send({error :"no notification"})
                    }else{
                        res.send(data)
                        }
                }
            })

        }
    })
   
}

module.exports = Allnotification