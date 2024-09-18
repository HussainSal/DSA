// Lecture 153 :- Writing our own stack from scratch


class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first=null;
        this.last=null;
        this.size = 0
    }

    // In stack we follo LIFO so acc to it element added using push will come first

    push(val){

        let node = new Node(val);

        if(!this.first){
            this.first = val
            this.last = val
        }else{
            let currentNode = this.first
            this.first = node
            this.first.next = currentNode
        }  

        return ++this.size
    }

    // follwing POP for stacks means, removing element which were inserted at last.

    pop (){
           if(!this.first) return null

           if(this.size == 1){
            this.last = null
           }

           let currentNode = this.first;

           this.first = currentNode.next 

           this.size --
          return currentNode
    }

}


const stack = new Stack();

stack.push("FIRST");
stack.push("SEC");
stack.push("THIRD");
stack.pop();





console.log(stack,"Stack",stack.pop()
)















