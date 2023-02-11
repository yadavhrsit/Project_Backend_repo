const ProductModel =require("../model/CollectionSchema");

function ShowCollection(req,res){
    ProductModel.find({},{_id:0,__v:0},
        (error,result)=>{
            if(error){
                res.send(error)
            }else{
                res.send(result);
            }
        })
}

module.exports=ShowCollection;