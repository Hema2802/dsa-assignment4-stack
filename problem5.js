

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        return null;
    }
    top() {
        return this.isEmpty() ? null : this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    
}


// largerst rectangle

function largestRectangleArea(heights) {
    let stack = []; 
    let maxArea = 0;
    
    
    for (let i = 0; i <= heights.length; i++) {
        
        let currentHeight = (i === heights.length) ? 0 : heights[i];
        
        
        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = (stack.length === 0) ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        
        
        stack.push(i);
    }
    
    return maxArea;
}


const heights = [2, 1, 5, 6, 2, 3];
console.log("The largest rectangle area is :",largestRectangleArea(heights)); 
