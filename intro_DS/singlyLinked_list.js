

class Student {
    constructor(name, lastname){
        this.name = name;
        this.lastname = lastname;
    }


}

let firstStudent = new Student("colt","blue");
let secondStudent = new Student("check","test");

// console.log(firstStudent,secondStudent,"staaa")


// video 111 && 112 :- Starter code and push intro

class Node {
     constructor(val){
        this.val = val;
        this.next = null
     }
}

// class SinglyLinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0
//     }

//     push(val){ 

//         // creating new node
//         let newNode = new Node(val);

       
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else if(this.head){
//             // updaing the tail to point to new node
//             this.tail.next = newNode;
//             // moving the tail marker to newly created node
//             this.tail = newNode;
            
//         }
//         this.length++
//         return  this

//     }

// }


class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }


    // push
    push(val){

        // creating new node
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else {
        // updaing the tail to point to new node

            this.tail.next = newNode;
        // moving the tail marker to newly created node
            this.tail = newNode 
        }

        this.length++
        return this

    }

    // pop
    pop(){
        if(!this.head) return undefined

        let current = this.head;
        let newTail = this.head

        while(current.next){
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length --

        if(this.length === 0){
            this.head == null;
            this.tail == null
        }

       return current

    }

    // shift
       shift(){
        if(!this.head) return undefined

        let current = this.head;
        
        this.head = current.next;
        this.length--
        return current
    }

    // unshift

    unShift(val){ 

        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode 
        }else{
            this.head.next = this.head;
            this.head = newNode
        }

         this.length++
        return this
    }

    set(val, index){
        if(index < 0 || index >= this.length) return null
        let newData = this.get(index)

        newData.val = val

        return true

    }

}



let list  = new SinglyLinkedList();

list.push("sal");
list.push("far")
list.push("salfar")

console.log(list)





// video 113 :- Popping 


// video 114 :- Popping solution 




