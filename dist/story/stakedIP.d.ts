import { Contract, ethers } from "ethers";
import { StakedIPConfig, ContractInstance } from "./types";
export declare class StakedIP implements ContractInstance {
    contract: Contract;
    address: string;
    constructor(config: StakedIPConfig);
    stake(amount: bigint): Promise<ethers.ContractTransactionResponse>;
    unstake(amount: bigint): Promise<ethers.ContractTransactionResponse>;
    balanceOf(account: string): Promise<bigint>;
    totalSupply(): Promise<bigint>;
    rewardsOf(account: string): Promise<bigint>;
    claimRewards(): Promise<ethers.ContractTransactionResponse>;
}
