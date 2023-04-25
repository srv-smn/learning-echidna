/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TransferHelper,
  TransferHelperInterface,
} from "../TransferHelper";

const _abi = [
  {
    inputs: [],
    name: "ApproveError",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferError",
    type: "error",
  },
];

const _bytecode =
  "0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c6343000806000a";

export class TransferHelper__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TransferHelper> {
    return super.deploy(overrides || {}) as Promise<TransferHelper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TransferHelper {
    return super.attach(address) as TransferHelper;
  }
  connect(signer: Signer): TransferHelper__factory {
    return super.connect(signer) as TransferHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransferHelperInterface {
    return new utils.Interface(_abi) as TransferHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransferHelper {
    return new Contract(address, _abi, signerOrProvider) as TransferHelper;
  }
}