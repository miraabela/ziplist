/* eslint-env mocha, chai */
/* global zipList, zipListTheSimpleWay, chai */

describe('ziplist', function () {
  const list1 = ['do', 're', 'mi'];
  const list2 = [4, 5, 6];
  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipList(list1, list2).length).to.equal(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipList(list1, list2)).to.deep.equal(['do', 4, 're', 5, 'mi', 6]);
    });
  });
  describe('zipping two test arrays', function () {
    it('should return a single array with six elements', function () {
      chai.expect(zipListTheSimpleWay(list1, list2).length).to.equal(6);
    });
    it('should deep equal the passed six element array', function () {
      chai.expect(zipListTheSimpleWay(list1, list2)).to.deep.equal(['do', 4, 're', 5, 'mi', 6]);
    });
  });
});
