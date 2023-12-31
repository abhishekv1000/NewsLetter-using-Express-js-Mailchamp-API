const request = require('request')
const bodyParser = require('body-parser')
const express = require('express')
const https = require("https")
const { subscribe } = require('diagnostics_channel')
const { stringify } = require('querystring')

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true}))

app.use(express.static("Public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.post('/',(req,res)=>{
   var firstname = req.body.fname
   var lastname = req.body.lname
   var email = req.body.email
    
   var data ={
    members :[
        {
            email_address : email,
            status : "subscribed",
            merge_field :{
                FNAME : firstname,
                LNAME : lastname
            }
        }] };
        
    const jsonData = JSON.stringify(data)
    const url = "https://us21.api.mailchimp.com/3.0/lists/dfac3075e8";

    const options={
        method:"POST",
        auth : "abhi:08d74d99febe72db1df5515717878987-us21"
    }

    const give =  https.request(url,options,function(response){

        if(response.statusCode===200){
            res.sendFile(__dirname + "/success.html")
        }else{
            res.sendFile(__dirname + "/failure.html")
        }
        
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })
   
    give.write(jsonData);
    give.end()
    
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


//4af1e845340b4c2d57a373745b755de9-us21
//dfac3075e8.