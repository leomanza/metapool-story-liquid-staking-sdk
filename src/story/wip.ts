import { Contract, ethers } from "ethers";
import { WIPConfig, ContractInstance } from "./types";

export class WIP implements ContractInstance {
  contract: Contract;
  address: string;

  constructor(config: WIPConfig) {
    this.address = config.address;
    this.contract = new Contract(
      config.address,
      [
        "function mint(address to, uint256 amount) external",
        "function burn(address from, uint256 amount) external",
        "function balanceOf(address account) external view returns (uint256)",
        "function totalSupply() external view returns (uint256)",
        "function allowance(address owner, address spender) external view returns (uint256)",
        "function approve(address spender, uint256 amount) external returns (bool)",
        "function transfer(address to, uint256 amount) external returns (bool)",
        "function transferFrom(address from, address to, uint256 amount) external returns (bool)",
      ],
      config.signer || config.provider
    );
  }

  async mint(to: string, amount: bigint): Promise<ethers.ContractTransactionResponse> {
    return this.contract.mint(to, amount);
  }

  async burn(from: string, amount: bigint): Promise<ethers.ContractTransactionResponse> {
    return this.contract.burn(from, amount);
  }

  async balanceOf(account: string): Promise<bigint> {
    return this.contract.balanceOf(account);
  }

  async totalSupply(): Promise<bigint> {
    return this.contract.totalSupply();
  }

  async allowance(owner: string, spender: string): Promise<bigint> {
    return this.contract.allowance(owner, spender);
  }

  async approve(spender: string, amount: bigint): Promise<ethers.ContractTransactionResponse> {
    return this.contract.approve(spender, amount);
  }

  async transfer(to: string, amount: bigint): Promise<ethers.ContractTransactionResponse> {
    return this.contract.transfer(to, amount);
  }

  async transferFrom(from: string, to: string, amount: bigint): Promise<ethers.ContractTransactionResponse> {
    return this.contract.transferFrom(from, to, amount);
  }
} 