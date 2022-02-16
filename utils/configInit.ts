import dotenv from "dotenv";
dotenv.config();

import { BigNumber, ethers } from "ethers";
import { HardhatNetworkAccountUserConfig } from "hardhat/src/types/config";

export const startingEtherPerAccount = ethers.utils.parseUnits(BigNumber.from(1_000_000_000).toString(), "ether");

export const getPKs = () => {
  let deployerAccount;

  // PKs without `0x` prefix
  if (process.env.DEPLOYER_PK) deployerAccount = process.env.DEPLOYER_PK;

  const accounts = [deployerAccount].filter(pk => !!pk) as string[];
  return accounts;
};

export const buildHardhatNetworkAccounts = (accounts: string[]) => {
  
  const hardhatAccounts = accounts.map(pk => {
    // hardhat network wants 0x prefix in front of PK
    const accountConfig: HardhatNetworkAccountUserConfig = {
      privateKey: pk,
      balance: startingEtherPerAccount.toString(),
    };
    return accountConfig;
  });
  return hardhatAccounts;
};
