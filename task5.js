var fruits = ["apple", "strawberry", "banana", "orange", "mango"] ;
function check(fruits) {
    for(var i=0; i<fruits.length; i++){
      if(typeof fruits[i] != "string") {
         return false;
       }
    }
   
    return true;
   }
   console.log(check(fruits));


  
  
   var startsWith = fruits.filter(function(item){
    return item.startsWith("a")
   }
   )
   
console.log(startsWith);


var filtered =[];
fruits.forEach(function (item) {
    if(item.indexOf("b",0)==0 || item.indexOf("s",0)==0 )
{
filtered .push(item)
}
})
console.log(filtered)

