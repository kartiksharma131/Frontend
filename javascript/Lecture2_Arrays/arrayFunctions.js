var arr = new Array(1,2,3,4,5);
console.log(arr.length);
//push at end of the array
arr.push(6);

//pop at the end of the array
arr.pop();

//shift the first element of the array to the left
arr.shift();

//adds the element at the 0th index and shifts the existing by one position to right
arr.unshift(100);

// splice
// takes 3 arguments
//  1) start index
//  2) deletion count
//  3) elements to be inserted


// only first argument is given so it will delete everything starting from the first index
arr.splice(1);


// deletion count is 2 so it will delete 2 elements starting from first index
arr.splice(1,2);

//it will delete 2 elements starting from index 1 and add 3 there
arr.splice(1,2,3);

//it will delete 2 elements starting from index 1 and add 30 and 40  there
arr.splice(1,2,30,40);

//will not delete anything but add 10 at starting index
arr.splice(2,0,10);