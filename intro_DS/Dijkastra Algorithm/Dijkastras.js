console.log("Hello World");

// Priority queue :- Queue is FIFO in nature, what comes first goes first. over here we are also sorting it so that we get shortest distance

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.values.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort();
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2, weight) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1]?.push?.({ node: v2, weight });
      this.adjacencyList[v2]?.push?.({ node: v1, weight });
    }
  }

  dijkastras(start, finish) {
    const nodes = new PriorityQueue();
    const distance = {};
    const previous = {};

    // using for in loop for initializing values in nodes,distances and previous.
    for (let vertex in this.adjacencyList) {
      // if current vertex is starting point, then initialize it with 0 otherwise set infinity.
      if (vertex == start) {
        distance[vertex] = 0;

        // bydefault priority would be 0
        nodes.enqueue(vertex, 0);
      } else {
        distance[vertex] = Infinity;
        // bydefault priority would be 0
        nodes.enqueue(vertex, 0);
      }
      //  previous of every vertex would be null initially
      previous[vertex] = null;
    }
  }
}

const weightedGraph = new WeightedGraph();

weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");
weightedGraph.addVertex("D");
weightedGraph.addVertex("E");
weightedGraph.addVertex("F");

weightedGraph.addEdge("A", "B", 4);
weightedGraph.addEdge("A", "C", 2);
weightedGraph.addEdge("B", "E", 3);
weightedGraph.addEdge("C", "D", 2);
weightedGraph.addEdge("C", "F", 4);
weightedGraph.addEdge("D", "E", 3);
weightedGraph.addEdge("D", "F", 1);
weightedGraph.addEdge("E", "F", 1);

console.log(weightedGraph, "WEIGHTED_GRAPH");
