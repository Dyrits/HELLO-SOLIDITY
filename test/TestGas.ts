import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("TestGas.sol --", function () {
    it("-- [Undefined].", async function () {
        const TestGas = await ethers.getContractFactory("TestGas");
        const contract = await TestGas.deploy();
        await contract.deployed();
        for (let iteration = 0; iteration < 10; iteration++) {
            await contract.test$1();
            await contract.test$2();
            await contract.test$3();
            await contract.test$4();
            await contract.test$5();
        }
    });
});
