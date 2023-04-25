/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC1155Permit, ERC1155PermitInterface } from "../ERC1155Permit";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidSigError",
    type: "error",
  },
  {
    inputs: [],
    name: "SigExpiredError",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
    ],
    name: "TransferBatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "TransferSingle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "URI",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    name: "balanceOfBatch",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040527f7bf72c3e57bc00556754c7454ead7d72d1c0e263909e7c643fbc0d1e0f3c3e74610120523480156200003757600080fd5b506040518060400160405280601081526020016f283934b6b4ba34bb32a6b0b730b3b2b960811b815250604051806040016040528060018152602001603160f81b815250604051806020016040528060008152506200009c816200012c60201b60201c565b50815160209283012081519183019190912060c082815260e08290524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8189018190528183019790975260608101959095526080808601939093523085830152805180860390920182529390920190925280519301929092209091526101005262000228565b80516200014190600290602084019062000145565b5050565b8280546200015390620001eb565b90600052602060002090601f016020900481019282620001775760008555620001c2565b82601f106200019257805160ff1916838001178555620001c2565b82800160010185558215620001c2579182015b82811115620001c2578251825591602001919060010190620001a5565b50620001d0929150620001d4565b5090565b5b80821115620001d05760008155600101620001d5565b600181811c908216806200020057607f821691505b602082108114156200022257634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516101005161012051611c4e6200027860003960006107b201526000610b8a01526000610bd901526000610bb401526000610b3801526000610b610152611c4e6000f3fe608060405234801561001057600080fd5b50600436106100c85760003560e01c80634e1273f411610081578063e985e9c51161005b578063e985e9c5146101a6578063f242432a146101e2578063f51cc7dd146101f557600080fd5b80634e1273f4146101535780637ecebe0014610173578063a22cb4651461019357600080fd5b80630e89341c116100b25780630e89341c146101165780632eb2c2d6146101365780633644e5151461014b57600080fd5b8062fdd58e146100cd57806301ffc9a7146100f3575b600080fd5b6100e06100db3660046117a4565b610208565b6040519081526020015b60405180910390f35b61010661010136600461189f565b6102b1565b60405190151581526020016100ea565b6101296101243660046118d9565b61034e565b6040516100ea9190611a5c565b6101496101443660046115f1565b6103e2565b005b6100e0610484565b6101666101613660046117ce565b610493565b6040516100ea9190611a1b565b6100e061018136600461159c565b60036020526000908152604090205481565b6101496101a136600461177a565b6105d1565b6101066101b43660046115be565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6101496101f0366004611715565b6106bc565b61014961020336600461169b565b610757565b60006001600160a01b03831661028b5760405162461bcd60e51b815260206004820152602b60248201527f455243313135353a2062616c616e636520717565727920666f7220746865207a60448201527f65726f206164647265737300000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152602081815260408083206001600160a01b03949094168352929052205490565b60006001600160e01b031982167fd9b67a2600000000000000000000000000000000000000000000000000000000148061031457506001600160e01b031982167f0e89341c00000000000000000000000000000000000000000000000000000000145b8061034857507f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03198316145b92915050565b60606002805461035d90611aab565b80601f016020809104026020016040519081016040528092919081815260200182805461038990611aab565b80156103d65780601f106103ab576101008083540402835291602001916103d6565b820191906000526020600020905b8154815290600101906020018083116103b957829003601f168201915b50505050509050919050565b6001600160a01b0385163314806103fe57506103fe85336101b4565b6104705760405162461bcd60e51b815260206004820152603260248201527f455243313135353a207472616e736665722063616c6c6572206973206e6f742060448201527f6f776e6572206e6f7220617070726f76656400000000000000000000000000006064820152608401610282565b61047d85858585856108c1565b5050505050565b600061048e610b34565b905090565b6060815183511461050c5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a206163636f756e747320616e6420696473206c656e67746860448201527f206d69736d6174636800000000000000000000000000000000000000000000006064820152608401610282565b6000835167ffffffffffffffff81111561052857610528611b70565b604051908082528060200260200182016040528015610551578160200160208202803683370190505b50905060005b84518110156105c95761059c85828151811061057557610575611b5a565b602002602001015185838151811061058f5761058f611b5a565b6020026020010151610208565b8282815181106105ae576105ae611b5a565b60209081029190910101526105c281611b13565b9050610557565b509392505050565b336001600160a01b03831614156106505760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2073657474696e6720617070726f76616c2073746174757360448201527f20666f722073656c6600000000000000000000000000000000000000000000006064820152608401610282565b3360008181526001602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b0385163314806106d857506106d885336101b4565b61074a5760405162461bcd60e51b815260206004820152602960248201527f455243313135353a2063616c6c6572206973206e6f74206f776e6572206e6f7260448201527f20617070726f76656400000000000000000000000000000000000000000000006064820152608401610282565b61047d8585858585610c2a565b83421115610791576040517f31c64a7300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001600160a01b0387811660008181526003602090815260408083205481517f00000000000000000000000000000000000000000000000000000000000000008185015280830195909552948b166060850152891515608085015260a084019490945260c08084018990528451808503909101815260e0909301909352815191909201209061081f82610dd1565b9050600061082f82878787610e3a565b9050896001600160a01b0316816001600160a01b03161461087c576040517f811945d000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108878a8a8a610e62565b6001600160a01b038a1660009081526003602052604081208054600192906108b0908490611a93565b909155505050505050505050505050565b81518351146109385760405162461bcd60e51b815260206004820152602860248201527f455243313135353a2069647320616e6420616d6f756e7473206c656e6774682060448201527f6d69736d617463680000000000000000000000000000000000000000000000006064820152608401610282565b6001600160a01b03841661099c5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608401610282565b3360005b8451811015610ac65760008582815181106109bd576109bd611b5a565b6020026020010151905060008583815181106109db576109db611b5a565b602090810291909101810151600084815280835260408082206001600160a01b038e168352909352919091205490915081811015610a6e5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b6064820152608401610282565b6000838152602081815260408083206001600160a01b038e8116855292528083208585039055908b16825281208054849290610aab908490611a93565b9250508190555050505080610abf90611b13565b90506109a0565b50846001600160a01b0316866001600160a01b0316826001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8787604051610b16929190611a2e565b60405180910390a4610b2c818787878787610ecf565b505050505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461415610b8357507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b90565b6001600160a01b038416610c8e5760405162461bcd60e51b815260206004820152602560248201527f455243313135353a207472616e7366657220746f20746865207a65726f206164604482015264647265737360d81b6064820152608401610282565b33610ca7818787610c9e88611084565b61047d88611084565b6000848152602081815260408083206001600160a01b038a16845290915290205483811015610d2b5760405162461bcd60e51b815260206004820152602a60248201527f455243313135353a20696e73756666696369656e742062616c616e636520666f60448201526939103a3930b739b332b960b11b6064820152608401610282565b6000858152602081815260408083206001600160a01b038b8116855292528083208785039055908816825281208054869290610d68908490611a93565b909155505060408051868152602081018690526001600160a01b03808916928a821692918616917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62910160405180910390a4610dc88288888888886110cf565b50505050505050565b6000610348610dde610b34565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610e4b878787876111da565b91509150610e58816112c7565b5095945050505050565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0384163b15610b2c5760405163bc197c8160e01b81526001600160a01b0385169063bc197c8190610f13908990899088908890889060040161197a565b602060405180830381600087803b158015610f2d57600080fd5b505af1925050508015610f5d575060408051601f3d908101601f19168201909252610f5a918101906118bc565b60015b61101357610f69611b86565b806308c379a01415610fa35750610f7e611ba1565b80610f895750610fa5565b8060405162461bcd60e51b81526004016102829190611a5c565b505b60405162461bcd60e51b815260206004820152603460248201527f455243313135353a207472616e7366657220746f206e6f6e204552433131353560448201527f526563656976657220696d706c656d656e7465720000000000000000000000006064820152608401610282565b6001600160e01b0319811663bc197c8160e01b14610dc85760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b6064820152608401610282565b604080516001808252818301909252606091600091906020808301908036833701905050905082816000815181106110be576110be611b5a565b602090810291909101015292915050565b6001600160a01b0384163b15610b2c5760405163f23a6e6160e01b81526001600160a01b0385169063f23a6e619061111390899089908890889088906004016119d8565b602060405180830381600087803b15801561112d57600080fd5b505af192505050801561115d575060408051601f3d908101601f1916820190925261115a918101906118bc565b60015b61116957610f69611b86565b6001600160e01b0319811663f23a6e6160e01b14610dc85760405162461bcd60e51b815260206004820152602860248201527f455243313135353a204552433131353552656365697665722072656a656374656044820152676420746f6b656e7360c01b6064820152608401610282565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561121157506000905060036112be565b8460ff16601b1415801561122957508460ff16601c14155b1561123a57506000905060046112be565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561128e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166112b7576000600192509250506112be565b9150600090505b94509492505050565b60008160048111156112db576112db611b44565b14156112e45750565b60018160048111156112f8576112f8611b44565b14156113465760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610282565b600281600481111561135a5761135a611b44565b14156113a85760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610282565b60038160048111156113bc576113bc611b44565b14156114155760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610282565b600481600481111561142957611429611b44565b14156114825760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610282565b50565b80356001600160a01b038116811461149c57600080fd5b919050565b600082601f8301126114b257600080fd5b813560206114bf82611a6f565b6040516114cc8282611ae6565b8381528281019150858301600585901b870184018810156114ec57600080fd5b60005b8581101561150b578135845292840192908401906001016114ef565b5090979650505050505050565b8035801515811461149c57600080fd5b600082601f83011261153957600080fd5b813567ffffffffffffffff81111561155357611553611b70565b60405161156a601f8301601f191660200182611ae6565b81815284602083860101111561157f57600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156115ae57600080fd5b6115b782611485565b9392505050565b600080604083850312156115d157600080fd5b6115da83611485565b91506115e860208401611485565b90509250929050565b600080600080600060a0868803121561160957600080fd5b61161286611485565b945061162060208701611485565b9350604086013567ffffffffffffffff8082111561163d57600080fd5b61164989838a016114a1565b9450606088013591508082111561165f57600080fd5b61166b89838a016114a1565b9350608088013591508082111561168157600080fd5b5061168e88828901611528565b9150509295509295909350565b600080600080600080600060e0888a0312156116b657600080fd5b6116bf88611485565b96506116cd60208901611485565b95506116db60408901611518565b945060608801359350608088013560ff811681146116f857600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080600080600060a0868803121561172d57600080fd5b61173686611485565b945061174460208701611485565b93506040860135925060608601359150608086013567ffffffffffffffff81111561176e57600080fd5b61168e88828901611528565b6000806040838503121561178d57600080fd5b61179683611485565b91506115e860208401611518565b600080604083850312156117b757600080fd5b6117c083611485565b946020939093013593505050565b600080604083850312156117e157600080fd5b823567ffffffffffffffff808211156117f957600080fd5b818501915085601f83011261180d57600080fd5b8135602061181a82611a6f565b6040516118278282611ae6565b8381528281019150858301600585901b870184018b101561184757600080fd5b600096505b848710156118715761185d81611485565b83526001969096019591830191830161184c565b509650508601359250508082111561188857600080fd5b50611895858286016114a1565b9150509250929050565b6000602082840312156118b157600080fd5b81356115b781611c2b565b6000602082840312156118ce57600080fd5b81516115b781611c2b565b6000602082840312156118eb57600080fd5b5035919050565b600081518084526020808501945080840160005b8381101561192257815187529582019590820190600101611906565b509495945050505050565b6000815180845260005b8181101561195357602081850181015186830182015201611937565b81811115611965576000602083870101525b50601f01601f19169290920160200192915050565b60006001600160a01b03808816835280871660208401525060a060408301526119a660a08301866118f2565b82810360608401526119b881866118f2565b905082810360808401526119cc818561192d565b98975050505050505050565b60006001600160a01b03808816835280871660208401525084604083015283606083015260a06080830152611a1060a083018461192d565b979650505050505050565b6020815260006115b760208301846118f2565b604081526000611a4160408301856118f2565b8281036020840152611a5381856118f2565b95945050505050565b6020815260006115b7602083018461192d565b600067ffffffffffffffff821115611a8957611a89611b70565b5060051b60200190565b60008219821115611aa657611aa6611b2e565b500190565b600181811c90821680611abf57607f821691505b60208210811415611ae057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8201601f1916810167ffffffffffffffff81118282101715611b0c57611b0c611b70565b6040525050565b6000600019821415611b2757611b27611b2e565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b600060033d1115610c275760046000803e5060005160e01c90565b600060443d1015611baf5790565b6040516003193d81016004833e81513d67ffffffffffffffff8160248401118184111715611bdf57505050505090565b8285019150815181811115611bf75750505050505090565b843d8701016020828501011115611c115750505050505090565b611c2060208286010187611ae6565b509095945050505050565b6001600160e01b03198116811461148257600080fdfea164736f6c6343000806000a";

export class ERC1155Permit__factory extends ContractFactory {
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
  ): Promise<ERC1155Permit> {
    return super.deploy(overrides || {}) as Promise<ERC1155Permit>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155Permit {
    return super.attach(address) as ERC1155Permit;
  }
  connect(signer: Signer): ERC1155Permit__factory {
    return super.connect(signer) as ERC1155Permit__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1155PermitInterface {
    return new utils.Interface(_abi) as ERC1155PermitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155Permit {
    return new Contract(address, _abi, signerOrProvider) as ERC1155Permit;
  }
}
