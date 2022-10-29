class TreeNode {
  public val: number | null;
  public left: TreeNode | null;
  public right: TreeNode | null;
  constructor(val?:number, left?: TreeNode, right?: TreeNode) {
    this.val = val===undefined ? null :val
    this.left = left === undefined ? null :left
    this.right = right === undefined ? null :right
  }
}
