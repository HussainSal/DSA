console.log("TREE TRAVERSAL");

// Lecture 173 :- Breadth First Search

// Lecture 174 :- BFS


class Node {
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
        this.size = 0;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    } 

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
                                                         current = current.   right

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
          /* Breath first order */

    BFS(){
        let queue = [],
             data = [],
             node = this.root
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node)
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data
    }

    // DFS pre-order

    /*

        10
    6       15
  3   8       20

    */


          /* Depth first Pre order */


     DFS(){

        let data = [];
        
        function traverse(node){
            data.push(node);

            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);

        return data

     }

        /* Depth first Post order */
     DFSPostorder (){
        let data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }

        traverse(this.root);

        return data;

     }


             /* Depth first In order */
     DFSInorder(){
         let data = [];

        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);

        return data;
     }
}


let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

console.log('first', tree.DFSPostorder())










// const a = [12,24,13];

// const b = a;

// // a[0] = 23;

// b[0] = 10;


// const aa = "Salman"

// const bb = aa

// bb = "t";


// console.log(aa,bb,"OUTPUT");





function trial (args){
    let arr2 = []

    for(let i = args.length -1; i >= 0;i--){
            arr2.push(args[i]);
    }

    return arr2

}




console.log(trial([1,2,3,4]))