pragma solidity ^0.8.0;

contract TestGas {
    uint a;
    uint b;
    uint c;

    function test$1() public { a ++; }

    function test$2() public {
        a ++;
        b ++;
    }

    function test$3() public {
        a ++;
        b ++;
        c ++;
    }

    function test$4() public {
        c = a + b;
    }

    function test$5() public {
        test$4();
        b = a + c;
    }
}