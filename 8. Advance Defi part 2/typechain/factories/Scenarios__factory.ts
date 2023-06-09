/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { Scenarios, ScenariosInterface } from "../Scenarios";

const _abi = [
  {
    inputs: [],
    name: "getCaller",
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
    inputs: [],
    name: "risky",
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
    inputs: [],
    name: "scenario",
    outputs: [
      {
        internalType: "enum Scenarios.Scenario",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stable",
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
];

export class Scenarios__factory {
  static readonly abi = _abi;
  static createInterface(): ScenariosInterface {
    return new utils.Interface(_abi) as ScenariosInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Scenarios {
    return new Contract(address, _abi, signerOrProvider) as Scenarios;
  }
}
