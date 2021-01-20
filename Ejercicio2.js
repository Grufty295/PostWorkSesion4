//chunk
function chunk(array, size) {
  var newArray = [];
  for(var i = 0; i < array.length; i+=size){
     var chunk = array.slice(i,i+size);
      newArray.push(chunk);
  }
  return newArray;
};

var data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log("------------------Ejercicio 2------------------------");
console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log('Test 4:', chunk(data, 4)) // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]



// data - 8 de length 
// i - 0 


/* 
Test 1: 

newArray = [];

Primer ciclo.-
newArray = []
i = 0

i < 8 - si

array.slice(0, 0+1 = 1)

data[0] = 1;
data[1] = 2;

.slice retorna [1]

newArray.push([1]);
newArray ahora tiene  = [ [1] ]

i = i+1 = 1;

Segundo ciclo.-
newArray = [ [1] ]

i = 1;

1 < 8 - si

array.slice(1,1+1 = 2)

data[1] = 2;
data[2] = 3;

.slice retorna [2]

newArray,push([2]);

newArray ahora tiene  = [ [1], [2] ]

*/