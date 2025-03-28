import { Contract, ethers } from "ethers";
import { WIPConfig, ContractInstance } from "./types";
export declare class WIP implements ContractInstance {
    contract: Contract;
    address: string;
    constructor(config: WIPConfig);
    mint(to: string, amount: bigint): Promise<ethers.ContractTransactionResponse>;
    burn(from: string, amount: bigint): Promise<ethers.ContractTransactionResponse>;
    balanceOf(account: string): Promise<bigint>;
    totalSupply(): Promise<bigint>;
    allowance(owner: string, spender: string): Promise<bigint>;
    approve(spender: string, amount: bigint): Promise<ethers.ContractTransactionResponse>;
    transfer(to: string, amount: bigint): Promise<ethers.ContractTransactionResponse>;
    transferFrom(from: string, to: string, amount: bigint): Promise<ethers.ContractTransactionResponse>;
}
