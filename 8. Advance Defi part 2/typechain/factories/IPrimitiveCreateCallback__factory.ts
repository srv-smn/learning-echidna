/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPrimitiveCreateCallback,
  IPrimitiveCreateCallbackInterface,
} from "../IPrimitiveCreateCallback";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "delRisky",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "delStable",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "createCallback",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPrimitiveCreateCallback__factory {
  static readonly abi = _abi;
  static createInterface(): IPrimitiveCreateCallbackInterface {
    return new utils.Interface(_abi) as IPrimitiveCreateCallbackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPrimitiveCreateCallback {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPrimitiveCreateCallback;
  }
}
