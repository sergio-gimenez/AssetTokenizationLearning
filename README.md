# AssetTokenizationLearning

Project to learn how to tokenize assets. This projected is intended to learn how to:

💰 Tokenization of any Assets as fungible Tokens (ERC20)

🏦 Creation of Bonus Programs, Vouchers, etc.

💲 Creation of a new crypto currency

🧾 Creation of a Payment-layer on top of Ethereum

This project is an assignment from the [Ethereum Blockchain Developer Bootcamp With Solidity (2021)](https://www.udemy.com/course/blockchain-developer)


## Project Inizialization

```source
npm install -g truffle
```

**Note:**

I am using a distro based on Ubuntu 20.04 For some reason for me was a pain to install `truffle`. `npm` was requiring sudo permissions to install packages and throwing errors all the time. I did the following steps to make it work:

* [Completely uninstall node from the system](https://stackoverflow.com/questions/32426601/how-can-i-completely-uninstall-nodejs-npm-and-node-in-ubuntu) (this link was the only that truly completely removed node and npm from the system)
* Install `node` **using [`nvm`](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-20-04/)**. I installed the last LTS version of node.


```source
truffle unbox react
```