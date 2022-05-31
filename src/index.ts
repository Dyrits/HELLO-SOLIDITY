import { ethers } from "ethers";

function getEthereumProxy() {
    // @ts-ignore
    const proxy = window.ethereum;
    if (!proxy) { throw new Error("No ethereum provider found!"); }
    return proxy;
}

function requestEthereumProxy(method) {
    return async function () {
        const proxy = getEthereumProxy();
        const accounts = await proxy.request({method}) as string[];
        return accounts && accounts.length;
    }
}

const hasAccounts = requestEthereumProxy("eth_accounts");
const requestAccounts = requestEthereumProxy("eth_requestAccounts");

async function run() {
    if (!await hasAccounts() && !await requestAccounts()) { throw new Error("No accounts found!");}
    const contract = new ethers.Contract(
        process.env.CONTRACT_ADDRESS,
        [
            "function count() public",
            "function getCounter() public view returns (uint256)"
        ],
        new ethers.providers.Web3Provider(getEthereumProxy()).getSigner()
    );
    console.info(contract);
    const counter = document.createElement("div");
    async function setCounter() {
        counter.innerText = await contract.getCounter();
    }
    await setCounter();
    document.body.appendChild(counter);
    const button = document.createElement("button");
    button.innerText = "Count";
    button.onclick = async () => {
        await contract.count();
        await setCounter();
    }
    document.body.appendChild(button);
}

run();