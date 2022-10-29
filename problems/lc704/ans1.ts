function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  // 左闭右闭
  while (left <= right) {
    let middle: number = left + ((right-left)>>1)
    if (target > nums[middle]) {
      left = middle +1      
    } else if(target < nums[middle]) {
      right = middle -1   
    } else {
      return middle
    }
  }
  return -1
};


const arr = [-2, 1,4,5,6,11,20]
console.log(search(arr, 1))
