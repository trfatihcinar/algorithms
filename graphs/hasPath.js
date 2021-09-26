import { graphs } from './graphs.js'

export function hasPath(graph, source, destination){
       // this function figures out if there is a path from 
       // source to destination or not 
       // using breadth-first-traversal
    
    let queue = [ source ];

    while( queue.length > 0 ){
        let current = queue.shift();

        if(current === destination) return true;
        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }

    return false;
}


console.log(hasPath(graphs[2], 'f','h'));