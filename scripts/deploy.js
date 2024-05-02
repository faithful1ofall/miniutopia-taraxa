const hre = require("hardhat");

async function main() {
  const NFTMiniUtopiaToken = await hre.ethers.getContractFactory("NFTMiniUtopiaToken");
  const nFTMiniUtopiaToken = await NFTMiniUtopiaToken.deploy();

  await nFTMiniUtopiaToken.deployed();

  console.log(
    `MiniUtopia Token deployed to ${nFTMiniUtopiaToken.address}`
  );


  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nFTMarketplace = await NFTMarketplace.deploy(nFTMiniUtopiaToken.address);

  await nFTMarketplace.deployed();

  console.log("NFTMarketplace deployed to:", nFTMarketplace.address);

  await hre.run("verify:verify", {
    address: `${nFTMiniUtopiaToken.address}`,
    constructorArguments: []
  });

  await hre.run("verify:verify", {
    address: nFTMarketplace.address,
    constructorArguments: [nFTMiniUtopiaToken.address]
  });

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
