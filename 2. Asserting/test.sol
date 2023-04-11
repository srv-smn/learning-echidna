pragma solidity ^0.5.0;

import "./token.sol";

/// @dev Run the template with
///      ```
///      solc-select use 0.5.0
///      echidna test.sol --contract TestToken --test-mode assertion
///      ```
contract TestToken is Token {
    function transfer(address to, uint256 value) public {
        // TODO: include `assert(condition)` statements that
        // detect a breaking invariant on a transfer.
        // Hint: you may use the following to wrap the original function.
        uint256 oldBalanceFrom = balances[msg.sender];
        uint256 oldBalanceTo = balances[to];

        super.transfer(to, value);

        assert(balances[msg.sender] <= oldBalanceFrom);
        assert(balances[to] >= oldBalanceTo);
    }
}