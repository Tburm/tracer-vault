/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface GasThrottlerInterface extends utils.Interface {
  functions: {
    "gasprice()": FunctionFragment;
    "shouldGasThrottle()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "gasprice", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "shouldGasThrottle",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "gasprice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shouldGasThrottle",
    data: BytesLike
  ): Result;

  events: {};
}

export interface GasThrottler extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GasThrottlerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    gasprice(overrides?: CallOverrides): Promise<[string]>;

    shouldGasThrottle(overrides?: CallOverrides): Promise<[boolean]>;
  };

  gasprice(overrides?: CallOverrides): Promise<string>;

  shouldGasThrottle(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    gasprice(overrides?: CallOverrides): Promise<string>;

    shouldGasThrottle(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    gasprice(overrides?: CallOverrides): Promise<BigNumber>;

    shouldGasThrottle(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    gasprice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shouldGasThrottle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
