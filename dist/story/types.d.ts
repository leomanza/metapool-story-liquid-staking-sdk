import { Contract } from "ethers";
export interface ContractInstance {
    contract: Contract;
    address: string;
}
export interface StakedIPConfig {
    address: string;
    provider: any;
    signer?: any;
}
export interface WithdrawalConfig {
    address: string;
    provider: any;
    signer?: any;
}
export interface RewardsManagerConfig {
    address: string;
    provider: any;
    signer?: any;
}
export interface WIPConfig {
    address: string;
    provider: any;
    signer?: any;
}
export interface IPTokenConfig {
    address: string;
    provider: any;
    signer?: any;
}
