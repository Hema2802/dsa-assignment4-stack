

// trapping rain water   
//Time limit exceeded

/*
function trap(height) {
    let n = height.length;
    if (n === 0) return 0;

    let totalWater = 0;

    for (let i = 0; i < n; i++) {
        let leftMax = 0, rightMax = 0;

        
        for (let j = 0; j <= i; j++) {
            leftMax = Math.max(leftMax, height[j]);
        }

        
        for (let j = i; j < n; j++) {
            rightMax = Math.max(rightMax, height[j]);
        }

        
        totalWater += Math.min(leftMax, rightMax) - height[i];
    }

    return totalWater;
}


console.log("The amount of water trapped is :",trap([0,1,0,2,1,0,1,3,2,1,2,1])); 
*/

// other method

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

function trap(height) {
    let stack = []; 
    let totalWater = 0;
    
    for (let i = 0; i < height.length; i++) {
        
        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            let top = stack.pop(); 
            if (stack.length === 0){
                break; 
            } 

            let distance = i - stack[stack.length - 1] - 1; 
            let boundedHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top]; // Effective height
            totalWater += distance * boundedHeight; 
        }
        
        stack.push(i); 
    }
    
    return totalWater;
}


console.log("The amount of water trapped is:", trap([0,1,0,2,1,0,1,3,2,1,2,1]));
