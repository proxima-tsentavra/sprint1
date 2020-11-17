/*
rangeRight(4); // => [3, 2, 1, 0]
rangeRight(-4); // => [-3, -2, -1, 0]
rangeRight(1, 5); // => [4, 3, 2, 1]
rangeRight(0, 20, 5); // => [15, 10, 5, 0]
rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
rangeRight(1, 4, 0); // => [1, 1, 1]
rangeRight(0); // => []
*/

function rangeRight(start, end, step) {
    return range(start, end, step, true);
}

function range(start, end=null, step=1, isRight=false) {

    if (end===null){
        end=start;start=0;step=Math.sign(end);
    }
    let length ;
    if (step===0) {
        length = (end-start);
    } else {
        length = (end-start)/step;  
    }
    let out = Array.from({ length: length }, (_, i) => start+i*step);
    if (isRight===true && out.length) {
        return out.reverse();
    }
    return out;
           
  }

  rangeRight(4); // => [3, 2, 1, 0]
  rangeRight(-4); // => [-3, -2, -1, 0]
  rangeRight(1, 5); // => [4, 3, 2, 1]
  rangeRight(0, 20, 5); // => [15, 10, 5, 0]
  rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
  rangeRight(1, 4, 0); // => [1, 1, 1]
  rangeRight(0);
  console.log(rangeRight(0));