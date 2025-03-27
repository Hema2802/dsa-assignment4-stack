

// next greater element
class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "underflow";
        }
        return this.items.pop();
    }
    top() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    size() {
        return this.items.length;
    }
}

var nextGreaterElement = function(nums1, nums2) {
    let stack = new Stack();
    let nextGreaterMap = new Map();

    
    for (let i = nums2.length - 1; i >= 0; i--) {
        let num = nums2[i];

        
        while (!stack.isEmpty() && stack.top() <= num) {
            stack.pop();
        }

        
        if (stack.isEmpty()) {
            nextGreaterMap.set(num, -1);
        } else {
            nextGreaterMap.set(num, stack.top());
        }

        
        stack.push(num);
    }

    
    return nums1.map(num => nextGreaterMap.get(num));
};


console.log(nextGreaterElement([4,1,2], [1,3,4,2])); // Output: [-1, 3, -1]



/*let nums1 = [4,1,2];
let nums2 = [1,3,4,2];

let result=[];
for(let n1 of nums1){
    let target=false;
    let greater=-1;
    for(n2 of nums2){
        if(n2==n1){
            target=true;
        }

        if(target && n2>n1){
            greater = n2;
            break;
        }
    }
    result.push(greater);
}
console.log(result);
*/