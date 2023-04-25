/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPrimitiveFactory,
  IPrimitiveFactoryInterface,
} from "../IPrimitiveFactory";

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
        name: "risky",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "stable",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "engine",
        type: "address",
      },
    ],
    name: "DeployEngine",
    type: "event",
  },
  {
    inputs: [],
    name: "MIN_LIQUIDITY_FACTOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "args",
    outputs: [
      {
        internalType: "address",
        name: "factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "risky",
        type: "address",
      },
      {
        internalType: "address",
        name: "stable",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "scaleFactorRisky",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "scaleFactorStable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minLiquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "risky",
        type: "address",
      },
      {
        internalType: "address",
        name: "stable",
        type: "address",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "engine",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "risky",
        type: "address",
      },
      {
        internalType: "address",
        name: "stable",
        type: "address",
      },
    ],
    name: "getEngine",
    outputs: [
      {
        internalType: "address",
        name: "engine",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IPrimitiveFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IPrimitiveFactoryInterface {
    return new utils.Interface(_abi) as IPrimitiveFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPrimitiveFactory {
    return new Contract(address, _abi, signerOrProvider) as IPrimitiveFactory;
  }
}