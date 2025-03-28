import { RewardsManager } from '../../src/story/rewardsManager';

const mockContract = {
  distributeRewards: jest.fn(),
  getRewardRate: jest.fn(),
  getTotalRewards: jest.fn(),
  getRewardsPerToken: jest.fn(),
};

jest.mock('ethers', () => ({
  Contract: jest.fn().mockImplementation(() => mockContract),
}));

describe('RewardsManager', () => {
  let mockProvider: any;
  let mockSigner: any;

  beforeEach(() => {
    mockProvider = {
      send: jest.fn(),
    };

    mockSigner = {
      sendTransaction: jest.fn(),
    };

    // Clear mock calls
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should initialize with provider', () => {
      const rewardsManager = new RewardsManager({
        address: '0x123',
        provider: mockProvider,
      });

      expect(rewardsManager.address).toBe('0x123');
      expect(rewardsManager.contract).toBeDefined();
    });

    it('should initialize with signer', () => {
      const rewardsManager = new RewardsManager({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });

      expect(rewardsManager.address).toBe('0x123');
      expect(rewardsManager.contract).toBeDefined();
    });
  });

  describe('distributeRewards', () => {
    let rewardsManager: RewardsManager;

    beforeEach(() => {
      rewardsManager = new RewardsManager({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call distributeRewards with correct parameters', async () => {
      const amount = BigInt(1000);
      const mockTx = { hash: '0x456' };
      mockContract.distributeRewards.mockResolvedValue(mockTx);

      const result = await rewardsManager.distributeRewards(amount);

      expect(mockContract.distributeRewards).toHaveBeenCalledWith(amount);
      expect(result).toBe(mockTx);
    });
  });

  describe('getRewardRate', () => {
    let rewardsManager: RewardsManager;

    beforeEach(() => {
      rewardsManager = new RewardsManager({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return reward rate', async () => {
      const mockRate = BigInt(100);
      mockContract.getRewardRate.mockResolvedValue(mockRate);

      const result = await rewardsManager.getRewardRate();

      expect(mockContract.getRewardRate).toHaveBeenCalled();
      expect(result).toBe(mockRate);
    });
  });

  describe('getTotalRewards', () => {
    let rewardsManager: RewardsManager;

    beforeEach(() => {
      rewardsManager = new RewardsManager({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return total rewards', async () => {
      const mockRewards = BigInt(10000);
      mockContract.getTotalRewards.mockResolvedValue(mockRewards);

      const result = await rewardsManager.getTotalRewards();

      expect(mockContract.getTotalRewards).toHaveBeenCalled();
      expect(result).toBe(mockRewards);
    });
  });

  describe('getRewardsPerToken', () => {
    let rewardsManager: RewardsManager;

    beforeEach(() => {
      rewardsManager = new RewardsManager({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return rewards per token', async () => {
      const mockRewardsPerToken = BigInt(50);
      mockContract.getRewardsPerToken.mockResolvedValue(mockRewardsPerToken);

      const result = await rewardsManager.getRewardsPerToken();

      expect(mockContract.getRewardsPerToken).toHaveBeenCalled();
      expect(result).toBe(mockRewardsPerToken);
    });
  });
}); 