import { ethers } from "ethers";

function getEthereum() {
    // @ts-ignore
    const ethereum = window.ethereum;
    if (!ethereum) { throw new Error("No ethereum provider found!"); }
    return ethereum;
}

function checkAccounts(method) {
    return async function () {
        const ethereum = getEthereum();
        const accounts = await ethereum.request({method}) as string[];
        return accounts && accounts.length;
    }
}

const hasAccounts = checkAccounts("eth_accounts");
const requestAccounts = checkAccounts("eth_requestAccounts");

async function run() {
    if (!await hasAccounts() && !await requestAccounts()) { throw new Error("No accounts found!");}
    const contract = new ethers.Contract(
        "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512", // Hardcoded~
        [
            "function hello() public pure returns (string)",
        ],
        new ethers.providers.Web3Provider(getEthereum())
    )
    document.body.innerHTML = await contract.hello();
}

run();