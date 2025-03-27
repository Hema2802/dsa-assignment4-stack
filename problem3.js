

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
    toString() {
        return this.items.join("");
    }
}

function removeAdjacentDuplicates(s) {
    let stack = new Stack();

    for (let char of s) {
        if (!stack.isEmpty() && stack.top() === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.toString();
}

console.log("Unique elements:",removeAdjacentDuplicates("abbaca")); // Output: "ca"

/*let s="abbaca";
let res = [];

    for (let char of s) {
        if (res.length > 0 && res[res.length - 1] === char) {
            res.pop();
        } else {
            res.push(char);
        }
    }

    console.log(res.join(""));*/

