const { ethers } = require("hardhat")

async function main() {
  // Deploy NFT contract
  const KickStarter = await ethers.getContractFactory("KickStarter")
  console.log("Deploying KickStarter contract ...")
  const crowdfund = await KickStarter.deploy()
  await crowdfund.deployed()

  console.log("NFT Contract deployed to: ", crowdfund.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
