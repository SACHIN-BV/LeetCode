/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  // Create a dummy node for the merged list
  const dummy = new ListNode(0);
  let tail = dummy;

  // Iterate through both lists while they are not null
  while (list1 && list2) {
    // Compare values and append the smaller node
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  // Append remaining elements from either list
  tail.next = list1 || list2;

  // Return the head of the merged list (dummy.next)
  return dummy.next;
}

// Definition for a singly-linked list.
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}