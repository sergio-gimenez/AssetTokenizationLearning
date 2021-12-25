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

Now let's save the openzeppelin-solidity project in our project folder.

```source
npm install --save @openzeppelin/contracts@v3.0.0
```

>We will use version `3.0.0.` because is the version that we are using in the [Ethereum Blockchain Developer Bootcamp With Solidity (2021)](https://www.udemy.com/course/blockchain-developer).

Note2:

I ended up using `npm install @openzeppelin/contracts` as sugested in the oppenzepelin repo.

## Rapid testing

Typing in the console `truffle develop` creates a development environment that allows you to interact with the blockchain.

If you get an `Error: error:0308010C:digital envelope routines::unsupported` execute the following command as a workaround:

```source
export NODE_OPTIONS=--openssl-legacy-provider
```

Then run again `truffle develop` and it should work.

### Compiling

Make sure `truffle-config.js` is using the correct version of the compiler.

To compile the contracts run inside the `truffle develop` console:

```source
truffle(develop)> migrate
```

## Add unit tests

We will use the `chai` assertion library to write unit tests.

```source
npm install --save chai chai-bn chai-as-promised
```

Configure the unit tests using chai as explained in comments in `test/BFDToken.test.js`.