const Memory = require('./memory');
let memory = new Memory();

class Array {
  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = memory.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    memory.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = memory.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    memory.copy(this.ptr, oldPtr, this.length);
    memory.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return memory.get(this.ptr + index);
  }

  pop(index) {
    if (this.length === 0) {
      throw new Error('Index Error');
    }
    const value = memory.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }

    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }

    memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    memory.set(this.ptr + index, value);
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    memory.copy(
      this.ptr + index,
      this.ptr + index + 1,
      this.length - index - 1
    );
    this.length--;
  }
}

// QUESTION 2

function main() {
  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);

  console.log(arr);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);

  let index1 = arr.get(0);
  console.log(index1);

  for (let i = arr.length - 1; i >= 0; i--) {
    arr.remove(i);
  }
  console.log(arr);
  arr.push('tauhida');
  console.log(arr);
  console.log(arr.get(0));
}

main();

// length is 1, capacity is 3, memory address is 0 for first log, second log length becomes 6, capacity becomes 12, ptr moves to 3, length of old array

// QUESTION 3

// length becomes 3 after removing 3 values from the original 6 values. capacity remains 12 and memory address remains 3.

// QUESTION 4

// The item returns NaN because the memory array is a Float64Array
// _resize is used to allocate additional size in memory for the array
