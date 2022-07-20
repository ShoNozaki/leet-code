//  Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

//solution 1
// traverse list and add to a Set
// return true if set is less than count
// return false if you get to end of list
// T = O(n)
// S = O(n)
// n = number of nodes

//  const hasCycle = (head: ListNode | null): boolean => {
//     let current = head
//     const nodes = new Set()
//     let i = 0
//     while(current){
//         nodes.add(current)
//         i += 1
//         if(nodes.size < i){
//             return true
//         }
//         current = current.next
//     }
//     return false
// };

//solution 2 
// Slow Fast pointers
// T = O(n)
// S = O(1)
// n = number of nodes in list

const hasCycle = (head: ListNode | null): boolean => {
    let slow = head
    let fast: ListNode | null | undefined = head
    while(slow && fast){
        slow = slow.next
        fast = fast.next?.next
        if(slow === fast){
            return true
        }
    }
    return false
};

export default hasCycle

