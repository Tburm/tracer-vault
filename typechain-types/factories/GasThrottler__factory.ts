/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GasThrottler, GasThrottlerInterface } from "../GasThrottler";

const _abi = [
  {
    inputs: [],
    name: "gasprice",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "shouldGasThrottle",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080546001600160a81b03191674a43509661141f254f54d9a326e8ec851a0b953070117905534801561003757600080fd5b5060bc806100466000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80636ec232d31460375780639f8b5da114606b575b600080fd5b600054604e9061010090046001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60005460779060ff1681565b6040519015158152602001606256fea26469706673582212203344d28ea3f2611ac0d09ad596c4e4dfb1ffa3b7ee76a74efed512497c25c3f564736f6c63430008070033";

type GasThrottlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GasThrottlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GasThrottler__factory extends ContractFactory {
  constructor(...args: GasThrottlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GasThrottler> {
    return super.deploy(overrides || {}) as Promise<GasThrottler>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GasThrottler {
    return super.attach(address) as GasThrottler;
  }
  connect(signer: Signer): GasThrottler__factory {
    return super.connect(signer) as GasThrottler__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GasThrottlerInterface {
    return new utils.Interface(_abi) as GasThrottlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GasThrottler {
    return new Contract(address, _abi, signerOrProvider) as GasThrottler;
  }
}