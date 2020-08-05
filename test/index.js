const converter = require("../utils/converter"),
      getResults = require('../scraper'),
      chai  = require("chai"),
      expect = chai.expect;


describe('getResults', () => {

    it('should return valid data', async () => {
         let res = await getResults();
         expect(res.tags.length).to.equal(70);
    });
});