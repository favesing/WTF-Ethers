// 导入ethers包
import { ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();
console.log(`env: ${process.env.ALCHEMY_MAINNET_URL}`);
// playcode免费版不能安装ethers，用这条命令，需要从网络上import包（把上面这行注释掉）
// import { ethers } from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.2.3/ethers.js";

// 利用ethers默认的Provider连接以太坊网络
// const provider = new ethers.getDefaultProvider();
const ALCHEMY_MAINNET_URL = process.env.ALCHEMY_MAINNET_URL;
const ALCHEMY_SEPOLIA_URL = process.env.ALCHEMY_SEPOLIA_URL;
let provider = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL)

const INFURA_MAINNET_URL = process.env.INFURA_MAINNET_URL;
const INFURA_SEPOLIA_URL = process.env.INFURA_SEPOLIA_URL;
//provider = new ethers.JsonRpcProvider(INFURA_MAINNET_URL);

const main = async () => {
    let blockNumber = await provider.getBlockNumber();
    console.log(`block number: ${blockNumber}`);
    // 查询vitalik的ETH余额
    const balance = await provider.getBalance(`vitalik.eth`);
    // 将余额输出在console
    console.log(`ETH Balance of vitalik: ${ethers.formatEther(balance)} ETH`);
}
main();