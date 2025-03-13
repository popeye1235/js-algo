const images = ["assets/fibonacci1.png", "assets/factorial.png", "assets/prime.png"];
let currentIndex = 0;

const galleryImage = document.getElementById("gallery-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const updateButtons = () => {
  prevButton.disabled = currentIndex === 0;
};

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    galleryImage.src = images[currentIndex];
    updateButtons();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    galleryImage.src = images[currentIndex];
    updateButtons();
  }
});

updateButtons();


// window.addEventListener("DOMContentLoaded", () => {
//     const imageElement = document.getElementById("gallery-image");
//     const smallTag = document.querySelector("small");
  
//     // Function to extract the file name without extension
//     const getFileNameWithoutExtension = (filePath) => {
//       const fileName = filePath.split('/').pop(); // Get the file name from path
//       return fileName.split('.')[0]; // Remove the extension
//     };
  
//     // Set the file name to the small tag
//     const fileName = getFileNameWithoutExtension(imageElement.src);
//     smallTag.innerHTML = `<strong>${fileName}</strong>`;
//   });
  



// const practiceFiles = document.getElementById("practice-files");
// const loadButton = document.getElementById("load-file");

// loadButton.addEventListener("click", () => {
//   const selectedFile = practiceFiles.value;
//   if (selectedFile) {
//     // Remove any previously loaded script
//     const existingScript = document.getElementById("practice-script");
//     if (existingScript) {
//       existingScript.remove();
//     }

//     // Create and append the new script
//     const script = document.createElement("script");
//     script.id = "practice-script";
//     script.src = `practice/${selectedFile}`;
//     document.body.appendChild(script);
//   } else {
//     alert("Please select a file to run.");
//   }
// });




// Give a natural number 'n', determine if the number is prime or not
// function isPrime(n) {
//     if(n < 2) {
//         return `this no - ${n} is not prime!`;
//     }
//     for(let i = 2; i <= Math.sqrt(n); i++) {
//         if(n % i === 0) {
//             return `this no - ${n} is not prime!`
//         }
//     }
//     return `this no - ${n} is prime!`
// }
// console.log(isPrime(1));
// console.log(isPrime(13));
// Big-O - O(sqrt(n))



// given a positive integer 'n', determine if the number is a power of 2 or not
// function isPowerOfTwo(n) {
//     if(n < 1) {
//         return false;
//     }
// while(n > 1) {
//     if(n % 2 !== 0){
//         return false;
//         }
//         n = n/2;
//     }
//     return true;
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));
// Big-O - O(logn)

// function isPowerOfTwoBitWise(n) {
//     if(n < 1) {
//         return false
//     }
//     return (n & (n - 1)) === 0
// }

// console.log(isPowerOfTwoBitWise(1));
// console.log(isPowerOfTwoBitWise(2));
// console.log(isPowerOfTwoBitWise(5));
// Big-O - O(1)


// Recursive Fibonacci sequence
// Give a number 'n', find the nth element of the Fibonacci sequence
// function fibonaaci(n) {
//     if(n < 2) {
//         return n;
//     }
//     return fibonaaci(n-1) + fibonaaci(n-2)
// }
// console.log(fibonaaci(0));
// console.log(fibonaaci(1));
// console.log(fibonaaci(6));
// console.log(fibonaaci(7));
// O(n) - Iterative
// O(2^n) - Recursive


// Recursive factorial 
// Give an integer 'n', find the factorial of that integer
// function factorial(n) {
//     if(n === 0) {
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));
// console.log(factorial(6));
//Big-O - O(n)


// Serach Algo.
// Linear serach
// Given an Array of 'n' elements and target elements 't', find the index of 't' in the array, 
// Return -1 if the target element is not found.
// function linear(arr, target) {
//     for( let i = 0; i < arr.length; i++) {
//         if(arr[i] === target) {
//             return i;
//         }       
//     }
//     return -1;   
// }
// console.log(linear([-5, 2, 10, 4, 6], 10));
// console.log(linear([-5, 2, 10, 4, 6], 6));
// console.log(linear([-5, 2, 10, 4, 6], 20));
// Big-O - O(n)


// Binary Search
// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array, Return -1 if the target element is not found.
// function binary(arr, target) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;
    
//     while(leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//         if(target === arr[middleIndex]) {
//             return middleIndex;
//         }
//         if(target < arr[middleIndex]) {
//             rightIndex = middleIndex - 1;
//         }else {
//             leftIndex = middleIndex + 1;
//         }
//     }
//     return -1;   
// }
// console.log(binary([-5, 2, 10, 4, 6], 10));
// console.log(binary([-5, 2, 10, 4, 6], 6));
// console.log(binary([-5, 2, 10, 4, 6], 20));



// let sampleArray = [18, 45, 22, 10, 33, 19, 25, 30, 16, 50];

// “You shall not pass!”
// “Here have a drink!”

//  function check(arr) {
//  if(arr.some(num => num < 21)) {
//   console.log("You shall not pass!");
//  }
//  if(arr.some(num => num > 21)) {
//   console.log("Here have a drink!");
//  }
//  }

