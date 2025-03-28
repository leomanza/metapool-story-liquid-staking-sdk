import { Contract, ethers } from "ethers";
import { WithdrawalConfig, ContractInstance } from "./types";
export declare class Withdrawal implements ContractInstance {
    contract: Contract;
    address: string;
    constructor(config: WithdrawalConfig);
    requestWithdrawal(amount: bigint): Promise<ethers.ContractTransactionResponse>;
    completeWithdrawal(requestId: bigint): Promise<ethers.ContractTransactionResponse>;
    getWithdrawalRequest(requestId: bigint): Promise<{
        user: string;
        amount: bigint;
        timestamp: bigint;
        completed: boolean;
    }>;
    getWithdrawalRequestsByUser(user: string): Promise<bigint[]>;
}
