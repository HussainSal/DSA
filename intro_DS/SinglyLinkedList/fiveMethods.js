
// Video 115 :- Shift Intro

/* 
    Pseudocode

    1. If there are no nodes, return undefined,
    2. Store the current head prop in a variable,
    3. Set the head prop to be the next of current.
    4. decrement the length,
    5. return the removed node

*/


class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }

}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }    

    push(val){

        let newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.tail.next = newNode;
            this.tail = newNode
        }

        this.length ++

    }


    shift(){
        if(!this.head) return undefined

        let current = this.head;
        
        this.head = current.next;
        this.length--
        return current
    }


    unShift(val){ 

        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode 
            this.tail = newNode
            
        }else{
            newNode.next = this.head;
            this.head = newNode
        }

         this.length++
        return this
    }

    // Get method
    get(val){

        if(val < 0 || val >= this.length) return null

        let counter = 0 ;
        let current = this.head

        while(counter !== val){
            current = current.next;
            counter ++
        }
        return current
    }


     set(val, index){
        if(index < 0 || index >= this.length) return null
        let newData = this.get(index)
        newData.val = val
        return true
    }

    insert(val, index){
         if(index < 0 || index >= this.length) return null

         let current = this.head;
         let node = new Node()

      for(let i =0; i< this.length;i++){
        if(i == index){
            node
        }else{
           current = current.next
        }
      }

        newData.val = val
        return true
    }

}



let list = new SinglyLinkedList()

list.push("Trial");
list.push("Check");
list.push("Salman");

console.log(list.set("plus",1),list,"LIST")

