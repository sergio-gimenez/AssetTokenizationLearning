const Token = artifacts.require('BFDToken');

// Now let's set up chai. All the test setup is extracted from the openzeppeli
// test-helpers repo:
// https://github.com/OpenZeppelin/openzeppelin-test-helpers/blob/master/src/setup.js

var chai = require('chai');
// TODO what is big number for?
const BN = web3.utils.BN;  // Big Number that we want to use
const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;

contract(
    'Token Test',
    async (accounts) => {

        // In order to understand what "it" does , for me is easy to readit like
        // "it should..."
        it('all tokens should be in my account',
           async () => {
             let instance = await Token.deployed();
             let totalSupply = await instance.totalSupply();

             // The eventually takes care to the promise to be resolved. This
             // comes from chai-as-promise:
             // https://github.com/domenic/chai-as-promised/blob/master/README.md
             expect(instance.balanceOf(accounts[0]))
                 .to.eventually.be.a.bignumber.equal(totalSupply);

             // This is same unit test as the one above, but not using
             // chai-as-promise (less readable for me)
             //  expect(await instance.balanceOf(accounts[0]))
             //      .to.be.bignumber.equal(totalSupply);
           })

    });