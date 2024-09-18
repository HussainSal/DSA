console.log("ques")

// we can create a que by using a combination push and shift. bczz by doing so we follow FIFO


// we can also create a que using unshift and pop . no matter what approach we take we will have to go with o(n) which is not ideal.


// Video 157 :- Creating our own que which will have o of constant. the terminology is nq for adding and dq for removing



class Node {
    constructor(val){
        this.value = val;
        this.next = null
    }
}

class Que {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }

    // adds at the end
    enqueue(val){

        let node = new Node(val)

        if(!this.first){
            this.first = node
            this.last = node
        }else{
            this.last.next = node
            this.last = node
      
        }
       return  ++this.size

    }
    // removes from the begining
    dequeue(){

        if(!this.first) return null

        if(this.size == 1){
            this.first = null
            this.last = null
        }

        let temp = this.first
        this.first = this.first.next;
        --this.size
      return temp
    }
}


const que = new Que();


que.enqueue("First")
que.enqueue("Second")
que.enqueue("Third")

console.log(que, que.dequeue(),que.dequeue(), que.dequeue(),"QUE")

