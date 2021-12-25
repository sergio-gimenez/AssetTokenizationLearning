var BFDToken = artifacts.require("BFDToken.sol");

// The deployer is the handler to get access to the blockchain.
module.exports = async function(deployer){
    // await keyword is used when we expect async behaviour
    await deployer.deploy(BFDToken, 1000000);
}