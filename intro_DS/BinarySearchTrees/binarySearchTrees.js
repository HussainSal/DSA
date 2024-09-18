console.log("Binary Search")


class Node{
    constructor(val){
        this.value =val;
        this.left = null;
        this.right =null
    }
}

class BinarySearchTree{
    constructor(){
        this.root =null
    }

    // Video 167 :- Insert
    insert(val){
        // creating a new node
        let newNode = new Node(val);

        // if root does not exist assign new node to be the root
        if(this.root == null){
            this.root = newNode
        }else{
            let current = this.root;
            
            while(true){
        // If same value is entered again        
                if(newNode.value == current.value) return undefined
        // if newNode is less than current
             if(newNode.value < current.value){
        // if left to current does not exist
                if(current.left == null){
                    current.left = newNode;
                    return this;
                }else{
                    current = current.left
                }
        // if newNode is grater than current
             }else if(newNode.value > current.value){

      // if right to current does not exist       
                if(current.right == null){
                    current.right = newNode
                    return this
                }else{
                    current = current.right 
                }
             }
            }
        }

    }

    // Video 168 :- Find
    find(val){
        let newNode = new Node(val);
        if(this.root == null) {return undefined
        }else{
            let current = this.root;
            let found = false
            while(current && !found){
                 if(newNode.value < current.value  ){
                    current = current.left
                }else if(newNode.value > current.value){
                                                       current = current.right

                }else{
            found = true
                }
            }

            if(!found){
                return "value could not be found"
            }

            return `Valud found :- ${current.value}`
        }

        

    }

    




}

let tree = new BinarySearchTree();

//  basic structure of a tree

// tree.root = new Node(10);
// tree.root.right = new Node(15)
// tree.root.left = new Node(7)
// tree.root.left.right = new Node(9)
// tree.root.left.left = new Node(4)
// console.log(tree,"TREE")



// video 166 :- Insert


{/*
    1. Create a new node
    2. Starting at the root
    2.1 Check if there is a root, If not :- The root now becomes that new model.

    3.If there is a root, check if the value of the new node is greater than or less than the value of root.

    4. If it is grater :- 
    4.1 Check to see if there is a node to the right :- 
     4.1.1 If there is, move to that node and repeat the steps.
     4.1.2 if there is not, add that node as the right property

     5. If it is smaller :-
     5.1 Check to see if there is a node to the left :- 
     5.1.1 If there is, move to that node and repeat the steps
     5.1.2 if there is not, add that node as the left property


     eg :-  
            10
        5       13
      2  7    11  16
       

*/}




// Video  :- Insert Solution
tree.insert(10)
tree.insert(5)
tree.insert(2)
tree.insert(7)
tree.insert(1)

tree.insert(13)
tree.insert(11)
tree.insert(16)

console.log(tree,"TREE")
console.log(tree.find(10),"Find")



// Video 165 :- Find





