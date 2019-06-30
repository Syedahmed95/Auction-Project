// var {setTimeout} = require("./time.js");
// var {test2} = require("./time.js");

var test={};
var d,utc,nd;
//var brow= require("browserify");
var common = require("./time.js");
//var req = require("requirejs");
//var common=req("./time.js");

module.export = function testing(){

function calcTime(city, offset) {

    d = new Date();

    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    nd = new Date(utc + (3600000*offset));

    return  nd.toLocaleTimeString();

}

// get Bombay time
var save = (calcTime('Karachi', '+5'));
var save1= {};
save1 = save;
var ob = save1.split(":");
//var sp=[ob[9], ob[10], ob[11], ob[12], ob[13], ob[14], ob[15], ob[16]]
//var sp1=sp.toString();
//var sp2=sp1.split(',');

console.log(ob);
require(['foo'], function (foo) {
    //foo is now loaded.
});

common.getData(null,null, function(err, result) {

console.log(err);
    console.log(result)
    test=result;
    console.log(test);
    var a= test.time;
    console.log(a);
    var s=a.split(":");
    console.log(s);
    var database=new Date(0,0,0,s[0],s[1],s[2]).getTime();
    console.log(database);
    
    // var cu= new Date(8,5,2019,b,c,g).getTime();
    // console.log(cu);
    // var time=cu-d;
    // console.log(time);
    var d=new Date(0,0,0,ob[0],ob[1],ob[2]).getTime();
    console.log(d);
    
    
    //console.log(test1);
  // console.log(save);
  
  var x = setInterval(function() {
      
      var test1= database-d;
      //var days = Math.floor(test1 / (1000 * 60 * 60 * 24));
      var hours = Math.floor((test1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((test1 % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((test % (1000 * 60)) / 1000);
      console.log(seconds);
  
      console.log( hours + "h "+ minutes + "m " + seconds + "s ");
      document.getElementById("demo").innerHTML = hours + "h "+ minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (test1< 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
  },1000);
  

});
}
    //document.getElementById("demo").innerHTML = "EXPIRED";




