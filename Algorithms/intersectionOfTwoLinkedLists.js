
const getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  const currA = headA;
  const currB = headB;

  while (currA !== currB) {
    currA = currA ? currA.next : headB;
    currB = currB ? currB.next : headA;
  }
}