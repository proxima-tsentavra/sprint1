'use strict';
function zip() {
    let out={};
    for (let i=0; i<arguments.length; i++){
      let keys = Object.keys(arguments[i]);
      let values = Object.values(arguments[i]);
      keys.forEach(function(key,index){
        if (!out.hasOwnProperty(key)) {
          out[key] = values[index];
        }
   
        
      });
      
    }
    return out;
  }



 

/**
 * Генерация HTML списка чатов
 * @param {Chat[]} chats
 * @return {HTMLUListElement}
 */

function makeChatsList(chats) {
 
  let fragment = document.createDocumentFragment();
  let ul = document.createElement('ul');
  
  for(let i = 0; i < chats.length; i++){
    let li = document.createElement('li');
    li.innerHTML=chats[i].title+' '+chats[i].lastMessage;
    ul.appendChild(li);

  }
  
  fragment.appendChild(ul);
  return fragment;
}

const object = (function () {
  let _value = null;

  return {  
    getValue () {
      return _value;
    },
    setValue (value) {
      _value = value;
    },      
  }

}());

object.setValue(42);
object._value = 73; // изменили напрямую приватное свойство, а не должны уметь обращаться к нему
object.getValue(); // 73





const obj = { x: 15 };

function first() {
   return this.x; // 15
}
 
function second() {
   
    let f = first.bind(obj);
  
	return  f(); // Вернёт undefined, а нужно 15
}



Number.prototype.plus=function(n){
  return this.valueOf()+n;
};

Number.prototype.minus=function(n){
  return this.valueOf()-n;
};


(2).plus(3).minus(1) // 4



function Book() {
  this.name = 'foo';
}

Book.prototype = {
  getName: function() {
      return this.name;
  }
}

var book = new Book();

Book.prototype.getUpperName= function(){
return this.name.toUpperCase();
}

// В этой строке определить метод getUpperName

console.log(book.getUpperName()); // 'FOO'




let promiseA = new Promise(function(resolve, reject) {
  setTimeout(function() {
       resolve('A');
   }, Math.random()*100); 
});


let promiseB = new Promise(function(resolve, reject) {
  setTimeout(function() {
       resolve('B');
   }, Math.random()*100); 
});

let promiseC = new Promise(function(resolve, reject) {
  setTimeout(function() {
       resolve('C');
   }, Math.random()*100); 
});


promiseA.then( function(result) { 
 console.log(result);
 promiseB.then(function(result){
   console.log(result);
   promiseC.then(result=>console.log(result));
    });
},);





const list = [1, 3, 4, 5, 7, 10];

function binarySearch(list, element) {
  let start = 0 ;
      let end= list.length;
      while (start<end) {
        let middleIndex = Math.floor((end+start)/2);
 
        if (element==list[middleIndex]) {
          return middleIndex;
        } 
          if (element>list[middleIndex]) {
            start = middleIndex+1;
          }
          if (element<list[middleIndex]){
            end = middleIndex;
          }
        
        
        
      }

return -1;

}








const palindrome = (str) => {
  let dec = str.split("");
  let rev=dec.reverse().join("");
  
 console.log(rev)
return str===rev;
};

 console.log(palindrome('racecar') === true)
 console.log(palindrome('table') === false)



 // fizzBuzz(6) => [0, 1, 2, fizz, 4, buzz, fizz]

const fizzBuzz = num => {
  let out = Array.from({ length: num+1 }, (_, i) => i);
  out=out.map(function(num) {
    if (num===0) return num;
    let n='';
    if (num%3===0) n+=  'fizz';
    if (num%5===0) n+= 'buzz';
    if (n) return n;
    return num;
    });
 return out;
}

console.log(fizzBuzz(20));