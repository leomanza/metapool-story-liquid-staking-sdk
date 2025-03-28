"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RewardsManager = void 0;
const ethers_1 = require("ethers");
class RewardsManager {
    constructor(config) {
        this.address = config.address;
        this.contract = new ethers_1.Contract(config.address, [
            "function distributeRewards(uint256 amount) external",
            "function getRewardRate() external view returns (uint256)",
            "function getTotalRewards() external view returns (uint256)",
            "function getRewardsPerToken() external view returns (uint256)",
        ], config.signer || config.provider);
    }
    async distributeRewards(amount) {
        return this.contract.distributeRewards(amount);
    }
    async getRewardRate() {
        return this.contract.getRewardRate();
    }
    async getTotalRewards() {
        return this.contract.getTotalRewards();
    }
    async getRewardsPerToken() {
        return this.contract.getRewardsPerToken();
    }
}
exports.RewardsManager = RewardsManager;
