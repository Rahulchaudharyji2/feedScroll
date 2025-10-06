async function main() {
  const SocialFeed = await ethers.getContractFactory("SocialFeed");
  const socialFeed = await SocialFeed.deploy();
  await socialFeed.deployed();
  console.log("SocialFeed deployed to:", socialFeed.address);
}
main();