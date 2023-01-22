//Do the below programs in anonymous function & IIFE

 //a).Print odd numbers in an array


 let arr1=[1,2,3,4];
 
 let arr=[];
 
 var odd=function(arr1){
     
     for(i=0;i<arr1.length;i++)
     {
         if(arr1[i]%2!==0)
         
           arr.push(arr1[i]);
         
      }
     return arr.join(" ");
 };
 console.log(odd(arr1));
 
 
 //IIFE:
 
 let arr2=[1,2,3,4];
 
 (function(arr2){
     
     for(i=0;i<arr1.length;i++)
     {
         if(arr2[i]%2!==0)
         
           arr.push(arr2[i]);
         
      }
     console.log(arr.join(" "));
     
 })(arr2);
 
 
 //b). Convert all the strings to title caps in a string array
 
 let str =["he","is","john","cena"];
 
 
 var cap= function(a){
     
 for(var i=0;i<str.length;i++){
     
     str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
 }   
 return str;
 };
 console.log(cap(str));
 
 //IIFE;
 
 let str =["he","is","john","cena"];
 
 
 (function(a){
     
 for(var i=0;i<str.length;i++){
     
     str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
 }   
 console.log(str);
 
 })(str);
 
 
 // c).Sum of all numbers in an array
 
 let arr=[1,2,3,4,5,6];
 
 var sum=function(arr){
 let res=0;
 
 arr.map((c)=>{res=res+parseInt(c)});
 
 return res;
 };
 
 console.log(sum(arr));
 
 
 //IIFE:
 
 let arr=[1,2,3,4,5,6];
 
 (function(arr){
     
     let res=0;
 
 arr.map((c)=>{res=res+parseInt(c)});
 
 console.log(res);
 
 }(arr));
 
 
// d). Return all the prime numbers in an array
 
 
 var arr=[2,3,4,5,6,7,8,9];
 
 var doc=function(arr){
     
     let ar=[];
     
     for(var val=2;val<=arr.length;val++){
     
     var pn = true;
     
     for(var i=2;i<=val;i++){
         
         if(val%i===0 && i!==val)
             
             pn = false;
         
     }
     
     if(pn === true)
     
     ar.push(val);
     
     }
   return ar.join(" "); 
 
 };
 
 
 
 console.log(doc(arr));
 
 
 //IIFE:
 
 var arr=[2,3,4,5,6,7,8,9];
 
 (function(arr){
     
     let ar=[];
     
     for(var val=2;val<=arr.length;val++){
     
     var pn = true;
     
     for(var i=2;i<=val;i++){
         
         if(val%i===0 && i!==val)
             
             pn = false;
         
     }
     
     if(pn === true)
     
     ar.push(val);
     
     }
     
    console.log(ar.join(" ")); 
 
 })(arr);
 
 //e) Return all the palindromes in an array
 
 let arr = ['madam','rogue','lappal'];
 
 let temp = [];
 let wd='';
 let palin = function(arr){
 
     for(let i = 0;i<arr.length;i++){
            if(arr[i]===arr[i].split("").reverse().join("")){
             temp.push(arr[i]);
         }
         
         
     }
      return temp;
 };
 
  console.log(palin(arr));
 
 //IIFE:
 
 let arr = ['nitin','rogue','racecar'];
 
 let temp = [];
 let wd='';
 (function(arr){
 
     for(let i = 0;i<arr.length;i++){
           if(arr[i]===arr[i].split("").reverse().join("")){
             temp.push(arr[i]);
         }
         
         
     }
      console.log(temp);
 })(arr);
 
 
 //f). Return median of two sorted arrays of same size
 
 const arr1 = [1, 12, 15, 26, 38];
 const arr2 = [2, 13, 17, 30, 45];
 
 
 
 var median =function(a, b) {
     
     let c = [...a, ...b].sort((a, b) => a - b);
     
     
     const half = c.length / 2 | 0;
     
    
     if (c.length % 2) return c[half];
     
     
      return (c[half] + c[half - 1]) / 2;
      
 };
 
 console.log(median(arr1,arr2));
 
 //IIFE:
 
 const arr1 = [1, 12, 15, 26, 38];
 const arr2 = [2, 13, 17, 30, 45];
 
 
 
 (function(a, b) {
     
     let c = [...a, ...b].sort((a, b) => a - b);
     
     
     const half = c.length / 2 | 0;
     
    
     if (c.length % 2) return c[half];
     
     
      console.log((c[half] + c[half - 1]) / 2);
      
 })(arr1, arr2);
 
 
 //g). Remove duplicates from an array
 
 let array=[1,1,1,2,2,2,3,3,3];
 
 var dupplicate=function(array) {
     
   const result = [];
   
   for (let i = 0; i < array.length; i++) {
       
     let exists = false;
     
     for (j = 0; j < result.length; j++) {
         
       if (array[i] === result[j]) {
           
         exists = true;
         
         break;
         
       }
     }
     if (!exists) {
         
       result.push(array[i]);
     }
   }
   return result;
 };
 console.log(dupplicate(array));
 
 //IIFE;
 
 let array=[1,1,1,2,2,2,3,3,3];
 
 (function(array) {
     
   const result = [];
   
   for (let i = 0; i < array.length; i++) {
       
     let exists = false;
     
     for (j = 0; j < result.length; j++) {
         
       if (array[i] === result[j]) {
           
         exists = true;
         
         break;
         
       }
     }
     if (!exists) {
         
       result.push(array[i]);
     }
   }
   console.log(result);
 })(array);
 
 
 //h). Rotate an array by k times
 
 var rotate=function (A, K) {
     
     if (!A.length) return A;
     
     let index = -1;
     
     while (++index < K) {
         
         A.unshift(A.pop());
     }
     return A;
 };
 
 
 console.log(rotate([3, 8, 9, 7, 6], 3));
 console.log(rotate([0, 0, 0], 1));
 console.log(rotate([1, 2, 3, 4], 4));
 
 //IIFE;
 
 let arr=[3, 8, 9, 7, 6];
 
 (function(A) {
     
     let K =3;
     
     if (!arr.length) return arr;
     
     let index = -1;
     
     while (++index < K) {
         
         arr.unshift(arr.pop());
     }
    console.log(arr) ;
 })(arr);
 
 