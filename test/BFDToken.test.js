const Token = artifacts.require('BFDToken');

// Now let's set up chai. All the test setup is extracted from the openzeppeli
// test-helpers repo:
// https://github.com/OpenZeppelin/openzeppelin-test-helpers/blob/master/src/setup.js

var chai = require('chai');
// Big Number is a javascript class that allows you to do arithmetic operations
// such as sub(), add(), multiply()...etc
const BN = web3.utils.BN;  // Big Number that we want to use
const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const expect = chai.expect;

contract('Token Test', async (accounts) => {
  const [deployerAccount, recipient, anotherAccount] = accounts;

  // In order to understand what "it" does , for me is easy to readit like
  // "it should..."
  it('all tokens should be in my account', async () => {
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


  it('is possible to send tokens between accounts', async () => {
    const sendTokens = 1;
    let instance = await Token.deployed();
    let totalSupply = await instance.totalSupply();

    expect(instance.balanceOf(deployerAccount))
        .to.eventually.be.a.bignumber.equal(totalSupply);

    // We can say here I want this promised to be fullfilled, we don't have to
    // use try catches.
    expect(instance.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;

    expect(instance.balanceOf(deployerAccount))
        .to.eventually.be.a.bignumber.equal(
            totalSupply.sub(new BN(sendTokens)));

    expect(instance.balanceOf(recipient))
        .to.eventually.be.a.bignumber.equal(new BN(sendTokens));
  })

  it('is not possible to send more tokens than the available in total',
     async () => {
       let instance = await Token.deployed();
       let balanceOfDeployer = await instance.balanceOf(deployerAccount);

       expect(instance.transfer(recipient, new BN(balanceOfDeployer + 1)))
           .to.eventually.be.rejected;

       // TODO this is failing and it shouldn't
       expect(instance.balanceOf(deployerAccount))
           .to.eventually.be.a.bignumber.equal(balanceOfDeployer);
     })
});