"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Withdrawal = void 0;
const ethers_1 = require("ethers");
class Withdrawal {
    constructor(config) {
        this.address = config.address;
        this.contract = new ethers_1.Contract(config.address, [
            "function requestWithdrawal(uint256 amount) external",
            "function completeWithdrawal(uint256 requestId) external",
            "function getWithdrawalRequest(uint256 requestId) external view returns (address, uint256, uint256, bool)",
            "function getWithdrawalRequestsByUser(address user) external view returns (uint256[])",
        ], config.signer || config.provider);
    }
    async requestWithdrawal(amount) {
        return this.contract.requestWithdrawal(amount);
    }
    async completeWithdrawal(requestId) {
        return this.contract.completeWithdrawal(requestId);
    }
    async getWithdrawalRequest(requestId) {
        return this.contract.getWithdrawalRequest(requestId);
    }
    async getWithdrawalRequestsByUser(user) {
        return this.contract.getWithdrawalRequestsByUser(user);
    }
}
exports.Withdrawal = Withdrawal;
