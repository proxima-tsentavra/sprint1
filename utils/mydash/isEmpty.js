/*
isEmpty(null); // => true
isEmpty(true); // => true
isEmpty(1); // => true
isEmpty([1, 2, 3]); // => false
isEmpty({ 'a': 1 }); // => false
isEmpty('123'); // => false
isEmpty(123); // => true
isEmpty(''); // => true
isEmpty(0); // => true
*/

function isEmpty(value) {
  switch (typeof value) {
    case 'number':
    return true;
    case 'BigInt':
    return true;
    case 'null':
    return true;
    case 'undefined':
    return true;
    case 'symbol':
    return false;      
    case 'boolean':
    return true;
    
    case 'string':
    return value==="";

    case 'object':
      if (value===null ) return true
      if (Array.isArray(value)) return value.length===0;
      if (typeof value.size !==undefined && value.size===0) return true;
    return Object.entries(value).length === 0 && value.constructor === Object; 
    
  }
  
}


var map1=new Map();

 
console.log(isEmpty([1, 2, 3])); // => true