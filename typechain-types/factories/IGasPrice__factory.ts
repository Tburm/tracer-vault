/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGasPrice, IGasPriceInterface } from "../IGasPrice";

const _abi = [
  {
    inputs: [],
    name: "maxGasPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IGasPrice__factory {
  static readonly abi = _abi;
  static createInterface(): IGasPriceInterface {
    return new utils.Interface(_abi) as IGasPriceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGasPrice {
    return new Contract(address, _abi, signerOrProvider) as IGasPrice;
  }
}