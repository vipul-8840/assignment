const express  =  require("express");
const mongoose  = require("mongoose");
const userModel = require("./db");

const app = express();
const Port = 5000;
app.use(express.json());
const connectDB = async ()=>{
   try{
            await mongoose.connect("url")
            console.log("connect to Db")
   } catch(errors){
    console.error("MongoDB connection error:", errors);
   }

}

connectDB();

app.post("/users",async (req,res)=>{

    const {email,password,title} = req.body;

    try{
          await userModel.create({
            email,
            password,
            title
          })

          res.status(201).json({
            mssg:"User Created Succesfully"
          })
    }catch(errors){
        res.status(500).json({  error: errors.message })

    }
       
})


app.get('/users/:email' ,async(req,res)=>{
    const {email} = req.params;
    
    try{
              const user = await userModel.findOne ({email});
              if(!user)
              {
                return res.status(404).json({ message: 'User not found' });
              }

             
              res.status(200).json(user)

    }catch(errors){
         res.status(500).json({
            message:errors.message
         })
    }
})

app.put('/users/:email',async(req,res)=>{


    const {email}  = req.params;
    const {password,title} = req.body;
    
    try{

         const user = await  userModel.findOne({email});
         if (!user || user.password !== password)
         {
            return res.status(401).json({message:"invalid credentials"});

         } 
         if(!title)
         {
             return  res.status(401).json({message:"title is required"});
         }

         
         
         user.title = title;
         user.save();
         res.status(200).json({ message: "Title updated successfully",user });

    }catch(errors){
         res.status(500).json({message:errors.message})
    }

})

app.delete('/users/:email',async(req,res)=>{
    const { email } = req.params;
    const { password } = req.body;

    try{
        const user = await userModel.findOne({ email });
        if (!user || user.password !== password) {
           return  res.status(401).json({message:"invalid credentials"});
        }

        
      
          await userModel.deleteOne({ email });

          res.status(200).json({ message: "User deleted successfully" });

    }catch(errors)
    {
        res.status(500).json({ message: errors.message });

    }

})


app.listen(Port ,()=>{
    console.log("http://localhost:5000");
})
