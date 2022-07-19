//  Definition for singly-linked list.
 class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 
// solution 1 iteravely stack
// T = 2 * O(n) => O(n)
// S = O(n)
// n = number of nodes in list
//  const reverseList = (head: ListNode | null): ListNode | null => {
//     if(!head){
//         return null
//     }
//     let newHead: ListNode | null = null;
//     //create stack 
//     const stack: ListNode[] = []
//     let current: ListNode | null = head
//     //push onto stack
//     while(current){
//         if(!current.next){
//             newHead = current
//         }
//         stack.push(current)
//         current = current.next
//     }
//     //pop and point
//     while(stack.length){
//         const current = stack.pop()
//         if(current){
//             const top = stack[stack.length - 1]
//             current.next = top ? top : null
//         }
//     }
//     return newHead
// };

// solution 2 iteravely pointers
// T = 2 * O(n) => O(n)
// S = O(1)
// n = number of nodes in list
 const reverseList = (head: ListNode | null): ListNode | null => {
    if(!head){
        return null
    }
    let prev: ListNode | null = null;
    let current: ListNode | null = head
    while(current){
        const nxt: ListNode | null = current.next
        current.next = prev;
        prev = current
        current = nxt
    }
    
    return prev
};


// solution 3 recursively
// T = O(n)
// S = O(n)
// n = number of calls

// const reverseList = (head: ListNode | null): ListNode | null => {
//     if(!head){
//         return head
//     }

//     const reverse = (last: ListNode | null, current: ListNode) : ListNode => {
//         if(!current.next){
//             current.next = last
//             return current
//         }
//         let newHead = reverse(current, current.next)
//         current.next = last
//         return newHead
//     }
//     return reverse(null, head)
    
// };

// [1,2]
// [2,3]
// [3,null]

// reverseList(null, 1) // 3
// reverseList(1, 2) // 3
// reverseList(2, 3) // 3


export default reverseList