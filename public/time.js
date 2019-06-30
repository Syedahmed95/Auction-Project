var {auction} = require("../auction.js");
// var test;


// auction.find({price: "$800"}, function test2(err, found){
//     if(err){
//         console.log(err);
//     }
//     else{
//         test=found;
//         //console.log(test);
//     }
// });
// async function test2(){
// auction.findOne({price: "$800"},{"time":1, "_id":0} ,test3);
//  function test3(err, found){
//     if(err){
//         console.log(err);
//     }
//     else{
//       //let wait=found;
//      var test1= found;
//      // console.log(test);
//      //return  test;
//       }
//      var w={};
//      w=test1;
      
//       var s=w.time;
//       var d=s.split(":")
//       var t=  new Date(0,0,0,d[0],d[1],d[2]).getTime();
//       test=t;
     
      
// }

// }
// test2();

// setTimeout(function(test2)
// {
    
//     console.log(test);
//     return test;
// }, 1000);

// module.exports = {
//     setTimeout,
//     test2
// };

// var d;
// //console.log(test);
//  setTimeout(function(){
//   var test3= test;
//   console.log(test3);
// }, 1000);

//test3();
 //console.log(test);
// function data(){
//      var a=2;
//      var b=2;
//      test=a+b;
//      //return c;
//     // console.log(test);
//  }
//  data();
//  var some=test;
 
//  console.log(some);



// async function getdata(){
//     await data();
// }
// getdata();
// console.log(getdata())



// function getdata(callback){
//     let db= auction.find({text:"GPU"},test2)
//     function test2(err,found){
//         if(err){
//         console.log(err);
//     }
//     else{
//       //let wait=found;
//       test= found;
//       //console.log(test);
//      callback(found);
      
//     }
// }
// }



// function retrieveUser(uname, callback) {
//   auction.find({text: uname}, function(err, users) {
//     if (err) {
//       callback(err);
//     } else {
//       callback(users);
//     }
//   });
// }


// retrieveUser("GPU",async function(err, user) {
//   if (err) {
//     test=await err;
//     //console.log(test);
    
    
//   }
//   else  {
//       console.log(user);
//   }
//   // do something with user
// });
// module.exports={
//     retrieveUser
// }



// console.log(test);
// async function data(){
// var docs = await auction.find({text:"GPU"}).exec();
// test=docs;
// return test;
// //console.log(test);
// }


//var t=auction.findOne({price: "$800"},{"time":1, "_id":0});

// async function s(req, res) {
//   var user;
//   await auction.findOne({}, function(err,pro){
//       test=pro;
//      // console.log(user);
//     })
//   console.log(test); 
//   //test=user;
// }
// s();
// console.log(test)

// function queryCollection(collection, callback){
// 	auction.find({},{'price':1}).toArray(function(err, result) {
//         if (err) {
//             console.log(err);
//         } else if (result.length > 0) {
//             callback(result);
//         }
//     });
// }
 
// queryCollection("text", function(result){
//     console.log(result);
//     //You can do more stuff with the result here
// });

module.exports = {
    getData:function(param1,param2,callback){
        auction.findOne({price: "$800"},{"time":1, "_id":0},function(error,result){
            callback(null,result);
            //console.log(result);
            return result;
        });
    }
    
};






// function data2(data,callback){
//     auction.findOne({price: data},{"time": 1, "_id": 0},function(err,res){
//         if (err){
//             console.log(err);
            
//         }
//         else{
//             return callback(res);
//         }
        
//     })
// }
// function database(result){
//       var a=result;
//       console.log(a);
// } 
// data2("$800",database);    

var c=  function data2(callback){
    auction.findOne({price: "$800"},{"time": 1, "_id": 0},function(err,res){
        if (err){
            console.log(err);
            
        }
        else{
            return callback(res);
        }
        
    });
};
var a = function database(result){
       var b=result;
       //console.log(b);
};

var checking={
    a: a,
    c: c
};
checking.c(checking.a);
module.exports ={
    checking
}



// async function getData(){
//         return await auction.findOne({price: "$800"},{"time":1, "_id":0},function(error,result){
//             if(error)
//             {
//                 return error;
//             }   
                
//                 else {
//                     console.log("Res is: ", result);
//                     return result;
//                 }
            
//         });
// }

// var myVar = {};
//             getData()
//             .then(res => myVar = res)
//             .catch(err => myVar = "error getting time");
// console.log("My var is: ", myVar);