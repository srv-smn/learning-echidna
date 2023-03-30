pragma solidity ^0.5.0;

import "./mintable.sol";

/// @dev Run the template with
///      ```
///      solc-select use 0.5.0
///      echidna test.sol --contract TestToken
///      ```
contract TestToken is MintableToken {
    address echidna = msg.sender;

    // TODO: update the constructor
    constructor() public MintableToken(1000) {
        owner = echidna;
    }

    function echidna_test_balance() public view returns (bool) {
        // TODO: add the property
        return balances[msg.sender] <= 10000;
    }
}

/*
    Create a scenario, where echidna (tx.origin) becomes the owner of the contract at construction, and totalMintable is set to 10,000. Recall that Echidna needs a constructor without argument.
    Add a property to check if echidna can mint more than 10,000 tokens.
    Once Echidna finds the bug, fix the issue, and re-try your property with Echidna.
*/