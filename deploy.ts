import { ethers } from "hardhat";

async function main() {
  const FHELendingPlatform = await ethers.getContractFactory("FHELendingPlatform");
  const lendingPlatform = await FHELendingPlatform.deploy();
  
  console.log(`FHELendingPlatform deployed to: ${await lendingPlatform.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
