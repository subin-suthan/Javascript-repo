var reg= function(username){

   return function validate(){
       if(username=="")
          console.log("invalid")

         else
          console.log("valid username") 


     }

}




var res=reg("")
res();