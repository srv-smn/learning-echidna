/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PrimitiveEngineInterface extends ethers.utils.Interface {
  functions: {
    "BUFFER()": FunctionFragment;
    "MIN_LIQUIDITY()": FunctionFragment;
    "PRECISION()": FunctionFragment;
    "allocate(bytes32,address,uint256,uint256,bool,bytes)": FunctionFragment;
    "calibrations(bytes32)": FunctionFragment;
    "create(uint128,uint32,uint32,uint32,uint256,uint256,bytes)": FunctionFragment;
    "deposit(address,uint256,uint256,bytes)": FunctionFragment;
    "factory()": FunctionFragment;
    "invariantOf(bytes32)": FunctionFragment;
    "liquidity(address,bytes32)": FunctionFragment;
    "margins(address)": FunctionFragment;
    "remove(bytes32,uint256)": FunctionFragment;
    "reserves(bytes32)": FunctionFragment;
    "risky()": FunctionFragment;
    "scaleFactorRisky()": FunctionFragment;
    "scaleFactorStable()": FunctionFragment;
    "stable()": FunctionFragment;
    "swap(address,bytes32,bool,uint256,uint256,bool,bool,bytes)": FunctionFragment;
    "updateLastTimestamp(bytes32)": FunctionFragment;
    "withdraw(address,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BUFFER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MIN_LIQUIDITY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "PRECISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "allocate",
    values: [BytesLike, string, BigNumberish, BigNumberish, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "calibrations",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "invariantOf",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidity",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "margins", values: [string]): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "reserves", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "risky", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "scaleFactorRisky",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "scaleFactorStable",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "stable", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      string,
      BytesLike,
      boolean,
      BigNumberish,
      BigNumberish,
      boolean,
      boolean,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateLastTimestamp",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "BUFFER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MIN_LIQUIDITY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "PRECISION", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allocate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calibrations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "invariantOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "liquidity", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "margins", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reserves", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "risky", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scaleFactorRisky",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scaleFactorStable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateLastTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Allocate(address,address,bytes32,uint256,uint256,uint256)": EventFragment;
    "Create(address,uint128,uint32,uint32,uint32,uint256,uint256,uint256)": EventFragment;
    "Deposit(address,address,uint256,uint256)": EventFragment;
    "Remove(address,bytes32,uint256,uint256,uint256)": EventFragment;
    "Swap(address,address,bytes32,bool,uint256,uint256)": EventFragment;
    "UpdateLastTimestamp(bytes32)": EventFragment;
    "Withdraw(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Allocate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Create"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Remove"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateLastTimestamp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type AllocateEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber] & {
    from: string;
    recipient: string;
    poolId: string;
    delRisky: BigNumber;
    delStable: BigNumber;
    delLiquidity: BigNumber;
  }
>;

export type CreateEvent = TypedEvent<
  [
    string,
    BigNumber,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    from: string;
    strike: BigNumber;
    sigma: number;
    maturity: number;
    gamma: number;
    delRisky: BigNumber;
    delStable: BigNumber;
    delLiquidity: BigNumber;
  }
>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    from: string;
    recipient: string;
    delRisky: BigNumber;
    delStable: BigNumber;
  }
>;

export type RemoveEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber] & {
    from: string;
    poolId: string;
    delRisky: BigNumber;
    delStable: BigNumber;
    delLiquidity: BigNumber;
  }
>;

export type SwapEvent = TypedEvent<
  [string, string, string, boolean, BigNumber, BigNumber] & {
    from: string;
    recipient: string;
    poolId: string;
    riskyForStable: boolean;
    deltaIn: BigNumber;
    deltaOut: BigNumber;
  }
>;

export type UpdateLastTimestampEvent = TypedEvent<
  [string] & { poolId: string }
>;

export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    from: string;
    recipient: string;
    delRisky: BigNumber;
    delStable: BigNumber;
  }
>;

