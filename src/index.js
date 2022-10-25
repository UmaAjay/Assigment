let password=prompt()
let l=password.length
if(l<=20){
   
   if(l>=6)
   {
      console.log(0)
   }
   else
   {
      console.log(6-l)
   }
}
else{
   console.log("nothing")
}

