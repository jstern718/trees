"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    let shortest = Infinity;

    function _depth(level = 1) {
      if (!this.left || !this.right) {
        shortest = Math.min(shortest, level);
      } else {
        level += 1;
        _depth.call(this.left, level);
        _depth.call(this.right, level);
      }
    }

    _depth.call(this);
    return shortest;
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */
  maxDepth() {
    let longest = 0;

    function _maxDepth(level = 1) {
      if (!this.left && !this.right) {
        longest = Math.max(longest, level);
      } else {
        level += 1;
        if (this.left) _maxDepth.call(this.left, level);
        if (this.right) _maxDepth.call(this.right, level);
      }
    }

    _maxDepth.call(this);
    return longest;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {
    let shortest = Infinity;

    function _minDepth(level = 1) {
      if (!this.left && !this.right) {
        shortest = Math.min(shortest, level);
      } else {
        level += 1;
        if (this.left) _minDepth.call(this.left, level);
        if (this.right) _minDepth.call(this.right, level);
      }
    }

    _minDepth.call(this);
    return shortest;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (!this.root) return 0;
    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (!this.root) return 0;
    return this.root.maxDepth();
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {
    if (!this.root) return 0;
    return this.root.minDepth();
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let shortest = Infinity;
    let closestVal = null;

    function _nextLarger(level = 1) {
      if (this.val > lowerBound && level < shortest) {
        shortest = level;
        closestVal = this.val;
      }
      level += 1;
      if (this.left) _nextLarger.call(this.left, level);
      if (this.right) _nextLarger.call(this.right, level);

    }

    _nextLarger.call(this.root);
    return closestVal;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }
}

module.exports = { BinaryTree, BinaryTreeNode };
