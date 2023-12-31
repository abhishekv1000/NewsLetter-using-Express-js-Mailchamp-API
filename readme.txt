Step 1 - First we install Express,Body-parser,request

Step 2 - Make Express Server 

Step 3 - Make A Sign Up Page From HTML and In Form Tag Use Method "Post" And Action - '/'

Step 4 - USE app.get Method Connect The Route to Sign-up Page

      app.get('/', (req, res) => {
        res.sendFile(__dirname + "/index.html")
      })

Step 5 - Use app.post method and body parser >> Get entry detail from Bouttonsv 

      app.post('/',(req,res)=>{
        var firstname = req.body.fname
        var lastname = req.body.lname
        var email = req.body.email
      })


step 6 = use https.request for giving data into mailchamp API.

