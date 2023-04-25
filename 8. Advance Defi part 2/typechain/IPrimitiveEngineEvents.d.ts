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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface IPrimitiveEngineEventsInterface extends ethers.utils.Interface {
  functions: {};

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

export class IPrimitiveEngineEvents extends BaseContract {
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

  interface: IPrimitiveEngineEventsInterface;

  functions: {};

  callStatic: {};

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

  estimateGas: {};

  populateTransaction: {};
}