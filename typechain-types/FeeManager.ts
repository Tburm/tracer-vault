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

export interface FeeManagerInterface extends utils.Interface {
  functions: {
    "MAX_CALL_FEE()": FunctionFragment;
    "MAX_FEE()": FunctionFragment;
    "STRATEGIST_FEE()": FunctionFragment;
    "WITHDRAWAL_FEE_CAP()": FunctionFragment;
    "WITHDRAWAL_MAX()": FunctionFragment;
    "beefyFee()": FunctionFragment;
    "beefyFeeRecipient()": FunctionFragment;
    "beforeDeposit()": FunctionFragment;
    "callFee()": FunctionFragment;
    "keeper()": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setBeefyFeeRecipient(address)": FunctionFragment;
    "setCallFee(uint256)": FunctionFragment;
    "setKeeper(address)": FunctionFragment;
    "setStrategist(address)": FunctionFragment;
    "setUnirouter(address)": FunctionFragment;
    "setVault(address)": FunctionFragment;
    "setWithdrawalFee(uint256)": FunctionFragment;
    "strategist()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unirouter()": FunctionFragment;
    "vault()": FunctionFragment;
    "withdrawalFee()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_CALL_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "STRATEGIST_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WITHDRAWAL_FEE_CAP",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WITHDRAWAL_MAX",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "beefyFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "beefyFeeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beforeDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "callFee", values?: undefined): string;
  encodeFunctionData(functionFragment: "keeper", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setBeefyFeeRecipient",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setCallFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setKeeper", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setStrategist",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUnirouter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setVault", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setWithdrawalFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "strategist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unirouter", values?: undefined): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdrawalFee",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_CALL_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "STRATEGIST_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WITHDRAWAL_FEE_CAP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WITHDRAWAL_MAX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "beefyFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "beefyFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beforeDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "callFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keeper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBeefyFeeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCallFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setKeeper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setStrategist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUnirouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setVault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWithdrawalFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "strategist", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unirouter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawalFee",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "Unpaused(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface FeeManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FeeManagerInterface;

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
    MAX_CALL_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    STRATEGIST_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    WITHDRAWAL_FEE_CAP(overrides?: CallOverrides): Promise<[BigNumber]>;

    WITHDRAWAL_MAX(overrides?: CallOverrides): Promise<[BigNumber]>;

    beefyFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    beefyFeeRecipient(overrides?: CallOverrides): Promise<[string]>;

    beforeDeposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    callFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    keeper(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setBeefyFeeRecipient(
      _beefyFeeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setCallFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKeeper(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStrategist(
      _strategist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUnirouter(
      _unirouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWithdrawalFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    strategist(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unirouter(overrides?: CallOverrides): Promise<[string]>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    withdrawalFee(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  MAX_CALL_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  STRATEGIST_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  WITHDRAWAL_FEE_CAP(overrides?: CallOverrides): Promise<BigNumber>;

  WITHDRAWAL_MAX(overrides?: CallOverrides): Promise<BigNumber>;

  beefyFee(overrides?: CallOverrides): Promise<BigNumber>;

  beefyFeeRecipient(overrides?: CallOverrides): Promise<string>;

  beforeDeposit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callFee(overrides?: CallOverrides): Promise<BigNumber>;

  keeper(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setBeefyFeeRecipient(
    _beefyFeeRecipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setCallFee(
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKeeper(
    _keeper: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStrategist(
    _strategist: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUnirouter(
    _unirouter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVault(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWithdrawalFee(
    _fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  strategist(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unirouter(overrides?: CallOverrides): Promise<string>;

  vault(overrides?: CallOverrides): Promise<string>;

  withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    MAX_CALL_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    STRATEGIST_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    WITHDRAWAL_FEE_CAP(overrides?: CallOverrides): Promise<BigNumber>;

    WITHDRAWAL_MAX(overrides?: CallOverrides): Promise<BigNumber>;

    beefyFee(overrides?: CallOverrides): Promise<BigNumber>;

    beefyFeeRecipient(overrides?: CallOverrides): Promise<string>;

    beforeDeposit(overrides?: CallOverrides): Promise<void>;

    callFee(overrides?: CallOverrides): Promise<BigNumber>;

    keeper(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setBeefyFeeRecipient(
      _beefyFeeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setCallFee(_fee: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setKeeper(_keeper: string, overrides?: CallOverrides): Promise<void>;

    setStrategist(
      _strategist: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setUnirouter(_unirouter: string, overrides?: CallOverrides): Promise<void>;

    setVault(_vault: string, overrides?: CallOverrides): Promise<void>;

    setWithdrawalFee(
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    strategist(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unirouter(overrides?: CallOverrides): Promise<string>;

    vault(overrides?: CallOverrides): Promise<string>;

    withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    MAX_CALL_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    STRATEGIST_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    WITHDRAWAL_FEE_CAP(overrides?: CallOverrides): Promise<BigNumber>;

    WITHDRAWAL_MAX(overrides?: CallOverrides): Promise<BigNumber>;

    beefyFee(overrides?: CallOverrides): Promise<BigNumber>;

    beefyFeeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    beforeDeposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    callFee(overrides?: CallOverrides): Promise<BigNumber>;

    keeper(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setBeefyFeeRecipient(
      _beefyFeeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setCallFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKeeper(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStrategist(
      _strategist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUnirouter(
      _unirouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWithdrawalFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    strategist(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unirouter(overrides?: CallOverrides): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawalFee(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_CALL_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STRATEGIST_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WITHDRAWAL_FEE_CAP(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WITHDRAWAL_MAX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beefyFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beefyFeeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    beforeDeposit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    callFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setBeefyFeeRecipient(
      _beefyFeeRecipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setCallFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKeeper(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStrategist(
      _strategist: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUnirouter(
      _unirouter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVault(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWithdrawalFee(
      _fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    strategist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unirouter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawalFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
