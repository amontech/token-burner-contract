const TokenBurner = artifacts.require("TokenBurner");

module.exports = function(deployer) {
  deployer.deploy(TokenBurner);
};
