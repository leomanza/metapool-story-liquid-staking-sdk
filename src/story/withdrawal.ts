import { Contract, ethers } from "ethers";
import { WithdrawalConfig, ContractInstance } from "./types";

export class Withdrawal implements ContractInstance {
  contract: Contract;
  address: string;

  constructor(config: WithdrawalConfig) {
    this.address = config.address;
    this.contract = new Contract(
      config.address,
      [
        "function requestWithdrawal(uint256 amount) external",
        "function completeWithdrawal(uint256 requestId) external",
        "function getWithdrawalRequest(uint256 requestId) external view returns (address, uint256, uint256, bool)",
        "function getWithdrawalRequestsByUser(address user) external view returns (uint256[])",
      ],
      config.signer || config.provider
    );
  }

  async requestWithdrawal(amount: bigint): Promise<ethers.ContractTransactionResponse> {
    return this.contract.requestWithdrawal(amount);
  }

  async completeWithdrawal(requestId: bigint): Promise<ethers.ContractTransactionResponse> {
    return this.contract.completeWithdrawal(requestId);
  }

  async getWithdrawalRequest(requestId: bigint): Promise<{
    user: string;
    amount: bigint;
    timestamp: bigint;
    completed: boolean;
  }> {
    return this.contract.getWithdrawalRequest(requestId);
  }

  async getWithdrawalRequestsByUser(user: string): Promise<bigint[]> {
    return this.contract.getWithdrawalRequestsByUser(user);
  }
} 