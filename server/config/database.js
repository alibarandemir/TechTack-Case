const mongoose=require('mongoose');

const databaseConntection=()=>{mongoose.connect("mongodb+srv://alibarandemir:techtack123@atlascluster.dkwcq.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster",{
   
}).then(()=>{
    console.log("Veritabanına bağlandı")
}).catch((err)=>{
    console.error(err.message)
;})}
module.exports=databaseConntection