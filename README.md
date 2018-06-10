# AMN Token burner

Source code for token burner smart contract.


## Description

This smart contract is a simple contract created to burn tokens. 
It is very simple, has nothing implemented, therefore all the token sent to this address are lost, even for contract owner.

## Addresses

- *Mainnet*: [](https://etherscan.io/address/)
- *Kovan*: [](https://kovan.etherscan.io/address/)

## Dependencies versions
  - Truffle 4.0.6
  - OpenZeppelin 1.7.0
  - Solidity 0.4.19

## Test

`$ npm test`

## Flatten

This will replace imports in solidity to get only one file.
Useful for Etherscan code verification.

Saved in `./build/AMNTokenFlat.sol`

`$ npm run flatten`

## Deploy

`$ npm run deploy:network` network=[kovan,rinkeby,mainnet]

Artifacts are saved inside  `./build/contracts/`
