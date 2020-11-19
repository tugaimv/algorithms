let graph = {}
graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []

function mango_seller(name){
    let copy_name = name
    return copy_name.slice(-1) === 'm'
}

function widthGraphSearch(graph, name){
    let order = [].concat(graph[name])
    let checked = []
    while (order.length > 0){
        let checkPerson = order.shift()
        if (!checked.includes(checkPerson)){
            if (mango_seller(checkPerson)){
                return `Yes ${checkPerson} sels mango`
            } else {
               order = order.concat(graph[checkPerson])
                checked.push(checkPerson)
            }
        }
    }
    return false
}

console.log(widthGraphSearch(graph, 'you'))