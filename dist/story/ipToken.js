"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPToken = void 0;
const ethers_1 = require("ethers");
class IPToken {
    constructor(config) {
        this.address = config.address;
        this.contract = new ethers_1.Contract(config.address, [
            "function balanceOf(address account) external view returns (uint256)",
            "function totalSupply() external view returns (uint256)",
            "function allowance(address owner, address spender) external view returns (uint256)",
            "function approve(address spender, uint256 amount) external returns (bool)",
            "function transfer(address to, uint256 amount) external returns (bool)",
            "function transferFrom(address from, address to, uint256 amount) external returns (bool)",
        ], config.signer || config.provider);
    }
    async balanceOf(account) {
        return this.contract.balanceOf(account);
    }
    async totalSupply() {
        return this.contract.totalSupply();
    }
    async allowance(owner, spender) {
        return this.contract.allowance(owner, spender);
    }
    async approve(spender, amount) {
        return this.contract.approve(spender, amount);
    }
    async transfer(to, amount) {
        return this.contract.transfer(to, amount);
    }
    async transferFrom(from, to, amount) {
        return this.contract.transferFrom(from, to, amount);
    }
}
exports.IPToken = IPToken;
