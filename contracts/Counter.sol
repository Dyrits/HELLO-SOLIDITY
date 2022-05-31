// SPDX-Licence-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint32 counter;

    function count() public returns (uint) {
        counter ++;
        console.log("Counter:", counter);
        return counter;
    }

    function getCounter() public view returns (uint32) {
        return counter;
    }
}