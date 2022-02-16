/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ILeveragedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILeveragedPool__factory>;
    getContractFactory(
      name: "IOracleWrapper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracleWrapper__factory>;
    getContractFactory(
      name: "IPoolCommitter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolCommitter__factory>;
    getContractFactory(
      name: "IPoolToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolToken__factory>;
    getContractFactory(
      name: "IStrategy",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IStrategy__factory>;
    getContractFactory(
      name: "StrategySkewFarming",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StrategySkewFarming__factory>;
    getContractFactory(
      name: "LeveragedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LeveragedPool__factory>;
    getContractFactory(
      name: "PoolSwapLibrary",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolSwapLibrary__factory>;
    getContractFactory(
      name: "FeeManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FeeManager__factory>;
    getContractFactory(
      name: "GasThrottler",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GasThrottler__factory>;
    getContractFactory(
      name: "IGasPrice",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGasPrice__factory>;
    getContractFactory(
      name: "StratManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StratManager__factory>;
    getContractFactory(
      name: "TracerVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TracerVault__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ILeveragedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILeveragedPool>;
    getContractAt(
      name: "IOracleWrapper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOracleWrapper>;
    getContractAt(
      name: "IPoolCommitter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolCommitter>;
    getContractAt(
      name: "IPoolToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolToken>;
    getContractAt(
      name: "IStrategy",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IStrategy>;
    getContractAt(
      name: "StrategySkewFarming",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StrategySkewFarming>;
    getContractAt(
      name: "LeveragedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LeveragedPool>;
    getContractAt(
      name: "PoolSwapLibrary",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolSwapLibrary>;
    getContractAt(
      name: "FeeManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FeeManager>;
    getContractAt(
      name: "GasThrottler",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GasThrottler>;
    getContractAt(
      name: "IGasPrice",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGasPrice>;
    getContractAt(
      name: "StratManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StratManager>;
    getContractAt(
      name: "TracerVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TracerVault>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}