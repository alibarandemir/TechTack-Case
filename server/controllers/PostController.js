const axios= require('axios')



const getAllPost= async (req,res)=>{
    console.log("b")
    try{
        const response= await axios.get("https://jsonplaceholder.typicode.com/posts")
        const data= response.data
        res.status(200).json({data:data})
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
    
}

module.exports= {getAllPost}