let graph ={}
graph['start']={}
graph['start']['a'] = 6
graph['start']['b'] = 2
graph['a']={}
graph['a']['fin']=1
graph['b']={}
graph['b']['a']=3
graph['b']['fin']=5
graph['fin']={}

let costs = {}
costs['a'] = 6
costs['b'] = 2
costs['fin'] = 1.7976931348623157E+10308

let parents = {}
parents['a'] = 'start'
parents['b'] = 'start'
parents['fin'] = null

let processed = []

function find_lowest_cost_node(costs){
    let lowest_cost = 1.7976931348623157E+10308
    let lowest_cost_node = null
    for (let node in costs) {
        let cost = costs[node]
        if (cost < lowest_cost && !processed.includes(node)){
            lowest_cost = cost
            lowest_cost_node = node
        }
    }
    return lowest_cost_node
}


let node = find_lowest_cost_node(costs)
debugger
while (node) {
    debugger
    let cost = costs[node]
    let neighbors = graph[node]
    for (let n in neighbors){
       let new_cost = cost + neighbors[n]
        if (costs[n] > new_cost) {
            costs[n] = new_cost
            parents[n] = node
        }
    }
    processed.push(node)
    node = find_lowest_cost_node(costs)
    debugger
}

