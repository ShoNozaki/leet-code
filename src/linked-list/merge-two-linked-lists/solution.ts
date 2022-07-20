// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

//  const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
//     if(!list1){
//         return list2
//     } else if(!list2){
//         return list1
//     }


//     //both lists are valid
//     let point1: ListNode | null = list1
//     let point2: ListNode | null = list2
//     let head: ListNode | null = null
//     let current: ListNode; 
//     if(list1.val <= list2.val){
//         head = list1
//         current = list1
//         point1 = point1.next
//     } else{
//         head = list2
//         current = list2
//         point2 = point2.next
//     }
    
//     while(point1 && point2){
//         const dif1 = point1.val - current.val
//         const dif2 = point2.val - current.val

//         if(dif1 <= dif2){
//             current.next = point1
//             current =current.next
//             point1 = point1.next
//         } else {
//             current.next = point2
//             current= current.next
//             point2 = point2.next  
//         }
//     }
//     if(!point1){
//         current.next = point2
//     } else if(!point2){
//         current.next = point1
//     }
//     return head
// };

const mergeTwoLists = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
    const dummy = new ListNode()
    let tail = dummy
    let l1 = list1
    let l2 = list2

    while(l1 && l2){
        if(l1.val < l2.val){
            tail.next = l1
            l1 = l1.next
        }else {
            tail.next = l2
            l2 = l2.next
        }
        tail = tail.next
    }

    if(l1){
        tail.next = l1
    } else if (l2) {
        tail.next = l2
    }

    return dummy.next
};
//  [5]
//  [1,2,4]
//h [1,2,4]
//p1 [5,n]
//p2 [n,n]

