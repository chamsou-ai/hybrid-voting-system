const jwt = require('jsonwebtoken')
const connect = require ('../connection')

function Delete(req,res)
{
    const sql = `SELECT * FROM  events  WHERE events.id_user = ${req.body.id_user} AND id_users_random = '${req.body.id_random}';`
    connect.query(sql,(err,data)=>{
        if(err)
        {
            res.send({error:err})
        }else{
            if(data.length ===0)
            {
                res.send({error :'this events cant be deleted'})
            }
            else
            {
                console.log(sql);
                connect.query(`DELETE FROM events WHERE id_events_random=${req.body.id_random}`,(err,rsul)=>{
                    console.log(rsul);
                })
            }
        }
    })
}

module.exports = Delete