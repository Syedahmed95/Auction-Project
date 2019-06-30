
// // var time=[];
  var b, c, s;
  $(function () {
                
                $('#datetimepicker1').datetimepicker({
                                   
            });
                
            });

 var a = document.getElementById("butcon");
 var timepost= document.getElementById("time2");
 var time3=document.getElementById("datetimepicker2");

//  console.log(timepost);
 
 
 // console.log(test2);

 a.addEventListener("click", myfunction);
function myfunction(){
    // var d= new Date();
    //  b=d.getHours();
    //  c=d.getMinutes();
    //  s=d.getSeconds();
    //a.value= b + ":" + c + ":" + s;
    a.value= time3.value;
    
    console.log(a.value);
     }
 
 // timepost.addEventListener("click",timecapture);
 // function timecapture(){
 //      //var selectedValue = document.getElementById("time2").value;
 //       var val= timepost.options[timepost.selectedIndex].value;

 //       var test3= val.split(":");
       
       
 //      //countdown= new Date(0, 0, 0,test2[0],test2[1],test2[2]).getTime();
 //       //console.log(countdown);
 // }
    // var a = document.getElementById("demo").innerHTML = "EXPIRED";
    
    // module.exports=a;


 
 
 



