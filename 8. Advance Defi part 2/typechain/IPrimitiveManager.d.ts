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
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IPrimitiveManagerInterface extends ethers.utils.Interface {
  functions: {
    "allocate(bytes32,address,address,uint256,uint256,bool,uint256)": FunctionFragment;
    "allocateCallback(uint256,uint256,bytes)": FunctionFragment;
    "create(address,address,uint128,uint32,uint32,uint32,uint256,uint256)": FunctionFragment;
    "createCallback(uint256,uint256,bytes)": FunctionFragment;
    "remove(bytes32,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allocate",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish,
      BigNumberish,
      boolean,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "allocateCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allocate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "allocateCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;

  events: {
    "Allocate(address,address,bytes32,uint256,uint256,uint256,bool)": EventFragment;
    "Create(address,address,bytes32,uint128,uint32,uint32,uint32)": EventFragment;
    "Remove(address,address,bytes32,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Allocate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Create"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Remove"): EventFragment;
}

export type AllocateEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, boolean] & {
    payer: string;
    engine: string;
    poolId: string;
    delLiquidity: BigNumber;
    delRisky: BigNumber;
    delStable: BigNumber;
    fromMargin: boolean;
  }
>;

export type CreateEvent = TypedEvent<
  [string, string, string, BigNumber, number, number, number] & {
    payer: string;
    engine: string;
    poolId: string;
    strike: BigNumber;
    sigma: number;
    maturity: number;
    gamma: number;
  }
>;

export type RemoveEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber] & {
    payer: string;
    engine: string;
    poolId: string;
    delLiquidity: BigNumber;
    delRisky: BigNumber;
    delStable: BigNumber;
  }
>;

export class IPrimitiveManager extends BaseContract {
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

  interface: IPrimitiveManagerInterface;

  functions: {
    allocate(
      poolId: BytesLike,
      risky: string,
      stable: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      fromMargin: boolean,
      minLiquidityOut: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    allocateCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    create(
      risky: string,
      stable: string,
      strike: BigNumberish,
      sigma: BigNumberish,
      maturity: BigNumberish,
      gamma: BigNumberish,
      riskyPerLp: BigNumberish,
      delLiquidity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remove(
      poolId: BytesLike,
      delLiquidity: BigNumberish,
      minRiskyOut: BigNumberish,
      minStableOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allocate(
    poolId: BytesLike,
    risky: string,
    stable: string,
    delRisky: BigNumberish,
    delStable: BigNumberish,
    fromMargin: boolean,
    minLiquidityOut: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  allocateCallback(
    delRisky: BigNumberish,
    delStable: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  create(
    risky: string,
    stable: string,
    strike: BigNumberish,
    sigma: BigNumberish,
    maturity: BigNumberish,
    gamma: BigNumberish,
    riskyPerLp: BigNumberish,
    delLiquidity: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createCallback(
    delRisky: BigNumberish,
    delStable: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remove(
    poolId: BytesLike,
    delLiquidity: BigNumberish,
    minRiskyOut: BigNumberish,
    minStableOut: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allocate(
      poolId: BytesLike,
      risky: string,
      stable: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      fromMargin: boolean,
      minLiquidityOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allocateCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    create(
      risky: string,
      stable: string,
      strike: BigNumberish,
      sigma: BigNumberish,
      maturity: BigNumberish,
      gamma: BigNumberish,
      riskyPerLp: BigNumberish,
      delLiquidity: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        poolId: string;
        delRisky: BigNumber;
        delStable: BigNumber;
      }
    >;

    createCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    remove(
      poolId: BytesLike,
      delLiquidity: BigNumberish,
      minRiskyOut: BigNumberish,
      minStableOut: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { delRisky: BigNumber; delStable: BigNumber }
    >;
  };

  filters: {
    "Allocate(address,address,bytes32,uint256,uint256,uint256,bool)"(
      payer?: string | null,
      engine?: string | null,
      poolId?: BytesLike | null,
      delLiquidity?: null,
      delRisky?: null,
      delStable?: null,
      fromMargin?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber, boolean],
      {
        payer: string;
        engine: string;
        poolId: string;
        delLiquidity: BigNumber;
        delRisky: BigNumber;
        delStable: BigNumber;
        fromMargin: boolean;
      }
    >;

    Allocate(
      payer?: string | null,
      engine?: string | null,
      poolId?: BytesLike | null,
      delLiquidity?: null,
      delRisky?: null,
      delStable?: null,
      fromMargin?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber, boolean],
      {
        payer: string;
        engine: string;
        poolId: string;
        delLiquidity: BigNumber;
        delRisky: BigNumber;
        delStable: BigNumber;
        fromMargin: boolean;
      }
    >;

    "Create(address,address,bytes32,uint128,uint32,uint32,uint32)"(
      payer?: string | null,
      engine?: string | null,
      poolId?: BytesLike | null,
      strike?: null,
      sigma?: null,
      maturity?: null,
      gamma?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, number, number, number],
      {
        payer: string;
        engine: string;
        poolId: string;
        strike: BigNumber;
        sigma: number;
        maturity: number;
        gamma: number;
      }
    >;

    Create(
      payer?: string | null,
      engine?: string | null,
      poolId?: BytesLike | null,
      strike?: null,
      sigma?: null,
      maturity?: null,
      gamma?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, number, number, number],
      {
        payer: string;
        engine: string;
        poolId: string;
        strike: BigNumber;
        sigma: number;
        maturity: number;
        gamma: number;
      }
    >;

    "Remove(address,address,bytes32,uint256,uint256,uint256)"(
      payer?: string | null,
      engine?: string | null,
      poolId?: BytesLike | null,
      delLiquidity?: null,
      delRisky?: null,
      delStable?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        payer: string;
        engine: string;
        poolId: string;
        delLiquidity: BigNumber;
        delRisky: BigNumber;
        delStable: BigNumber;
      }
    >;

    Remove(
      payer?: string | null,
      engine?: string | null,
      poolId?: BytesLike | null,
      delLiquidity?: null,
      delRisky?: null,
      delStable?: null
    ): TypedEventFilter<
      [string, string, string, BigNumber, BigNumber, BigNumber],
      {
        payer: string;
        engine: string;
        poolId: string;
        delLiquidity: BigNumber;
        delRisky: BigNumber;
        delStable: BigNumber;
      }
    >;
  };

  estimateGas: {
    allocate(
      poolId: BytesLike,
      risky: string,
      stable: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      fromMargin: boolean,
      minLiquidityOut: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    allocateCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    create(
      risky: string,
      stable: string,
      strike: BigNumberish,
      sigma: BigNumberish,
      maturity: BigNumberish,
      gamma: BigNumberish,
      riskyPerLp: BigNumberish,
      delLiquidity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remove(
      poolId: BytesLike,
      delLiquidity: BigNumberish,
      minRiskyOut: BigNumberish,
      minStableOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allocate(
      poolId: BytesLike,
      risky: string,
      stable: string,
      delRisky: BigNumberish,
      delStable: BigNumberish,
      fromMargin: boolean,
      minLiquidityOut: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    allocateCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    create(
      risky: string,
      stable: string,
      strike: BigNumberish,
      sigma: BigNumberish,
      maturity: BigNumberish,
      gamma: BigNumberish,
      riskyPerLp: BigNumberish,
      delLiquidity: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remove(
      poolId: BytesLike,
      delLiquidity: BigNumberish,
      minRiskyOut: BigNumberish,
      minStableOut: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
