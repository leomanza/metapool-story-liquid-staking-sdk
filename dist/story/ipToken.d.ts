import { Contract, ethers } from "ethers";
import { IPTokenConfig, ContractInstance } from "./types";
export declare class IPToken implements ContractInstance {
    contract: Contract;
    address: string;
    constructor(config: IPTokenConfig);
    balanceOf(account: string): Promise<bigint>;
    totalSupply(): Promise<bigint>;
    allowance(owner: string, spender: string): Promise<bigint>;
    approve(spender: string, amount: bigint): Promise<ethers.ContractTransactionResponse>;
    transfer(to: string, amount: bigint): Promise<ethers.ContractTransactionResponse>;
    transferFrom(from: string, to: string, amount: bigint): Promise<ethers.ContractTransactionResponse>;
}
