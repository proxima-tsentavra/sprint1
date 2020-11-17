/*
	* range(4); // => [0, 1, 2, 3] 
	* range(-4); // => [0, -1, -2, -3]
	* range(1, 5); // => [1, 2, 3, 4]
	* range(0, 20, 5); // => [0, 5, 10, 15]
	* range(0, -4, -1); // => [0, -1, -2, -3]
	* range(1, 4, 0); // => [1, 1, 1]
	* range(0); // => []
*/



function range(start, end=null, step=1) {

    if (end===null){
        end=start;start=0;step=Math.sign(end);
    }
  

    let length ;
    if (step===0) {
        length = (end-start);
    } else {
        length = (end-start)/step;  
    }

    
    return Array.from({ length: length }, (_, i) => start+i*step);
           
  }
  