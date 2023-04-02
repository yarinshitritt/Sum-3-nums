let str1,str2,str3;
let concatStr;
let num1,num2,num3
document.getElementById("mybtn").onclick = function(){   
   str1 = document.getElementById("inp1").value 
   str2 =document.getElementById("inp2").value
   str3 =document.getElementById("inp3").value
   num1 = parseInt(str1);
   num2 = parseInt(str2);
   num3 = parseInt(str3);

   concatStr = num1 + num2 + num3;

   document.getElementById("par1").innerHTML = concatStr;

}