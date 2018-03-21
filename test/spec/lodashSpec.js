describe("map", () => {
  describe("myEmployeesAddresses", () => {
    it("should exist", () => {
      expect(myEmployeesAddresses).toBeDefined();
    });
    it("should be an array", () => {
      expect(myEmployeesAddresses.length).toBeDefined();
    });
    it(`should have ${myEmployees.length} elements`, () => {
      expect(myEmployeesAddresses.length).toBe(myEmployees.length);
    });
    it("should have the correct elements", () => {
      expect(myEmployeesAddresses).toEqual(myEmployees.map(e => e.address));
    });
  });

  describe("myEmployeesAges", () => {
    it("should exist", () => {
      expect(myEmployeesAges).toBeDefined();
    });
    it("should be an array", () => {
      expect(myEmployeesAges.length).toBeDefined();
    });
    it(`should have ${myEmployees.length} elements`, () => {
      expect(myEmployeesAges.length).toBe(myEmployees.length);
    });
    it("should have the correct elements", () => {
      expect(myEmployeesAges).toEqual(myEmployees.map(e => e.age));
    });
  });
});

describe("sets", () => {
  describe("listToSendEmailsTo", () => {
    let myArry = _.union(bobFriendsEmails, breeFriendsEmails);
    it("should exist", () => {
      expect(listToSendEmailsTo).toBeDefined();
    });
    it("should be an array", () => {
      expect(listToSendEmailsTo.length).toBeDefined();
    });
    it(`should have ${myArry.length} elements`, () => {
      expect(listToSendEmailsTo.length).toBe(myArry.length);
    });
    it("should have the correct elements", () => {
      expect(listToSendEmailsTo.sort()).toEqual(myArry.sort());
    });
  });

  describe("listOfSharedEmails", () => {
    let myArry = _.intersection(bobFriendsEmails, breeFriendsEmails);
    it("should exist", () => {
      expect(listOfSharedEmails).toBeDefined();
    });
    it("should be an array", () => {
      expect(listOfSharedEmails.length).toBeDefined();
    });
    it(`should have ${myArry.length} elements`, () => {
      expect(listOfSharedEmails.length).toBe(myArry.length);
    });
    it("should have the correct elements", () => {
      expect(listOfSharedEmails.sort()).toEqual(myArry.sort());
    });
  });
});

describe("groups", () => {
  describe("purchasesByMonth", () => {
    let myGroup = _.groupBy(purchases, "month");
    it("should exist", () => {
      expect(purchasesByMonth).toBeDefined();
    });
    it("should be an object", () => {
      expect(_.isObject(purchasesByMonth)).toBe(true);
    });
    it(`should have January, February, March, and April properties on object`, () => {
      expect(purchasesByMonth.January).toBeDefined();
      expect(purchasesByMonth.February).toBeDefined();
      expect(purchasesByMonth.March).toBeDefined();
      expect(purchasesByMonth.April).toBeDefined();
    });
    it(`January, February, March, and April should be arrays`, () => {
      expect(_.isArray(purchasesByMonth.January)).toBe(true);
      expect(_.isArray(purchasesByMonth.February)).toBe(true);
      expect(_.isArray(purchasesByMonth.March)).toBe(true);
      expect(_.isArray(purchasesByMonth.April)).toBe(true);
    });
    it("should have the correct elements in each array", () => {
      expect(purchasesByMonth.January.sort()).toEqual(myGroup.January.sort());
      expect(purchasesByMonth.February.sort()).toEqual(myGroup.February.sort());
      expect(purchasesByMonth.April.sort()).toEqual(myGroup.April.sort());
      expect(purchasesByMonth.March.sort()).toEqual(myGroup.March.sort());
    });
  });
});

// describe('filters1', ()=>{
//   describe('evenNumbers', ()=>{
//     it('should exist', ()=>{
//       expect(evenNumbers).toBeDefined();
//     })
//     it('should be an array', ()=>{
//       expect(evenNumbers.length).toBeDefined();
//     })
//
//   })
// })

// describe('map1', ()=>{
//   describe('postTaxPrices', ()=>{
//     it('should exist', ()=>{
//       expect(postTaxPrices).toBeDefined();
//     })
//     it('should be an array', ()=>{
//       expect(postTaxPrices.length).toBeDefined();
//     })
//     it('should have 9 elements', ()=>{
//       expect(postTaxPrices.length).toBe(9);
//     })
//     it('should have the correct prices', ()=>{
//       let incorrect = [16.05, 24.610000000000003, 83.46000000000001, 36.38,
//         12.84, 92.02000000000001, 12.84, 84.53, 34.24].reduce(
//         (p, e, i)=>p||(Math.abs(e-postTaxPrices[i])>.02), false)
//       expect(incorrect).toBe(false);
//     })
//   })
// })
//
// describe('reduce1', ()=>{
//   describe('totalPopulation', ()=>{
//     it('should exist', ()=>{
//       expect(totalPopulation).toBeDefined();
//     })
//     it('should have the correct total', ()=>{
//       expect(totalPopulation).toBe(16763615);
//     })
//   })
// })
//
// describe('filters2', ()=>{
//   describe('myStrongest', ()=>{
//     it('should exist', ()=>{
//       expect(myStrongest).toBeDefined();
//     })
//     it('should be an array', ()=>{
//       expect(myStrongest.length).toBeDefined();
//     })
//     it('should have 9 elements', ()=>{
//       expect(myStrongest.length).toBe(9);
//     })
//     it('should have the correct monsters', ()=>{
//       expect(myStrongest.map(e=>e.monster).sort().toString())
//         .toEqual(monstersInYourPocket.filter(e=>e.CP>200).map(e=>e.monster).sort().toString());
//       expect(myStrongest.map(e=>e.CP).sort().toString())
//         .toEqual(monstersInYourPocket.filter(e=>e.CP>200).map(e=>e.CP).sort().toString());
//     })
//   })
// })
//
// describe('map2', ()=>{
//   describe('ordersTotal', ()=>{
//     it('should exist', ()=>{
//       expect(ordersTotal).toBeDefined();
//     })
//     it('should be an array', ()=>{
//       expect(ordersTotal.length).toBeDefined();
//     })
//     it('should have 10 elements', ()=>{
//       expect(ordersTotal.length).toBe(10);
//     })
//     it('should have the correct prices', ()=>{
//       let incorrect = [16.35, 44.940000000000005, 62.160000000000004,
//         88.80000000000001, 73.14, 77.52000000000001, 82.08000000000001,
//         55.59, 102.35, 54.239999999999995].reduce(
//         (p, e, i)=>p||(Math.abs(e-ordersTotal[i])>.02), false)
//       expect(incorrect).toBe(false);
//     })
//   })
// })
//
// describe('reduce2', ()=>{
//   describe('totalPopulation', ()=>{
//     it('should exist', ()=>{
//       expect(bobsTotal).toBeDefined();
//     })
//     it('should have the correct total', ()=>{
//       expect(bobsTotal).toBe(891);
//     })
//   })
// })
