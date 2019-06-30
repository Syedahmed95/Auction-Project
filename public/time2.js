
var time = document.getElementById("posttime").value;


//console.log(time);


//console.log(date1);
var s=time.split(/[.,\/ -,:]/);


//console.log(s);

// var date = new Date();

// var day= date.getDate();
// var hour=date.getHours();
// var min= date.getMinutes();
// var sec= date.getSeconds();
// var year = date.getMonth();
// console.log(year);

// console.log(day + ":" + hour + ":"+ min + ":" + sec);

// var currenttime=new Date(0,0,0,hour,min,sec).getTime();
var producttime= new Date(s[2],s[0]-1,s[1],s[3],s[4]).getTime();
//var watch=currenttime-producttime;


  var x = setInterval(function() {
     // var date1= new Date(time).getTime();

      var date2= new Date().getTime();

      var test1=producttime-date2;
      //console.log(test1);
      var days = Math.floor(test1 / (1000 * 60 * 60 * 24));
      var hours = Math.floor((test1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((test1 % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((test1 % (1000 * 60)) / 1000);
    // console.log(seconds);
  
      //console.log(days + "d" + hours + "h "+ minutes + "m " + seconds + "s ");
      document.getElementById("demo").innerHTML = days + "d "+ hours + "h "+ minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (test1< 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
  },1000);