const jwt = require('jsonwebtoken')
const connect = require ('../connection')


      function Verify(req,res,requete)
{
      console.log(req.body);
    if(req.body.eventname ==""  || req.body.startdate =='' ||req.body.eventEndDate =='' || req.body.location =='' ||req.body.descr =='' || req.body.eventOrg =='' || req.body.instruction =='' ||req.body.random =='' || req.body.user =='')
    {
      res.send({field : 'empty Field'})
    }else
    {
    const sql = `SELECT * FROM  events WHERE eventsname = '${req.body.eventname}'`
    connect.query(sql,(error,data) =>{
      if(error)
      {
        console.log("cccc");
      res.send({error :error})
      }
      if(data.length>0)
      {
        res.send({error :'errr'})
      }

      if(data.length ==0){
      connect.query(requete,(err,donnee)=>{
        if(donnee.length !==0 ){
      res.send({conne :'secc'});
      let file = req.files.file
      file.mv('../project1/public/img/'+file.name,(err)=>
    {
        if (err) throw err
    })
  }
  })
      }
    })
}}


module.exports = Verify 

