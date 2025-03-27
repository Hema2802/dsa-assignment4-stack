

// valid parenthesis

class Stack{
    constructor(){
        this.items=[];
    }

    push(element){
        this.items.push(element);
    }
    pop(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.items.pop();
    }
    top(){
        if(this.isEmpty()){
            return "Stack is empty";
        }
        return this.items[this.items.length -1];
    }
    isEmpty(){
        return this.items.length==0;
    }
    size(){
        return this.items.length;
    }
}

function validParenthesis(s){
    let stack=new Stack();
    for(let i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            stack.push(s[i]);
        }
        else if(s[i]==')'){
            if(stack.isEmpty()){
                return false;
                
            }else{
                if(stack.top()!='('){
                    return false;
                }else{
                    stack.pop();
                }
            }
        }
        else if(s[i]=='}'){
            if(stack.isEmpty()){
                return false;
                
            }else{
                if(stack.top()!='{'){
                    return false;
                }else{
                    stack.pop();
                }
            }
        }
        else if(s[i]==']'){
            if(stack.isEmpty()){
                return false;
                
            }else{
               if(stack.top()!='['){
                    return false;
                }else{
                    stack.pop();
                }
            }
        }
    }
    if(!stack.isEmpty()){
        return false;
    }else{
        return true;
    }
}

let result=validParenthesis("( ))");
console.log(result);


