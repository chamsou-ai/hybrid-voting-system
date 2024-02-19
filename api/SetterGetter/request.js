const connect = require('../connection')

function request(req,res)
{
    if(req.body)
    {
        const sql = `SELECT  * FROM followers WHERE  id_events= '${req.body.id}' and accepte = 0 Order by id_followers desc limit 3`
        connect.query(sql,(err,data)=>{
            
            if(err)
            {
                res.send({error:err})
            }else{
                if(data.length ===0)
                {
                    res.send({error:"no request"})
                }else{
                    res.send(data)
                    
                }
            }
        })
    }
}
module.exports = request