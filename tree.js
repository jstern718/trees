"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    let sum = 0;

    // function _sum(node){
    //     sum += node.val;

    //     //recursion
    //     if (node.children.length !== 0){
    //         for (let child of node.children){
    //             _sum(child);
    //         }
    //     }
    // }

    function _sum(){
        sum += this.val;

        //recursion
        if (this.children.length !== 0){
            for (let child of this.children){
                _sum.call(child);
            }
        }
    }

    _sum.call(this);

    return sum;
  }

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let count = 0;

    function _countEvens(){
        if (this.val%2 === 0){
            count += 1;
        }


        //recursion
        if (this.children.length !== 0){
            for (let child of this.children){
                _countEvens.call(child);
            }
        }
    }

    _countEvens.call(this);

    return count;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound){
    let count = 0;

    function _countGreater(){
        if (this.val > lowerBound){
            count += 1;
        }

        //recursion
        if (this.children.length !== 0){
            for (let child of this.children){
                _countGreater.call(child);
            }
        }
    }

    _countGreater.call(this);

    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {
    if (!this.root){
        return 0;
    }
    return this.root.sumValues()

  }

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {
    if (!this.root){
        return 0;
    }
    return this.root.countEvens()

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {
    if (!this.root){
        return 0;
    }
    return this.root.numGreater(lowerBound)
  }
}

module.exports = { Tree, TreeNode };
