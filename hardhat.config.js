require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");


const { privateKey } = require('./secrets.json');


module.exports = {
  networks: {
    tTARA: {
      url: "https://rpc.testnet.taraxa.io",
      chainId: 842,
      accounts: [privateKey]
    },
    sepolia: {
      url: "https://eth-sepolia-public.unifra.io",
      chainId: 11155111,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
  },
  etherscan: {
    apiKey: {
      sepolia: "JU87Q3CYXCBERPAGB2MDE9D67JZPVV27S7",
      tTARA: "abc",
    },
    customChains: [
      {
        network: "tTARA",
        chainId: 842,
        urls: {
          apiURL: "https://explorer.testnet.taraxa.io/api",
          browserURL: "https://explorer.testnet.taraxa.io",
        },
      },
    ],

  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200  
      }
    }
  }
};