import { Contract, ethers } from "ethers";
import { RewardsManagerConfig, ContractInstance } from "./types";
export declare class RewardsManager implements ContractInstance {
    contract: Contract;
    address: string;
    constructor(config: RewardsManagerConfig);
    distributeRewards(amount: bigint): Promise<ethers.ContractTransactionResponse>;
    getRewardRate(): Promise<bigint>;
    getTotalRewards(): Promise<bigint>;
    getRewardsPerToken(): Promise<bigint>;
}
