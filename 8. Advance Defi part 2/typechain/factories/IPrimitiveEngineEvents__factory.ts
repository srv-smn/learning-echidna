/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPrimitiveEngineEvents,
  IPrimitiveEngineEventsInterface,
} from "../IPrimitiveEngineEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delRisky",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delStable",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delLiquidity",
        type: "uint256",
      },
    ],
    name: "Allocate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "strike",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "sigma",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "maturity",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "gamma",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delRisky",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delStable",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delLiquidity",
        type: "uint256",
      },
    ],
    name: "Create",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delRisky",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delStable",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delRisky",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delStable",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delLiquidity",
        type: "uint256",
      },
    ],
    name: "Remove",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "riskyForStable",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deltaIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "deltaOut",
        type: "uint256",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
    ],
    name: "UpdateLastTimestamp",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delRisky",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delStable",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
];

export class IPrimitiveEngineEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IPrimitiveEngineEventsInterface {
    return new utils.Interface(_abi) as IPrimitiveEngineEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPrimitiveEngineEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPrimitiveEngineEvents;
  }
}
