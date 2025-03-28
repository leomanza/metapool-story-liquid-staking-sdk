"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakedIP = void 0;
const ethers_1 = require("ethers");
class StakedIP {
    constructor(config) {
        this.address = config.address;
        this.contract = new ethers_1.Contract(config.address, [
            "function stake(uint256 amount) external",
            "function unstake(uint256 amount) external",
            "function balanceOf(address account) external view returns (uint256)",
            "function totalSupply() external view returns (uint256)",
            "function rewardsOf(address account) external view returns (uint256)",
            "function claimRewards() external",
        ], config.signer || config.provider);
    }
    async stake(amount) {
        return this.contract.stake(amount);
    }
    async unstake(amount) {
        return this.contract.unstake(amount);
    }
    async balanceOf(account) {
        return this.contract.balanceOf(account);
    }
    async totalSupply() {
        return this.contract.totalSupply();
    }
    async rewardsOf(account) {
        return this.contract.rewardsOf(account);
    }
    async claimRewards() {
        return this.contract.claimRewards();
    }
}
exports.StakedIP = StakedIP;
