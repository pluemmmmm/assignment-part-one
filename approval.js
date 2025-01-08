const approvers = [
  { name: "Manager", limit: 5000 },
  { name: "Director", limit: 20000 },
  { name: "CEO", limit: 50000 },
];

const purchaseAmount = 15000;

function checkApprove(approvers, purchaseAmount) {
  const approver = approvers.find(a => purchaseAmount <= a.limit);
  return approver ? { approved: true, approver: approver.name } : { approved: false, approver: null };
}

const result = checkApprove(approvers, purchaseAmount);
console.log(result);

module.exports = checkApprove;