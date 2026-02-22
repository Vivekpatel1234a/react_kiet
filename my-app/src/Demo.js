//map method we can traverse and if we change it will copy on the new array it does not change trhe new array 
  //inside map we callback
  const number = [1,2,3];
/*const newnumber =  number.map(function(n){  //map method function bnakr usi m echange kr deta hai 
    return n*2;
  })
  console.log(newnumber)

  /*

  function(n){
  return n*2
  }


  function(1)====> returns 1*2=2
  similarly so on 
  */


  const newnumber=number.map(n=>n*2);   //=><li>{n}</li>   this is  also possible , we use this in event to do 
  console.log(newnumber)

  /////////////////////filter//////////////////

  const newfilter=number.filter((n)=>n>2);   //number.filter(n=>n>2)   // jo condition satisfy kr rha hai usko include krlo new array me nhi to, exclude kr do 
  console.log(newfilter)



  ///////////////Spread Operator/////////

  const newn=[1,2,3,4];
  const n=[...newn, 5];
  console.log(n);//[ 1, 2, 3, 4, 5 ]