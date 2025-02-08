console.log("Weighted Graph");

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
}

const weightedGraph = new WeightedGraph();

weightedGraph.addVertex("A");
weightedGraph.addVertex("B");
weightedGraph.addVertex("C");

weightedGraph.addEdge("A", "B", 9);
weightedGraph.addEdge("A", "C", 5);
weightedGraph.addEdge("B", "C", 7);

console.log(weightedGraph, "WEIGHTED_GRAPH");
