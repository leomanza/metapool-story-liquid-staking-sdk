# Story Protocol Liquid Staking SDK

A TypeScript SDK for interacting with Story Protocol's liquid staking contracts.

## Installation

```bash
npm install story-liquid-staking-sdk
# or
yarn add story-liquid-staking-sdk
```

## Features

- Staking and unstaking IP tokens
- Managing withdrawal requests
- Tracking and claiming rewards
- Handling wrapped IP (WIP) token operations
- Type-safe contract interactions

## Usage

```typescript
import { StakedIP, Withdrawal, RewardsManager, WIP } from 'story-liquid-staking-sdk';
import { ethers } from 'ethers';

// Initialize provider and signer
const provider = new ethers.JsonRpcProvider('YOUR_RPC_URL');
const signer = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);

// Initialize contract instances
const stakedIP = new StakedIP({
  address: 'STAKED_IP_CONTRACT_ADDRESS',
  provider,
  signer
});

const withdrawal = new Withdrawal({
  address: 'WITHDRAWAL_CONTRACT_ADDRESS',
  provider,
  signer
});

const rewardsManager = new RewardsManager({
  address: 'REWARDS_MANAGER_CONTRACT_ADDRESS',
  provider,
  signer
});

const wip = new WIP({
  address: 'WIP_CONTRACT_ADDRESS',
  provider,
  signer
});

// Example: Stake tokens
async function stakeTokens(amount: bigint) {
  const tx = await stakedIP.stake(amount);
  await tx.wait();
  console.log('Staking successful!');
}

// Example: Request withdrawal
async function requestWithdrawal(amount: bigint) {
  const tx = await withdrawal.requestWithdrawal(amount);
  await tx.wait();
  console.log('Withdrawal requested!');
}

// Example: Check rewards
async function checkRewards(address: string) {
  const rewards = await stakedIP.rewardsOf(address);
  console.log('Rewards:', rewards.toString());
}

// Example: Transfer WIP tokens
async function transferWIP(to: string, amount: bigint) {
  const tx = await wip.transfer(to, amount);
  await tx.wait();
  console.log('Transfer successful!');
}
```

## API Reference

### StakedIP

- `stake(amount: bigint)`: Stake tokens
- `unstake(amount: bigint)`: Unstake tokens
- `balanceOf(account: string)`: Get staked balance
- `totalSupply()`: Get total staked supply
- `rewardsOf(account: string)`: Get pending rewards
- `claimRewards()`: Claim available rewards

### Withdrawal

- `requestWithdrawal(amount: bigint)`: Request token withdrawal
- `completeWithdrawal(requestId: bigint)`: Complete withdrawal request
- `getWithdrawalRequest(requestId: bigint)`: Get withdrawal request details
- `getWithdrawalRequestsByUser(user: string)`: Get user's withdrawal requests

### RewardsManager

- `distributeRewards(amount: bigint)`: Distribute rewards
- `getRewardRate()`: Get current reward rate
- `getTotalRewards()`: Get total distributed rewards
- `getRewardsPerToken()`: Get rewards per staked token

### WIP (Wrapped IP)

- `mint(to: string, amount: bigint)`: Mint WIP tokens
- `burn(from: string, amount: bigint)`: Burn WIP tokens
- `balanceOf(account: string)`: Get WIP balance
- `totalSupply()`: Get total WIP supply
- `allowance(owner: string, spender: string)`: Check token allowance
- `approve(spender: string, amount: bigint)`: Approve token spending
- `transfer(to: string, amount: bigint)`: Transfer WIP tokens
- `transferFrom(from: string, to: string, amount: bigint)`: Transfer WIP tokens from another address

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Lint
npm run lint
```

## License

MIT 