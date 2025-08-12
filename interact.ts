import { ethers, fhevm } from "hardhat";

async function main() {
  const lendingPlatform = await ethers.getContractAt(
    "FHELendingPlatform",
    "YOUR_DEPLOYED_ADDRESS"
  );
  
  // Example: Add a token
  const encryptedRate = await fhevm.createEncryptedUint32(500); // 5% APR
  await lendingPlatform.addToken("TOKEN_ADDRESS", encryptedRate);
  
  console.log("Token added successfully");
}

main();
