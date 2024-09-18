
class Node{
    constructor(val){
        this.val = val,
        this.next = null,
        this.previous = null
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    // Push
    push(val){

        let newNode = new Node(val)

        // setting head and tail incase of 1t element
        if(this.head == null){
            this.head = newNode
            this.tail = newNode
        }else{
            // setting new node to the next of existing tail
            this.tail.next = newNode
            // setting prv prop of new node to current tail
            newNode.previous = this.tail

            // setting new tail to new node
            this.tail = newNode
        }
        this.length ++
        return this
    }

    // Pop

    pop(){
        // doublylist is empty
        if(!this.head) return undefined

        // new tail
        let currentTail = this.tail

        if(this.length == 1){
            this.head = null
            this.tail = null
        }else {    
            this.tail = currentTail.previous;
            this.tail.next = null
            currentTail.previous = null
        }
        this.length--

        return currentTail
        
    }

    shift(){

        if(!this.head) return undefined
      
        // old head
        let cuurentStart = this.head


        // if length is one
       if(this.length == 1){
          this.head = null
          this.tail = null
        }else{
            // setting new head to be the next element
            this.head = cuurentStart.next;

            // setting new head prv to null
            this.head.previous=null;

            // setting old head next to be null
            cuurentStart.next = null
        }

        this.length --
        return cuurentStart

    }



    unshift(val){
        // new node
        let newNode = new Node(val);

        // head does not exist make head and tail to be the new node
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }else{

              // setting previous prop of current head pointing to the newNode, bcz now it will be the element on index 0
            this.head.previous = newNode 

        // setting next prop of newNode pointing to the current head, bcz now it will be the element on index 1
            newNode.next = this.head
        

            // Changing current head to be the new node
            this.head = newNode
        }

        this.length++
        return this

    }


    get(index){
        if(index >= this.length || index < 0) return undefined

        let mid =  Math.floor(this.length/2);
        let counter = 0
        if(index < mid ){
            let current = this.head
            while(counter != index){
                current = current.next
                counter++
            }
        }else{
            let current = this.tail
            counter = this.length - 1
            while(counter != index){
                current = current.previous
                counter--
            }
        }

        return current


      




    }

    set(index, val){
        let newNode = new Node(val);
        const foundNode = this.get(index);

        if(foundNode != null ){
            foundNode.val = val
        }
    }


    




}

// inserting item in node
const newNode = new Node(12);

// creating a doubly linked list
const doublyList = new DoublyLinkedList();

// inserting next item in newnode
newNode.next = new Node(13);

// inserting previous item in newnode
newNode.next.previous = newNode


doublyList.push("sal");
doublyList.push("far");
doublyList.push("trial");




// console.log(doublyList.unshift("plus"),"newNode")


console.log(doublyList.set(1,"check"),"entireArray")

