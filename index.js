function inOrder(currentNode){
    if(currentNode.left){
      inOrder(currentNode.left)
    }
    console.log(currentNode.data)
    if(currentNode.right){
      inOrder(currentNode.right)
    }
  }

function findOrAdd(rootNode, newNode) {
    if (newNode.data < rootNode.data) {
        if (!rootNode.left) {
            rootNode.left = newNode
            return true
        }else{
            return findOrAdd(rootNode.left, newNode)
        }
    }else{
        if (!rootNode.right) {
            rootNode.right = newNode
            return true
        }else{
            return findOrAdd(rootNode.right, newNode)
        }
    }
}

function max(node) {
    if (node.right) {
        return max(node.right)
    }else{
        return node
    }
}

function min(node) {
    if (node.left) {
        return max(node.left)
    }else{
        return node
    }
}


