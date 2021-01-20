// deepEqual
function deepEqual(a, b) {
  if (a === b) {
    return true;
  } else if (typeof a === "object" && typeof b === "object") {
    let aKeys = Object.keys(a),bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    } else {
      for (let key of aKeys) {
        if (!bKeys.includes(key)) {
          return false;
        } else if (
          typeof a[key] === "function" ||
          typeof b[key] === "function"
        ) {
          if (a[key].toString() != b[key].toString()) {
            return false;
          } else {
            if (!deepEqual(a[key], b[key])) {
              return false;
            }
          }
        } else {
          if (!deepEqual(a[key], b[key])) {
            return false;
          }
        }
      }
    }
  } else {
    return false;
  }
  return true;
}

var john = {
  firstName: 'John',
  lastName: 'Doe'
}

console.log("------------------Ejercicio 1------------------------");
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
console.log("Test 6:", deepEqual(john, { firstName: "Juan", lastName: "Doe" })); // false
console.log("Test 7:", deepEqual(john, { firstName: "John", lastName: "Toe" })); // false