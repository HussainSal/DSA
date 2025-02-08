console.log("Graph");

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1]?.push?.(v2);
      this.adjacencyList[v2]?.push?.(v1);
    }
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1]?.filter(
      (val) => val !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2]?.filter(
      (val) => val !== v1
    );
  }

  removeVertex(v1) {
    //approach 1
    // this.adjacencyList[v1]?.forEach((cur) => {
    //   this.removeEdge(cur, v1);
    // });

    //approach 2

    while (this.adjacencyList[v1]?.length) {
      let poppedElement = this.adjacencyList[v1]?.pop();
      this.removeEdge(v1, poppedElement);
    }

    delete this.adjacencyList[v1];
  }

  depthFirstRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    /* function which will be called recursively  */
    (function dfs(vertex) {
      /* return null incase there is no vertex  */
      if (!vertex) return null;

      /* inserting vertex in visited and setting it true */
      visited[vertex] = true;

      /* function which will be called recursively  */
      result.push(vertex);

      /* we are checking edges for each vertex, and then we are checking if that edge is already visited, if not then calling dfs function recursively so that it can be added in result array */
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour);
        }
      });

      // console.log(adjacencyList[vertex], "VERTEX_VALUESSS");
    })(start);

    console.log(result, "RESULT_HERE");
    return result;
  }

  depthFirstIterative(start) {}

  breadthFirstRecursive(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentIndex;
    visited[start] = true;

    while (queue.length) {
      currentIndex = queue.shift();
      result.push(currentIndex);

      this.adjacencyList[currentIndex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }

    return result;
  }
}

const graph = new Graph();

// Adding Vertex
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong");

// Adding Edge
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Dallas", "Aspen");
graph.addEdge("Hong Kong", "Tokyo");
graph.addEdge("Hong Kong", "Dallas");
graph.addEdge("Los Angeles", "Hong Kong");
graph.addEdge("Los Angeles", "Dallas");

// Removing Edge
graph.removeVertex("Hong Kong");

const flow = new Graph();

// Vertex has been added
flow.addVertex("A");
flow.addVertex("B");
flow.addVertex("C");
flow.addVertex("D");
flow.addVertex("E");
flow.addVertex("F");

// Adding edges
flow.addEdge("A", "B");
flow.addEdge("A", "C");
flow.addEdge("B", "D");
flow.addEdge("C", "E");
flow.addEdge("D", "E");
flow.addEdge("D", "F");
flow.addEdge("E", "F");

// flow.depthFirstRecursive("A");
// console.log(flow.breadthFirstRecursive("A"), "CHAT_PLUSSSS");

// console.log(flow, "FLOWWW");

const canVisitAllRooms = function (rooms) {
  let visited = { 0: true };
  let key = 0;

  visited[key] = true;

  (function dfs(vertex) {
    rooms[vertex]?.forEach((neighbour) => {
      if (!visited[neighbour]) {
        visited[neighbour] = true;
        return dfs(neighbour);
      }
    });
  })(key);

  console.log(visited, "visited");

  return rooms.length === Object.keys(visited).length ? true : false;
};

// console.log(canVisitAllRooms([[1], [2], [3], []]), "canVisitAllRooms");

const numProvince = function (isConnected) {
  const visited = {};
  let n = isConnected.length;
  let count = 0;
  let adjValue = [];

  function dfsHelper(i) {
    visited[i] = true;

    for (let j = 0; j < n; j++) {
      let x = isConnected[i][j];
      if (x) {
        adjValue.push(j);
      }
    }

    for (let k = 0; k < adjValue.length; k++) {
      if (!visited[adjValue[k]]) {
        dfsHelper(adjValue[k], n, visited, isConnected);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      count++;
      dfsHelper(i, n, visited, isConnected);
    }
  }

  return count;
};

console.log(
  numProvince([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
  "NUMB_PROVINCE"
);
