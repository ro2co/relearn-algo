import LinkList from '../../lib/linkList/linkList'

//class MyLinkList extends LinkList{
//  reverse() {
//    console.log(this.size)
//  }
//}
type ListNode = {
  val: number| null;
  next: ListNode | null;
}

const ll = new LinkList()
ll.from([2,3,4,5])
console.log(ll.head)
// function reverse(head: ListNode) :ListNode {

//   return head
// }