//  check(sampleArray);


 


// Recursive Binary Search
// Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array, Return -1 if the target element is not found.

// function recursiveBinarySearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1)
// }

// function search(arr, target, leftIndex, rightIndex) {
//   if(leftIndex > rightIndex) {
//       return - 1
//   }
//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
//   if(target === arr[middleIndex]) {
//       return middleIndex
//   }
  
//   if(target < arr[middleIndex]) {
//      return search(arr, target, leftIndex, middleIndex - 1)
//   }
//   else {
//      return search(arr, target, middleIndex + 1,  rightIndex)
//   }
// }
// console.log(recursiveBinarySearch([-5, 2, 10, 4, 6], 10));
// console.log(recursiveBinarySearch([-5, 2, 10, 4, 6], 6));
// console.log(recursiveBinarySearch([-5, 2, 10, 4, 6], 20));
// Big - O = O(logn)

// Sorting
// Bubble sort
// Given an array of integers, sort the array
// function bubbleSort(arr) {
//   let swapped
//   do {
//     swapped = false
//     for(let i = 0; i < arr.length - 1; i++) {
//       if(arr[i] > arr[i + 1]) {
//         let temp = arr[i]
//         arr[i] = arr[i + 1]
//         arr[i + 1] = temp
//         swapped = true
//         console.log(arr);
        
//       }
//     }
//   } while(swapped)
// }

// const arr = [8, 20, -2, 4, -6]
// bubbleSort(arr)
// console.log(arr);

// insertion sort
// function insertionSort(arr) {
//   for(let i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i]
//     let j = i - 1
//     while(j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j]
//       j = j - 1
//     }
//     arr[j + 1] = numberToInsert
//     console.log(arr);
//   }
  
// }

// const arr = [8, 20, -2, 4, -6]
// insertionSort(arr)
// console.log(arr);


// Quick sort
// function quickSort(arr) {
//   if(arr.length < 2) {
//     return arr
//   }
//   let pivot = arr[arr.length - 1]
//   let left = []
//   let right = []
//   for (let i = 0; i < arr.length -1; i++) {
//     if(arr[i] < pivot) {
//       left.push(arr[i])
//     }
//     else {
//       right.push(arr[i])
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)]
// }
// const arr = [8, 20, -2, 4, -6]
// console.log(quickSort(arr));


// Merge sort
// function mergeSort(arr) {
//   if(arr.length < 2) {
//     return arr
//   }
//   const mid = Math.floor(arr.length / 2)
//   const leftArr = arr.slice(0, mid)
//   const rightArr = arr.slice(mid)
//   return merge(mergeSort(leftArr), mergeSort(rightArr))
// }

// function merge(leftArr, rightArr) {
//   const sortedArr = []
//   while(leftArr.length && rightArr.length) {
//     console.log(leftArr, rightArr, "all arr");
    
//     if(leftArr[0] <= rightArr[0]) {
//       sortedArr.push(leftArr.shift())
//       console.log(leftArr, "left");  
//     }
//     else {
//       sortedArr.push(rightArr.shift())
//       console.log(rightArr, "right");
//     }
//   }
//   return [...sortedArr, ...leftArr, ...rightArr]
// }

// const arr = [8, 20, -2, 4, -6]
// console.log(mergeSort(arr));
// Big - O = O(nlogn)



// console.log("5" + 3 - 1);


// Misc problems
// Cartesian Product
// function cartesianProduct() {
//   const result = []
//   for(let i = 0; i < arr1.length; i++) {
//     for(let j = 0; j < arr2.length; j++) {
//       result.push([arr1[i], arr2[j]])
//     }
//   }
//   return result
// }

// const arr1 = [1, 2]
// const arr2 = [3, 4, 5]
// console.log(cartesianProduct(arr1, arr2));
// Big-O = O(mn)


// Climbing staircase problem
// function staircase(n) {
//   const noOfWay = [1, 2]
//   for(let i = 2; i <= n; i++) {
//     noOfWay[i] = noOfWay[i -1] + noOfWay[i - 2]
//   }
//   return noOfWay[n -1]
// }

// console.log(staircase(1));
// console.log(staircase(2));
// console.log(staircase(3));
// console.log(staircase(4));
// console.log(staircase(5));


// Tower of Hanoi
// function towerOfHanoi(n, fromRod, toRod, usingRod){
//   if(n === 1) {
//     console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
//     return
//   }
//   towerOfHanoi(n-1, fromRod, usingRod, toRod) 
//     console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
//     towerOfHanoi(n-1, usingRod, toRod, fromRod) 
//   }
// towerOfHanoi(3, 'A', 'C', 'B')



// Bruce force - linear search
// Greedy - Dijkstra, Prim, kruskal
// Divide and conquer - Binary search, quick and merge sort, TOH
// Dynamic programming - Fibonacci, staircase
// Backtracking - N-Queens problem




// JS DS
// Array
// map, filter, reduce, concat, slice and splice
// const arr = [1, 2, 3, "4", "Sudip"]
// console.log(arr[0]);
// arr.unshift(0, 999, 9988)
// console.log(arr, 'unshift');

