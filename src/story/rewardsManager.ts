import { Contract, ethers } from "ethers";
import { RewardsManagerConfig, ContractInstance } from "./types";

export class RewardsManager implements ContractInstance {
  contract: Contract;
  address: string;

  constructor(config: RewardsManagerConfig) {
    this.address = config.address;
    this.contract = new Contract(
      config.address,
      [
        "function distributeRewards(uint256 amount) external",
        "function getRewardRate() external view returns (uint256)",
        "function getTotalRewards() external view returns (uint256)",
        "function getRewardsPerToken() external view returns (uint256)",
      ],
      config.signer || config.provider
    );
  }

  async distributeRewards(amount: bigint): Promise<ethers.ContractTransactionResponse> {
    return this.contract.distributeRewards(amount);
  }

  async getRewardRate(): Promise<bigint> {
    return this.contract.getRewardRate();
  }

  async getTotalRewards(): Promise<bigint> {
    return this.contract.getTotalRewards();
  }

  async getRewardsPerToken(): Promise<bigint> {
    return this.contract.getRewardsPerToken();
  }
} 