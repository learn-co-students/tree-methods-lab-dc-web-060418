let node = {data: 5, left:
    {data: 3, left: null, right: null},
      right: {data: 7, left: null,
      right: {data: 9, left: null, right: null}
    }}

function inOrder(node) {
    //binary search tree has smaller value on the left, check that first
    if (node.left) {
        inOrder(node.left)
    }
    console.log(node.data)
    if (node.right) {
        inOrder(node.right)
    }
}


function findOrAdd(currentNode, newNode) {
    if(newNode.data < currentNode.data) {
        //look to the left!
        if(currentNode.left) {
            //if there's already a node there, you must look further
            return findOrAdd(currentNode.left, newNode)
        } else {
            //found the correct spot and it's vacant, put the newNode there
            currentNode.left = newNode
        }
    } else if (newNode.data > currentNode.data) {
        //look to the right
        if(currentNode.right) {
            return findOrAdd(currentNode.right, newNode)
        } else {
            currentNode.right = newNode
        }
    } else {
        //the nodes are equal, node already exists
        return true
    }
}

function max(currentNode) {
    //if there is a value to the right, it's bigger
    if(currentNode.right) {
        //call max again
        return max(currentNode.right)
    } else {
        //if there's nothing to the right, that has to be the biggest
        return currentNode
    }
}

function min(currentNode) {
    if(currentNode.left) {
        return min(currentNode.left)
    } else {
        return currentNode
    }
}