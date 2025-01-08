const checkApprove = require('./approval');

describe('checkApprove', () => {
    const approvers = [
      { name: "Manager", limit: 5000 },
      { name: "Director", limit: 20000 },
      { name: "CEO", limit: 50000 },
    ];
    it('อนุมัติเมื่อยอดเงินอยู่ในขอบเขตของ Director', () => {
      const purchaseAmount = 15000;
      const result = checkApprove(approvers, purchaseAmount);
      expect(result).toEqual({ approved: true, approver: "Director" });
    });
});