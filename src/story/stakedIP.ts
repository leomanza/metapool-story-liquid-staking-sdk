import { Contract, ethers } from "ethers";
import { StakedIPConfig, ContractInstance } from "./types";

export class StakedIP implements ContractInstance {
  contract: Contract;
  address: string;

  constructor(config: StakedIPConfig) {
    this.address = config.address;
    this.contract = new Contract(
      config.address,
      [
        "function stake(uint256 amount) external",
        "function unstake(uint256 amount) external",
        "function balanceOf(address account) external view returns (uint256)",
        "function totalSupply() external view returns (uint256)",
        "function rewardsOf(address account) external view returns (uint256)",
        "function claimRewards() external",
      ],
      config.signer || config.provider
    );
  }

  async stake(amount: bigint): Promise<ethers.ContractTransactionResponse> {
    return this.contract.stake(amount);
  }

  async unstake(amount: bigint): Promise<ethers.ContractTransactionResponse> {
    return this.contract.unstake(amount);
  }

  async balanceOf(account: string): Promise<bigint> {
    return this.contract.balanceOf(account);
  }

  async totalSupply(): Promise<bigint> {
    return this.contract.totalSupply();
  }

  async rewardsOf(account: string): Promise<bigint> {
    return this.contract.rewardsOf(account);
  }

  async claimRewards(): Promise<ethers.ContractTransactionResponse> {
    return this.contract.claimRewards();
  }
} 