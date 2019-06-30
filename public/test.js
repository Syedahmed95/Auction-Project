

//import * as common from  ''./time.js";
var check=require("./time.js");
//var auction = require("../auction.js");

// auction.findOne({price: "$800"},{"time":1, "_id":0}, function(err,res){
//     if(res){
//         console.log(res);
//     }
// }
    
// );
var s;
check.checking.c(function(callback){
       console.log(callback);
       var a=callback.time;
       console.log(a);
       s=a.split(":");
       console.log(s);
       return s;

});


     document.getElementById("demo").innerHTML = "ssss";
     console.log(s);




//  common.getData(null,null, function(err, result) {
//     console.log(err);
//     console.log(result);
//   var test=result;
//     console.log(test);
//     var a= test.time;
//     console.log(a);
//     var s=a.split(":");
//     console.log(s);
//     var database=new Date(0,0,0,s[0],s[1],s[2]).getTime();
//     console.log(database);
    
// //     function calcTime(city, offset) {

// //     var d = new Date();

// //     var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

// //     var nd = new Date(utc + (3600000*offset));

// //     return  nd.toLocaleTimeString();

// // }
// // var save = (calcTime('Karachi', '+5'));
// // var save1= {};
// // save1 = save;
// // var ob = save1.split(":");
// // console.log(ob);

// //     var current=new Date(0,0,0,ob[0],ob[1],ob[2]).getTime();
// //     console.log(current);
    
// //     var x = setInterval(function() {
      
// //       var test1= current-database;
// //       //var days = Math.floor(test1 / (1000 * 60 * 60 * 24));
// //       var hours = Math.floor((test1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// //       var minutes = Math.floor((test1 % (1000 * 60 * 60)) / (1000 * 60));
// //       var seconds = Math.floor((test1 % (1000 * 60)) / 1000);
// //       //console.log(seconds);
  
// //       console.log( hours + "h "+ minutes + "m " + seconds + "s ");
// //      // document.getElementById("demo").innerHTML = hours + "h "+ minutes + "m " + seconds + "s ";
    
// //   // If the count down is over, write some text 
// //   if (test1< 0) {
// //     clearInterval(x);
// //   document.getElementById("demo").innerHTML = "EXPIRED";
// //   }
// //   },1000);
    
    
// });