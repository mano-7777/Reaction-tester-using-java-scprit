        var start = new Date().getTime();
          function randomcolor(){
              var letters='123456789ABCDEF';
              var color='#';
              for( var i=0;i<6;i++){
              color+=letters[Math.floor(Math.random()*16)];
              }
              return color;
          }
          function makeappear(){
              var top=Math.random()*400;
              var left=Math.random()*300;
              var width=(Math.random()*200)+100;
             if(Math.random()>0.5){
                 document.getElementById("shape").style.borderRadius="50%";
             }else{
                 document.getElementById("shape").style.borderRadius="0";
             } 
              document.getElementById("shape").style.backgroundColor= randomcolor();
              document.getElementById("shape").style.width=width +"px";
              document.getElementById("shape").style.top=top +"px";
              document.getElementById("shape").style.left=left +"px"
        document.getElementById("shape").style.display="block";
              start = new Date().getTime();
          }
          function apperafter(){
               setTimeout(makeappear,Math.random() *2000);
          }
           apperafter();
       document.getElementById("shape").onclick=function(){
           document.getElementById("shape").style.display = "none";
           
           var end = new Date().getTime();
           var TimeTaken = (end-start)/1000;
           document.getElementById("TimeTaken").innerHTML=TimeTaken+"s";
           apperafter();
       }