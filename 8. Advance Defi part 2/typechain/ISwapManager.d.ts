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

interface ISwapManagerInterface extends ethers.utils.Interface {
  functions: {
    "swap((address,address,address,bytes32,bool,uint256,uint256,bool,bool,uint256))": FunctionFragment;
    "swapCallback(uint256,uint256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "swap",
    values: [
      {
        recipient: string;
        risky: string;
        stable: string;
        poolId: BytesLike;
        riskyForStable: boolean;
        deltaIn: BigNumberish;
        deltaOut: BigNumberish;
        fromMargin: boolean;
        toMargin: boolean;
        deadline: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapCallback",
    data: BytesLike
  ): Result;

  events: {
    "Swap(address,address,address,bytes32,bool,uint256,uint256,bool,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export type SwapEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    boolean,
    BigNumber,
    BigNumber,
    boolean,
    boolean
  ] & {
    payer: string;
    recipient: string;
    engine: string;
    poolId: string;
    riskyForStable: boolean;
    deltaIn: BigNumber;
    deltaOut: BigNumber;
    fromMargin: boolean;
    toMargin: boolean;
  }
>;

export class ISwapManager extends BaseContract {
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

  interface: ISwapManagerInterface;

  functions: {
    swap(
      params: {
        recipient: string;
        risky: string;
        stable: string;
        poolId: BytesLike;
        riskyForStable: boolean;
        deltaIn: BigNumberish;
        deltaOut: BigNumberish;
        fromMargin: boolean;
        toMargin: boolean;
        deadline: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  swap(
    params: {
      recipient: string;
      risky: string;
      stable: string;
      poolId: BytesLike;
      riskyForStable: boolean;
      deltaIn: BigNumberish;
      deltaOut: BigNumberish;
      fromMargin: boolean;
      toMargin: boolean;
      deadline: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapCallback(
    delRisky: BigNumberish,
    delStable: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    swap(
      params: {
        recipient: string;
        risky: string;
        stable: string;
        poolId: BytesLike;
        riskyForStable: boolean;
        deltaIn: BigNumberish;
        deltaOut: BigNumberish;
        fromMargin: boolean;
        toMargin: boolean;
        deadline: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    swapCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Swap(address,address,address,bytes32,bool,uint256,uint256,bool,bool)"(
      payer?: string | null,
      recipient?: null,
      engine?: string | null,
      poolId?: BytesLike | null,
      riskyForStable?: null,
      deltaIn?: null,
      deltaOut?: null,
      fromMargin?: null,
      toMargin?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        string,
        boolean,
        BigNumber,
        BigNumber,
        boolean,
        boolean
      ],
      {
        payer: string;
        recipient: string;
        engine: string;
        poolId: string;
        riskyForStable: boolean;
        deltaIn: BigNumber;
        deltaOut: BigNumber;
        fromMargin: boolean;
        toMargin: boolean;
      }
    >;

    Swap(
      payer?: string | null,
      recipient?: null,
      engine?: string | null,
      poolId?: BytesLike | null,
      riskyForStable?: null,
      deltaIn?: null,
      deltaOut?: null,
      fromMargin?: null,
      toMargin?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        string,
        boolean,
        BigNumber,
        BigNumber,
        boolean,
        boolean
      ],
      {
        payer: string;
        recipient: string;
        engine: string;
        poolId: string;
        riskyForStable: boolean;
        deltaIn: BigNumber;
        deltaOut: BigNumber;
        fromMargin: boolean;
        toMargin: boolean;
      }
    >;
  };

  estimateGas: {
    swap(
      params: {
        recipient: string;
        risky: string;
        stable: string;
        poolId: BytesLike;
        riskyForStable: boolean;
        deltaIn: BigNumberish;
        deltaOut: BigNumberish;
        fromMargin: boolean;
        toMargin: boolean;
        deadline: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    swap(
      params: {
        recipient: string;
        risky: string;
        stable: string;
        poolId: BytesLike;
        riskyForStable: boolean;
        deltaIn: BigNumberish;
        deltaOut: BigNumberish;
        fromMargin: boolean;
        toMargin: boolean;
        deadline: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapCallback(
      delRisky: BigNumberish,
      delStable: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