export class PrimitiveEngine extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PrimitiveEngineInterface;

  functions: {
    BUFFER(overrides?: CallOverrides): Promise<[BigNumber]>;

    MIN_LIQUIDITY(overrides?: CallOverrides): Promise<[BigNumber]>;

    PRECISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    allocate(
      poolId: BytesLike,
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      fromMargin: boolean,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calibrations(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, number] & {
        strike: BigNumber;
        sigma: number;
        maturity: number;
        lastTimestamp: number;
        gamma: number;
      }
    >;

    create(
      strike: BigNumberish,
      sigma: BigNumberish,
      maturity: BigNumberish,
      gamma: BigNumberish,
      riskyPerLp: BigNumberish,
      delLiquidity: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    invariantOf(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { invariant: BigNumber }>;

    liquidity(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    margins(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        balanceRisky: BigNumber;
        balanceStable: BigNumber;
      }
    >;

    remove(
      poolId: BytesLike,
      delLiquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    reserves(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        reserveRisky: BigNumber;
        reserveStable: BigNumber;
        liquidity: BigNumber;
        blockTimestamp: number;
        cumulativeRisky: BigNumber;
        cumulativeStable: BigNumber;
        cumulativeLiquidity: BigNumber;
      }
    >;

    risky(overrides?: CallOverrides): Promise<[string]>;

    scaleFactorRisky(overrides?: CallOverrides): Promise<[BigNumber]>;

    scaleFactorStable(overrides?: CallOverrides): Promise<[BigNumber]>;

    stable(overrides?: CallOverrides): Promise<[string]>;

    swap(
      recipient: string,
      poolId: BytesLike,
      riskyForStable: boolean,
      deltaIn: BigNumberish,
      deltaOut: BigNumberish,
      fromMargin: boolean,
      toMargin: boolean,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateLastTimestamp(
      poolId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

  MIN_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

  PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

  allocate(
    poolId: BytesLike,
    recipient: string,
    delRisky: BigNumberish,
    delStable: BigNumberish,
    fromMargin: boolean,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calibrations(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, number, number] & {
      strike: BigNumber;
      sigma: number;
      maturity: number;
      lastTimestamp: number;
      gamma: number;
    }
  >;

  create(
    strike: BigNumberish,
    sigma: BigNumberish,
    maturity: BigNumberish,
    gamma: BigNumberish,
    riskyPerLp: BigNumberish,
    delLiquidity: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    recipient: string,
    delRisky: BigNumberish,
    delStable: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  invariantOf(poolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  liquidity(
    arg0: string,
    arg1: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  margins(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      balanceRisky: BigNumber;
      balanceStable: BigNumber;
    }
  >;

  remove(
    poolId: BytesLike,
    delLiquidity: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  reserves(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      BigNumber,
      BigNumber,
      BigNumber
    ] & {
      reserveRisky: BigNumber;
      reserveStable: BigNumber;
      liquidity: BigNumber;
      blockTimestamp: number;
      cumulativeRisky: BigNumber;
      cumulativeStable: BigNumber;
      cumulativeLiquidity: BigNumber;
    }
  >;

  risky(overrides?: CallOverrides): Promise<string>;

  scaleFactorRisky(overrides?: CallOverrides): Promise<BigNumber>;

  scaleFactorStable(overrides?: CallOverrides): Promise<BigNumber>;

  stable(overrides?: CallOverrides): Promise<string>;

  swap(
    recipient: string,
    poolId: BytesLike,
    riskyForStable: boolean,
    deltaIn: BigNumberish,
    deltaOut: BigNumberish,
    fromMargin: boolean,
    toMargin: boolean,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateLastTimestamp(
    poolId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    recipient: string,
    delRisky: BigNumberish,
    delStable: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    allocate(
      poolId: BytesLike,
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      fromMargin: boolean,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calibrations(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, number] & {
        strike: BigNumber;
        sigma: number;
        maturity: number;
        lastTimestamp: number;
        gamma: number;
      }
    >;

    create(
      strike: BigNumberish,
      sigma: BigNumberish,
      maturity: BigNumberish,
      gamma: BigNumberish,
      riskyPerLp: BigNumberish,
      delLiquidity: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        poolId: string;
        delRisky: BigNumber;
        delStable: BigNumber;
      }
    >;

    deposit(
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    invariantOf(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidity(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    margins(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        balanceRisky: BigNumber;
        balanceStable: BigNumber;
      }
    >;

    remove(
      poolId: BytesLike,
      delLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { delRisky: BigNumber; delStable: BigNumber }
    >;

    reserves(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        reserveRisky: BigNumber;
        reserveStable: BigNumber;
        liquidity: BigNumber;
        blockTimestamp: number;
        cumulativeRisky: BigNumber;
        cumulativeStable: BigNumber;
        cumulativeLiquidity: BigNumber;
      }
    >;

    risky(overrides?: CallOverrides): Promise<string>;

    scaleFactorRisky(overrides?: CallOverrides): Promise<BigNumber>;

    scaleFactorStable(overrides?: CallOverrides): Promise<BigNumber>;

    stable(overrides?: CallOverrides): Promise<string>;

    swap(
      recipient: string,
      poolId: BytesLike,
      riskyForStable: boolean,
      deltaIn: BigNumberish,
      deltaOut: BigNumberish,
      fromMargin: boolean,
      toMargin: boolean,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    updateLastTimestamp(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<number>;

    withdraw(
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Allocate(address,address,bytes32,uint256,uint256,uint256)"(
      from?: string | null,
      recipient?: string | null,
      poolId?: BytesLike | null,
      delRisky?: null,
      delStable?: null,
      delLiquidity?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        from: string;
        recipient: string;
        poolId: string;
        delRisky: BigNumber;
        delStable: BigNumber;
        delLiquidity: BigNumber;
      }
    >;

    Allocate(
      from?: string | null,
      recipient?: string | null,
      poolId?: BytesLike | null,
      delRisky?: null,
      delStable?: null,
      delLiquidity?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        from: string;
        recipient: string;
        poolId: string;
        delRisky: BigNumber;
        delStable: BigNumber;
        delLiquidity: BigNumber;
      }
    >;

    "Create(address,uint128,uint32,uint32,uint32,uint256,uint256,uint256)"(
      from?: string | null,
      strike?: null,
      sigma?: null,
      maturity?: BigNumberish | null,
      gamma?: BigNumberish | null,
      delRisky?: null,
      delStable?: null,
      delLiquidity?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
        from: string;
        strike: BigNumber;
        sigma: number;
        maturity: number;
        gamma: number;
        delRisky: BigNumber;
        delStable: BigNumber;
        delLiquidity: BigNumber;
      }
    >;

    Create(
      from?: string | null,
      strike?: null,
      sigma?: null,
      maturity?: BigNumberish | null,
      gamma?: BigNumberish | null,
      delRisky?: null,
      delStable?: null,
      delLiquidity?: null
    ): TypedEventFilter<
      [
        string,
        BigNumber,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber
      ],
      {
        from: string;
        strike: BigNumber;
        sigma: number;
        maturity: number;
        gamma: number;
        delRisky: BigNumber;
        delStable: BigNumber;
        delLiquidity: BigNumber;
      }
    >;

    "Deposit(address,address,uint256,uint256)"(
      from?: string | null,
      recipient?: string | null,
      delRisky?: null,
      delStable?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        from: string;
        recipient: string;
        delRisky: BigNumber;
        delStable: BigNumber;
      }
    >;

    Deposit(
      from?: string | null,
      recipient?: string | null,
      delRisky?: null,
      delStable?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        from: string;
        recipient: string;
        delRisky: BigNumber;
        delStable: BigNumber;
      }
    >;

    "Remove(address,bytes32,uint256,uint256,uint256)"(
      from?: string | null,
      poolId?: BytesLike | null,
      delRisky?: null,
      delStable?: null,
      delLiquidity?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        from: string;
        poolId: string;
        delRisky: BigNumber;
        delStable: BigNumber;
        delLiquidity: BigNumber;
      }
    >;

    Remove(
      from?: string | null,
      poolId?: BytesLike | null,
      delRisky?: null,
      delStable?: null,
      delLiquidity?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, BigNumber],
      {
        from: string;
        poolId: string;
        delRisky: BigNumber;
        delStable: BigNumber;
        delLiquidity: BigNumber;
      }
    >;

    "Swap(address,address,bytes32,bool,uint256,uint256)"(
      from?: string | null,
      recipient?: string | null,
      poolId?: BytesLike | null,
      riskyForStable?: null,
      deltaIn?: null,
      deltaOut?: null
    ): TypedEventFilter<
      [string, string, string, boolean, BigNumber, BigNumber],
      {
        from: string;
        recipient: string;
        poolId: string;
        riskyForStable: boolean;
        deltaIn: BigNumber;
        deltaOut: BigNumber;
      }
    >;

    Swap(
      from?: string | null,
      recipient?: string | null,
      poolId?: BytesLike | null,
      riskyForStable?: null,
      deltaIn?: null,
      deltaOut?: null
    ): TypedEventFilter<
      [string, string, string, boolean, BigNumber, BigNumber],
      {
        from: string;
        recipient: string;
        poolId: string;
        riskyForStable: boolean;
        deltaIn: BigNumber;
        deltaOut: BigNumber;
      }
    >;

    "UpdateLastTimestamp(bytes32)"(
      poolId?: BytesLike | null
    ): TypedEventFilter<[string], { poolId: string }>;

    UpdateLastTimestamp(
      poolId?: BytesLike | null
    ): TypedEventFilter<[string], { poolId: string }>;

    "Withdraw(address,address,uint256,uint256)"(
      from?: string | null,
      recipient?: string | null,
      delRisky?: null,
      delStable?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        from: string;
        recipient: string;
        delRisky: BigNumber;
        delStable: BigNumber;
      }
    >;

    Withdraw(
      from?: string | null,
      recipient?: string | null,
      delRisky?: null,
      delStable?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        from: string;
        recipient: string;
        delRisky: BigNumber;
        delStable: BigNumber;
      }
    >;
  };

  estimateGas: {
    BUFFER(overrides?: CallOverrides): Promise<BigNumber>;

    MIN_LIQUIDITY(overrides?: CallOverrides): Promise<BigNumber>;

    PRECISION(overrides?: CallOverrides): Promise<BigNumber>;

    allocate(
      poolId: BytesLike,
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      fromMargin: boolean,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calibrations(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    create(
      strike: BigNumberish,
      sigma: BigNumberish,
      maturity: BigNumberish,
      gamma: BigNumberish,
      riskyPerLp: BigNumberish,
      delLiquidity: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    invariantOf(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidity(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    margins(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    remove(
      poolId: BytesLike,
      delLiquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    reserves(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    risky(overrides?: CallOverrides): Promise<BigNumber>;

    scaleFactorRisky(overrides?: CallOverrides): Promise<BigNumber>;

    scaleFactorStable(overrides?: CallOverrides): Promise<BigNumber>;

    stable(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      recipient: string,
      poolId: BytesLike,
      riskyForStable: boolean,
      deltaIn: BigNumberish,
      deltaOut: BigNumberish,
      fromMargin: boolean,
      toMargin: boolean,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateLastTimestamp(
      poolId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BUFFER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MIN_LIQUIDITY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PRECISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allocate(
      poolId: BytesLike,
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      fromMargin: boolean,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calibrations(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    create(
      strike: BigNumberish,
      sigma: BigNumberish,
      maturity: BigNumberish,
      gamma: BigNumberish,
      riskyPerLp: BigNumberish,
      delLiquidity: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    invariantOf(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidity(
      arg0: string,
      arg1: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    margins(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remove(
      poolId: BytesLike,
      delLiquidity: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    reserves(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    risky(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scaleFactorRisky(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scaleFactorStable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swap(
      recipient: string,
      poolId: BytesLike,
      riskyForStable: boolean,
      deltaIn: BigNumberish,
      deltaOut: BigNumberish,
      fromMargin: boolean,
      toMargin: boolean,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateLastTimestamp(
      poolId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      recipient: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
