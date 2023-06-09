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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IPositionDescriptorInterface extends ethers.utils.Interface {
  functions: {
    "getMetadata(address,uint256)": FunctionFragment;
    "positionRenderer()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getMetadata",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "positionRenderer",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "positionRenderer",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPositionDescriptor extends BaseContract {
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

  interface: IPositionDescriptorInterface;

  functions: {
    getMetadata(
      engine: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    positionRenderer(overrides?: CallOverrides): Promise<[string]>;
  };

  getMetadata(
    engine: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  positionRenderer(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    getMetadata(
      engine: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    positionRenderer(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    getMetadata(
      engine: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    positionRenderer(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getMetadata(
      engine: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    positionRenderer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
