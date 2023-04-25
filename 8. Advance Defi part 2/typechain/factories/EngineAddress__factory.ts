/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { EngineAddress, EngineAddressInterface } from "../EngineAddress";

const _abi = [
  {
    inputs: [],
    name: "EngineNotDeployedError",
    type: "error",
  },
];

const _bytecode =
  "0x602d6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea164736f6c6343000806000a";

export class EngineAddress__factory extends ContractFactory {
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
  ): Promise<EngineAddress> {
    return super.deploy(overrides || {}) as Promise<EngineAddress>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EngineAddress {
    return super.attach(address) as EngineAddress;
  }
  connect(signer: Signer): EngineAddress__factory {
    return super.connect(signer) as EngineAddress__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EngineAddressInterface {
    return new utils.Interface(_abi) as EngineAddressInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EngineAddress {
    return new Contract(address, _abi, signerOrProvider) as EngineAddress;
  }
}
