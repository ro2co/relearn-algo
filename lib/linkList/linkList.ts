class ListNode {
  public val: number | null;
  public next: ListNode | null;
  constructor(val?:number, next?:ListNode | null){
    this.val = val===undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkList {
  public size: number;
  public head: ListNode | null;
  private tail: ListNode | null;
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  from (arr: number[]) {
    if(arr.length < 1) {
      return null
    }
    this.head =new ListNode(arr[0], null);
    this.size +=1
    let cur = this.head;
    for (let i = 1; i<arr.length; i++) {
      let node = new ListNode(arr[i], null)
      cur.next= node ;
      cur = node;
      this.size++
    }
    return this.head;
  }
  toArray() {
    if (!this.head) return []
    var result =[];
    var cur = this.head;

    while (cur) {
      result.push(cur.val)
      cur = cur.next!
    }
    return result
  }
  get(index: number) {
    let cur = this.head
    if (index>this.size) return null;
    for(let i=0; i<this.size; i++) {
      if (i=== index) {
        return cur!.val
      }
      cur = cur!.next;
    }
  }
  addAtHead(val: number) {
    const node = new ListNode(val) ;
    node.next = this.head;
    this.head = node;
    this.size++
  }
  addAtTail(val: number) {
    const node = new ListNode(val);
    let cur = this.head!;
    while (cur.next !== null) {
      cur = cur.next
    }
    cur.next = node
    this.size++
    //for (let cur = this.head; )
  }
  addAtIndex(index: number, val: number) {
    //if (index <= 0) {
    //    this.addAtHead(val);
    //    return;
    //}
    const node = new ListNode(val)
    const dummy:ListNode = new ListNode();
    dummy.next = this.head
    //this.head = dummy
    let cur:ListNode = dummy;
    for(let i=0; i<this.size; i++) {
      if(i === index) {
        console.log(81,index)
        console.log(82, this.head)
        node.next = cur!.next;
        cur!.next = node
      }
      if (cur.next !== null) {
        cur = cur.next;
      }
    }
    this.size++
  }
}

//let ll = new LinkList()
//ll.from([1,2,3,4,5])
//ll.addAtIndex(3, 9)
//console.log(96,ll.toArray())
//console.log(97, ll.get(3))
export default LinkList
