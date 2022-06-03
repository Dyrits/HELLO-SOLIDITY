// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint32 counter;

    event CounterInc(uint32 counter);

    function count() public returns (uint32) {
        counter ++;
        console.log("Counter:", counter);
        emit CounterInc(counter);
        return counter;
    }

    function getCounter() public view returns (uint32) {
        return counter;
    }
}