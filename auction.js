
var exp = require("express");
var app = exp();
var mongoose= require("mongoose");
var bodyparser = require("body-parser");
// const but = require("./public/but.js");
// var module = require("./public/but.js");
// console.log(module);


mongoose.connect("mongodb://localhost/auction", { useNewUrlParser: true });
app.use(bodyparser.urlencoded({extended: true}));
app.use(exp.static("public"));


app.set("view engine","ejs");




var auctionSchema = new mongoose.Schema({
    text: String,
    image: String,
    description: String,
    price: String, 
    time: String,
    bids: String
    
});

var auction = mongoose.model("auction", auctionSchema);

module.exports={
    auction
};

// auction.create({
//     text: "testing purpose",
//     image: "/auc.jpg",
//     description: "this is awesome",
//     price: "$300"
// }, function(err, auction){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("new schema");
//         console.log(auction);
//     }
// });



app.get("/", function(req, res){
    auction.find({}, function(err, allpro){
        if(err){
            console.log(err);
        }
        else{
             res.render("homepage", {homepage: allpro});

        }
    });
                
});
app.post("/", function(req, res){
    //var time=req.body.created_at=new Date();
    var time1=req.body.time
    var text =req.body.text;
    var image =req.body.image;
    var desc =req.body.description1;
    var price =req.body.price;
    //var time = req.body.but;

    var newcampgrounds = {text: text, image:image, description:desc, price:price, time:time1};
    auction.create(newcampgrounds, function(err, prod){
        if(err){
            console.log(err);
        }
        else{
           res.redirect("/");

        }
    })
});
app.get("/product", function(req, res){
    res.render("product");
});
app.get("/login", function(req, res){
    res.render("Login");
});

app.get("/:id", function(req, res){
    auction.findById(req.params.id, function(err, foundpro){
        if(err){
            console.log(err);
        }
        else{
            
            res.render("show",{homepage: foundpro});
          
        }
    });
   
});
app.get("/:id/bids", function(req, res){
    auction.findById(req.params.id,function(err, foundpro){
        if(err){
            console.log(err);
        }
        else{
            
            res.render("bids",{homepage: foundpro});
          
        }
    });
   
});

app.post("/:id/bids", function(req,res){
    var bid=req.body.bid;
    
    var bid1={bids:bid};
    auction.findByIdAndUpdate(req.params.id,bid1, function(err,bid2){
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/" +req.params.id + "/bids");
        }
    });
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});

