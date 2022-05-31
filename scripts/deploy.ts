import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { networkInterfaces } from "os";

// @ts-ignore
async function getContract(contractName) {
    const factory = await ethers.getContractFactory(contractName);
    const contract = await factory.deploy();
    await contract.deployed();
    return contract;
}

async function deploy(contractName) {
    return await getContract(contractName);
}

// @ts-ignore
async function sayHello(contract) {
    console.log(await contract.hello());
}

async function count(contract) {
    console.log(await contract.count());
    console.log("Counter:", await contract.getCounter());
}

// deploy("HelloSolidity").then(sayHello);
deploy("Counter").then(count);

