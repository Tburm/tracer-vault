/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type CommitStruct = {
  amount: BigNumberish;
  commitType: BigNumberish;
  created: BigNumberish;
  owner: string;
};

export type CommitStructOutput = [BigNumber, number, number, string] & {
  amount: BigNumber;
  commitType: number;
  created: number;
  owner: string;
};

export interface IPoolCommitterInterface extends utils.Interface {
  functions: {
    "commit(uint8,uint256)": FunctionFragment;
    "executeAllCommitments()": FunctionFragment;
    "executeCommitment((uint256,uint8,uint40,address))": FunctionFragment;
    "getCommit(uint128)": FunctionFragment;
    "setMaxCommitQueueLength(uint128)": FunctionFragment;
    "setMinimumCommitSize(uint128)": FunctionFragment;
    "setQuoteAndPool(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "commit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "executeAllCommitments",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "executeCommitment",
    values: [CommitStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getCommit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMaxCommitQueueLength",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinimumCommitSize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setQuoteAndPool",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "commit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeAllCommitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeCommitment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCommit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMaxCommitQueueLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinimumCommitSize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setQuoteAndPool",
    data: BytesLike
  ): Result;

  events: {
    "CreateCommit(uint128,uint256,uint8)": EventFragment;
    "ExecuteCommit(uint128)": EventFragment;
    "FailedCommitExecution(uint128)": EventFragment;
    "RemoveCommit(uint128,uint256,uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateCommit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecuteCommit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FailedCommitExecution"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveCommit"): EventFragment;
}

export type CreateCommitEvent = TypedEvent<
  [BigNumber, BigNumber, number],
  { commitID: BigNumber; amount: BigNumber; commitType: number }
>;

export type CreateCommitEventFilter = TypedEventFilter<CreateCommitEvent>;

export type ExecuteCommitEvent = TypedEvent<
  [BigNumber],
  { commitID: BigNumber }
>;

export type ExecuteCommitEventFilter = TypedEventFilter<ExecuteCommitEvent>;

export type FailedCommitExecutionEvent = TypedEvent<
  [BigNumber],
  { commitID: BigNumber }
>;

export type FailedCommitExecutionEventFilter =
  TypedEventFilter<FailedCommitExecutionEvent>;

export type RemoveCommitEvent = TypedEvent<
  [BigNumber, BigNumber, number],
  { commitID: BigNumber; amount: BigNumber; commitType: number }
>;

export type RemoveCommitEventFilter = TypedEventFilter<RemoveCommitEvent>;

export interface IPoolCommitter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPoolCommitterInterface;

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
    commit(
      commitType: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeAllCommitments(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    executeCommitment(
      _commit: CommitStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCommit(
      _commitID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[CommitStructOutput]>;

    setMaxCommitQueueLength(
      _maximumCommitQueueLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setMinimumCommitSize(
      _minimumCommitSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setQuoteAndPool(
      quoteToken: string,
      leveragedPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  commit(
    commitType: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeAllCommitments(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  executeCommitment(
    _commit: CommitStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCommit(
    _commitID: BigNumberish,
    overrides?: CallOverrides
  ): Promise<CommitStructOutput>;

  setMaxCommitQueueLength(
    _maximumCommitQueueLength: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setMinimumCommitSize(
    _minimumCommitSize: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setQuoteAndPool(
    quoteToken: string,
    leveragedPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    commit(
      commitType: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    executeAllCommitments(overrides?: CallOverrides): Promise<void>;

    executeCommitment(
      _commit: CommitStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getCommit(
      _commitID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<CommitStructOutput>;

    setMaxCommitQueueLength(
      _maximumCommitQueueLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumCommitSize(
      _minimumCommitSize: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setQuoteAndPool(
      quoteToken: string,
      leveragedPool: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "CreateCommit(uint128,uint256,uint8)"(
      commitID?: BigNumberish | null,
      amount?: BigNumberish | null,
      commitType?: BigNumberish | null
    ): CreateCommitEventFilter;
    CreateCommit(
      commitID?: BigNumberish | null,
      amount?: BigNumberish | null,
      commitType?: BigNumberish | null
    ): CreateCommitEventFilter;

    "ExecuteCommit(uint128)"(commitID?: null): ExecuteCommitEventFilter;
    ExecuteCommit(commitID?: null): ExecuteCommitEventFilter;

    "FailedCommitExecution(uint128)"(
      commitID?: null
    ): FailedCommitExecutionEventFilter;
    FailedCommitExecution(commitID?: null): FailedCommitExecutionEventFilter;

    "RemoveCommit(uint128,uint256,uint8)"(
      commitID?: BigNumberish | null,
      amount?: BigNumberish | null,
      commitType?: BigNumberish | null
    ): RemoveCommitEventFilter;
    RemoveCommit(
      commitID?: BigNumberish | null,
      amount?: BigNumberish | null,
      commitType?: BigNumberish | null
    ): RemoveCommitEventFilter;
  };

  estimateGas: {
    commit(
      commitType: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeAllCommitments(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    executeCommitment(
      _commit: CommitStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCommit(
      _commitID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMaxCommitQueueLength(
      _maximumCommitQueueLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setMinimumCommitSize(
      _minimumCommitSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setQuoteAndPool(
      quoteToken: string,
      leveragedPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    commit(
      commitType: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeAllCommitments(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    executeCommitment(
      _commit: CommitStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCommit(
      _commitID: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setMaxCommitQueueLength(
      _maximumCommitQueueLength: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumCommitSize(
      _minimumCommitSize: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setQuoteAndPool(
      quoteToken: string,
      leveragedPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
