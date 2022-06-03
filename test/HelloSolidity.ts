import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("HelloSolidity.sol / hello() --", function () {
    it("-- should say hello to Solidity.", async function () {
        const HelloSolidity = await ethers.getContractFactory("HelloSolidity");
        const contract = await HelloSolidity.deploy();
        await contract.deployed();
        expect(await contract.hello()).to.equal("Hello, Solidity!");
    });
});
