require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/kkdVMN_8J1O37RLURGHNf",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};