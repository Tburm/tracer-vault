import hardhat, { ethers, web3 } from "hardhat";

const want = web3.utils.toChecksumAddress("0x6c4768d4b3acD4a3fF01F179FaffDaEbe084D12D");

const vaultParams = {
  vaultName: "Tracer ETH 3x Skew Vault",
  vaultSymbol: "Vault-TCR-ETH3-Skew",
  delay: 21600,
};

const strategyParams = {
  want,
  unirouter: ""
};

const contractNames = {
  vault: "TracerVault",
  strategy: "StrategySkewFarming",
};

async function main() {
  if (
    Object.values(vaultParams).some(v => v === undefined) ||
    Object.values(strategyParams).some(v => v === undefined) ||
    Object.values(contractNames).some(v => v === undefined)
  ) {
    console.error("one of config values undefined");
    return;
  }

  await hardhat.run("compile");

  const Vault = await ethers.getContractFactory(contractNames.vault);
  const Strategy = await ethers.getContractFactory(contractNames.strategy);

  const [deployer] = await ethers.getSigners();

  console.log("Deploying:", vaultParams.mooName);

  const predictedAddresses = await predictAddresses({ creator: deployer.address });

  const vaultConstructorArguments = [
    predictedAddresses.strategy, // TODO: fix this address
    vaultParams.vaultName,
    vaultParams.vaultSymbol,
    vaultParams.delay,
  ];
  const vault = await Vault.deploy(...vaultConstructorArguments);
  await vault.deployed();

  console.log("Vault deployed");
  console.log("Deploying strategy");

  const strategyConstructorArguments = [
    strategyParams.want,
    vault.address,
    strategyParams.unirouter,
    deployer.address,
    deployer.address,
    deployer.address
  ];
  console.log("Arguments: ", strategyConstructorArguments)
  const strategy = await Strategy.deploy(...strategyConstructorArguments);
  await strategy.deployed();

  // add this info to PR
  console.log();
  // console.log("Vault:", vault.address);
  console.log("Strategy:", strategy.address);
  console.log("Want:", strategyParams.want);
  console.log("PoolId:", strategyParams.poolId);

  console.log();
  console.log("Running post deployment");

  const verifyContractsPromises: Promise<any>[] = [];
  if (shouldVerifyOnEtherscan) {
    // skip await as this is a long running operation, and you can do other stuff to prepare vault while this finishes
    verifyContractsPromises.push(
      // verifyContract(vault.address, vaultConstructorArguments),
      verifyContract(strategy.address, strategyConstructorArguments)
    );
  }
  await setPendingRewardsFunctionName(strategy, strategyParams.pendingRewardsFunctionName);
  // await setCorrectCallFee(strategy, hardhat.network.name as BeefyChain);
  console.log();

  await Promise.all(verifyContractsPromises);

  if (hardhat.network.name === "bsc") {
    // await registerSubsidy(vault.address, deployer);
    await registerSubsidy(strategy.address, deployer);
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
