class GraphData{
    constructor(){
        this.data={}
    }
    addVertex(vertex){
        if(!this.data[vertex]){
            this.data[vertex]=[];
        }
    }
    addEdges(v1,v2){
        if(!this.data[v1]){
            this.data[v1]=[];
        }
        if(!this.data[v2]){
            this.data[v2]=[];
        }
        this.data[v1].push(v2)
        this.data[v2].push(v1)
    }
}

let graph= new GraphData();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdges('A','B')
graph.addEdges('A','C')
graph.addEdges('C','B')
graph.addEdges('D','B')
graph.addEdges('E','D')
console.warn(graph)