// arr.push(5)
// for(const item of arr) {
//   console.log(item);
  
// }

// arr.shift()
// console.log(arr, 'shift');
// arr.pop()
// console.log(arr, 'pop');


// Object
// Object.keys(), .values(), .entries() 
// const obj = {
//   name: 'Sudip',
//   age: 30,
//   "key-three": true,
//   sayMyName: function() {
//     console.log(this.name);
    
//   }
// }
// obj.hobby = "Football"

// console.log(obj.name);
// console.log(obj['age']);
// console.log(obj['key-three']);
// console.log(obj);
// delete obj["key-three"]
// console.log(obj);
// obj.sayMyName()



// Set
// const set = new Set([1, 2, 3])
// set.add(4)
// set.delete(4)
// console.log(set.has(4));
// for(const item of set) {
//   console.log(item);
  
// }


// Map
// const map = new Map([['a', 1], ['b', 2]])
// map.set('c', 3)
// map.delete('a')
// console.log(map.has('a'));
// console.log(map.size);
// map.clear()
// for(const [key,value] of map) {
//   console.log(`${key}: ${value}`);
// }




// Queue
// class Queue {
//   constructor() {
//     this.item = []
//   }

//   enqueue(element) {
//     return this.item.push(element)
//   }

//   dequeue() {
//    return this.item.shift()
//   }

//   isEmpty() {
//     return this.item.length === 0
//   }

//   peek() {
//     if(!this.isEmpty) {
//       return this.item[0]
//     }
//     return null
//   }

//   size() {
//     return this.item.length
//   }

//   print() {
//     console.log(this.item.toString());
    
//   }
// }

// const queue = new Queue()
// console.log(queue.isEmpty());


// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue.size());
// queue.print()
// console.log(queue.dequeue());
// console.log(queue.peek());


// Optimised Queue
// class Queue {
//   constructor() {
//     this.items = {}
//     this.rear = 0
//     this.front = 0
//   }


//   enqueue(element) {
//     this.items[this.rear] + element
//     this.rear++
//   }

//   dequeue() {
//     const item = this.items[this.front]
//     delete this.items[this.front]
//     this.front++
//     return item
//   }

//   isEmpty() {
//     return this.rear - this.front === 0
//   }

//   peek() {
//     return this.items[this.front]
//   }

//   size() {
//     return this.rear - this.front
//   }

//   print() {
//     console.log(this.items)
//   }
// }


// const queue = new Queue()
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.size());
// queue.print()
// console.log(queue.dequeue());
// console.log(queue.peek());



// Circular queue
// class CircularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity)
//     this.capacity = capacity
//     this.currentLength = 0
//     this.rear = -1;
//     this.front = -1;
//   }


//   isFull() {
//     return this.currentLength === this.capacity
//   }

//   isEmpty() {
//     return this.currentLength === 0
//   }

//   enqueue(element) {
//     if(!this.isFull()) {
//       this.rear = (this.rear + 1) % this.capacity
//       this.items[this.rear] = element
//       this.currentLength += 1
//       if(this.front === -1) {
//         this.front = this.rear
//       }
//     } 
//   }

//   dequeue() {
//     if(this.isEmpty()) {
//       return null
//     }
//     const item = this.items[this.front]
//     this.items[this.front] = null
//     this.front = (this.front + 1) % this.capacity
//     this.currentLength -= 1
//     if(this.isEmpty()) {
//       this.front = -1
//       this.rear = -1
//     }
//     return item
//   }


//   peek() {
//     if(!this.isEmpty()) {
//       return this.items[this.front]
//     }
//     return null
//   }


//   print() {
//     if(this.isEmpty()) {
//      console.log('Queue is Empty!');
//     }
//     else {
//       let i
//       let str = ''
//       for(i = this.front; i !== this.rear; i = (i +1) % this.capacity) {
//         str += this.items[i] + ' '
//       }
//       str += this.items[i]
//       console.log(str);  
//     }
//   }
// }


// const queue = new CircularQueue(5)
// console.log(queue.isEmpty());
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)

// console.log(queue.isFull());
// queue.print()
// console.log(queue.dequeue());
// console.log(queue.peek());
// queue.print()
// queue.enqueue(60)
// queue.print()



// LinkedList 
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }

  prepend(value) {
    const node = new Node(value)
    if(this.isEmpty()) {
      this.head = node
    }
    else {
      node.next = this.head
      this.head = node
    }
    this.size++
  }

  print() {
    if(this.isEmpty()) {
      console.log('List is empty!');
    }
    else {
      let curr = this.head
      let listValues = ''
      while(curr) {
        listValues += `${curr.value}`
        curr = curr.next
      }
      console.log(listValues);
      
    }
  }
}


const list = new LinkedList()
console.log('List is empty? ', this.isEmpty())
console.log('List Size', list.getSize());
list.print()
list.prepend(10)
list.print()

list.prepend(20)
list.prepend(30)
list.print()


// to be continued 
// lecture 16 - JS algo and DS - linkedList print