import { StakedIP } from '../../src/story/stakedIP';

const mockContract = {
  stake: jest.fn(),
  unstake: jest.fn(),
  balanceOf: jest.fn(),
  totalSupply: jest.fn(),
  rewardsOf: jest.fn(),
  claimRewards: jest.fn(),
};

jest.mock('ethers', () => ({
  Contract: jest.fn().mockImplementation(() => mockContract),
}));

describe('StakedIP', () => {
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
      const stakedIP = new StakedIP({
        address: '0x123',
        provider: mockProvider,
      });

      expect(stakedIP.address).toBe('0x123');
      expect(stakedIP.contract).toBeDefined();
    });

    it('should initialize with signer', () => {
      const stakedIP = new StakedIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });

      expect(stakedIP.address).toBe('0x123');
      expect(stakedIP.contract).toBeDefined();
    });
  });

  describe('stake', () => {
    let stakedIP: StakedIP;

    beforeEach(() => {
      stakedIP = new StakedIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call stake with correct parameters', async () => {
      const amount = BigInt(1000);
      const mockTx = { hash: '0x456' };
      mockContract.stake.mockResolvedValue(mockTx);

      const result = await stakedIP.stake(amount);

      expect(mockContract.stake).toHaveBeenCalledWith(amount);
      expect(result).toBe(mockTx);
    });
  });

  describe('unstake', () => {
    let stakedIP: StakedIP;

    beforeEach(() => {
      stakedIP = new StakedIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call unstake with correct parameters', async () => {
      const amount = BigInt(1000);
      const mockTx = { hash: '0x456' };
      mockContract.unstake.mockResolvedValue(mockTx);

      const result = await stakedIP.unstake(amount);

      expect(mockContract.unstake).toHaveBeenCalledWith(amount);
      expect(result).toBe(mockTx);
    });
  });

  describe('balanceOf', () => {
    let stakedIP: StakedIP;

    beforeEach(() => {
      stakedIP = new StakedIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return balance for given account', async () => {
      const account = '0x789';
      const mockBalance = BigInt(1000);
      mockContract.balanceOf.mockResolvedValue(mockBalance);

      const result = await stakedIP.balanceOf(account);

      expect(mockContract.balanceOf).toHaveBeenCalledWith(account);
      expect(result).toBe(mockBalance);
    });
  });

  describe('totalSupply', () => {
    let stakedIP: StakedIP;

    beforeEach(() => {
      stakedIP = new StakedIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return total supply', async () => {
      const mockSupply = BigInt(10000);
      mockContract.totalSupply.mockResolvedValue(mockSupply);

      const result = await stakedIP.totalSupply();

      expect(mockContract.totalSupply).toHaveBeenCalled();
      expect(result).toBe(mockSupply);
    });
  });

  describe('rewardsOf', () => {
    let stakedIP: StakedIP;

    beforeEach(() => {
      stakedIP = new StakedIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return rewards for given account', async () => {
      const account = '0x789';
      const mockRewards = BigInt(100);
      mockContract.rewardsOf.mockResolvedValue(mockRewards);

      const result = await stakedIP.rewardsOf(account);

      expect(mockContract.rewardsOf).toHaveBeenCalledWith(account);
      expect(result).toBe(mockRewards);
    });
  });

  describe('claimRewards', () => {
    let stakedIP: StakedIP;

    beforeEach(() => {
      stakedIP = new StakedIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call claimRewards', async () => {
      const mockTx = { hash: '0x456' };
      mockContract.claimRewards.mockResolvedValue(mockTx);

      const result = await stakedIP.claimRewards();

      expect(mockContract.claimRewards).toHaveBeenCalled();
      expect(result).toBe(mockTx);
    });
  });
}); 