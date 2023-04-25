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

interface IPrimitiveFactoryInterface extends ethers.utils.Interface {
  functions: {
    "MIN_LIQUIDITY_FACTOR()": FunctionFragment;
    "args()": FunctionFragment;
    "deploy(address,address)": FunctionFragment;
    "deployer()": FunctionFragment;
    "getEngine(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MIN_LIQUIDITY_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "args", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getEngine",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "MIN_LIQUIDITY_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "args", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getEngine", data: BytesLike): Result;

  events: {
    "DeployEngine(address,address,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DeployEngine"): EventFragment;
}

export type DeployEngineEvent = TypedEvent<
  [string, string, string, string] & {
    from: string;
    risky: string;
    stable: string;
    engine: string;
  }
>;

export class IPrimitiveFactory extends BaseContract {
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

  interface: IPrimitiveFactoryInterface;

  functions: {
    MIN_LIQUIDITY_FACTOR(overrides?: CallOverrides): Promise<[BigNumber]>;

    args(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber] & {
        factory: string;
        risky: string;
        stable: string;
        scaleFactorRisky: BigNumber;
        scaleFactorStable: BigNumber;
        minLiquidity: BigNumber;
      }
    >;

    deploy(
      risky: string,
      stable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployer(overrides?: CallOverrides): Promise<[string]>;

    getEngine(
      risky: string,
      stable: string,
      overrides?: CallOverrides
    ): Promise<[string] & { engine: string }>;
  };

  MIN_LIQUIDITY_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

  args(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber, BigNumber] & {
      factory: string;
      risky: string;
      stable: string;
      scaleFactorRisky: BigNumber;
      scaleFactorStable: BigNumber;
      minLiquidity: BigNumber;
    }
  >;

  deploy(
    risky: string,
    stable: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployer(overrides?: CallOverrides): Promise<string>;

  getEngine(
    risky: string,
    stable: string,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    MIN_LIQUIDITY_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    args(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber] & {
        factory: string;
        risky: string;
        stable: string;
        scaleFactorRisky: BigNumber;
        scaleFactorStable: BigNumber;
        minLiquidity: BigNumber;
      }
    >;

    deploy(
      risky: string,
      stable: string,
      overrides?: CallOverrides
    ): Promise<string>;

    deployer(overrides?: CallOverrides): Promise<string>;

    getEngine(
      risky: string,
      stable: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "DeployEngine(address,address,address,address)"(
      from?: string | null,
      risky?: string | null,
      stable?: string | null,
      engine?: null
    ): TypedEventFilter<
      [string, string, string, string],
      { from: string; risky: string; stable: string; engine: string }
    >;

    DeployEngine(
      from?: string | null,
      risky?: string | null,
      stable?: string | null,
      engine?: null
    ): TypedEventFilter<
      [string, string, string, string],
      { from: string; risky: string; stable: string; engine: string }
    >;
  };

  estimateGas: {
    MIN_LIQUIDITY_FACTOR(overrides?: CallOverrides): Promise<BigNumber>;

    args(overrides?: CallOverrides): Promise<BigNumber>;

    deploy(
      risky: string,
      stable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    getEngine(
      risky: string,
      stable: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MIN_LIQUIDITY_FACTOR(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    args(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deploy(
      risky: string,
      stable: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEngine(
      risky: string,
      stable: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
