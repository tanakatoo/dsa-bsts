class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }

    let currentNode = this.root
    while (currentNode) {
      if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode.left = new Node(val)
          currentNode = null
        } else {
          currentNode = currentNode.left
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = new Node(val)
          currentNode = null
        } else {
          currentNode = currentNode.right
        }
      }
    }
    return this
  }


  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (!this.root) {
      this.root = new Node(val)
      return this
    }
    if (currentNode.val > val) {
      if (!currentNode.left) {
        currentNode.left = new Node(val)
        return this
      }
      return this.insertRecursively(val, currentNode.left)
    } else {
      if (!currentNode.right) {
        currentNode.right = new Node(val)
        return this
      }
      return this.insertRecursively(val, currentNode.right)
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    let currentNode = this.root
    while (currentNode) {
      if (currentNode.val == val) {
        return currentNode
      }
      else if (currentNode.val > val) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }
    return undefined

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (!currentNode) return undefined
    if (currentNode.val == val) {
      return currentNode
    } else if (currentNode.val > val) {
      return this.findRecursively(val, currentNode.left)
    } else {
      return this.findRecursively(val, currentNode.right)
    }

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(currentNode = this.root, arr = []) {
    if (currentNode) {
      arr.push(currentNode.val)
      if (currentNode.left) {
        this.dfsPreOrder(currentNode.left, arr)
      }
      if (currentNode.right) {
        this.dfsPreOrder(currentNode.right, arr)
      }
    }
    return arr
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(currentNode = this.root, arr = []) {
    if (currentNode) {

      if (currentNode.left) {
        this.dfsInOrder(currentNode.left, arr)
      }
      arr.push(currentNode.val)
      if (currentNode.right) {
        this.dfsInOrder(currentNode.right, arr)
      }
    }
    return arr
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(currentNode = this.root, arr = []) {
    if (currentNode) {

      if (currentNode.left) {
        this.dfsPostOrder(currentNode.left, arr)
      }

      if (currentNode.right) {
        this.dfsPostOrder(currentNode.right, arr)
      }
      arr.push(currentNode.val)
    }
    return arr
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let currentNode = this.root
    let toTraverse = []
    let arr = []

    while (currentNode) {

      arr.push(currentNode.val)

      if (currentNode.left) {
        toTraverse.push(currentNode.left)
      }
      if (currentNode.right) {
        toTraverse.push(currentNode.right)
      }
      currentNode = toTraverse.shift()
    }
    return arr
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val, currentNode = this.root) {
    //just like finding a value
    if ()
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
