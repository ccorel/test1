function sum (){
    var s=[]
    for (i = 1 ; i <= 255 ; i++){
        s.push (i)
    }
    return s
}
console.log(sum());

----------

function sum (){
   var j=0
    for (i = 1 ; i <= 1000 ; i++){
        if (i % 2 ===1){
            j=j+i
    }
    }
    return j
}
console.log(sum());

------------------


function sum (){
   var j=0
    for (i = 1 ; i <= 5000 ; i++){
        if (i % 2 ===1){
            j=j+i
    }
    }
    return j
}
console.log(sum());

------------

function sum (array){
    var j=0
    for (i = 0; i < array.lenght; i++ ){
    j = j + array[i]
    }
    return j;
}
console.log(1,2,2);

----------
5
function sum (array){
    var j = array[0]
    for (i = 0; i < array.length; i++){
        if ( j < array[i]){
        j = array[i]
    }
    }  
return j;
}
console.log (sum ([2,9,1,8]));
-
---------------

function prom (res){
    var sum = 0
    
    for ( i = 0; i < res.length; i++ ){
        sum = sum + res[i];
        
     }
     divi = sum / res.length
    return divi;

}
console.log (prom ([3,2,1,14]));


---------------------

function impar (res){
    var j = [];

    for ( i= 0; i <= res; i++){
        if ( i % 2 === 1){
            j.push (i)
        }
    }
    return j;
}
console.log (impar (51));

---------------------

function mayor (res){
    var j = 0
    var y = 6
    for ( i = 0 ; i< res.length ; i++){
        if ( y < res[i]){
          j= j + 1
        }
    }
  return j;
}
console.log (mayor([7, 6, 1, 8]));

-------------
9 
function cuad (j){
  
    for ( i = 0; i < j.length ; i++){
        j[i]= j[i] * j[i]
    }
    return j;
}
console.log (cuad ([1,3,5,8]));


-----------

function nega (res){

    for ( i = 0 ; i <= res.length ; i++){
    if (res[i] < 0){
        res[i]=0
    }

}
return res;
}
console.log (nega ([4,5,-3,7]));

----------
11 
function maxmi ( res){
    var max = res [0]
    var min = res [0]
    j = 0
    
    for ( i= 1; i < res.length; i++){
        if ( res[i] > max ){
            max = res[i]
        }
        if ( res[i] < min){
            min = res[i]
        }
        j = (j + res[i])
    }
    prom = j / res.length
    return ( [max, min, prom])
}
console.log ( maxmi ([3, 2, 5, 8]))



----------
function cam (res){
    
    temp = res[res.length-1]
    res.pop()
    res.push(res[0])
    res[0] = temp

 return res
}
console.log ( cam ([1,2,3,4]));


--------------
function nega (res){

    for ( i = 0 ; i <= res.length ; i++){
    if (res[i] < 0){
        res[i]='dojo'
    }

}
return res;
}
console.log (nega ([-1,-3,2]));