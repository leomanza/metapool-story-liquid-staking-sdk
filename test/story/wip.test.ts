import { jest, describe, it, expect, beforeEach } from '@jest/globals';
import { WIP } from '../../src/story/wip';
import { ContractTransaction } from 'ethers';

type MockFunction<T> = jest.Mock<Promise<T>>;

interface MockContract {
  mint: MockFunction<ContractTransaction>;
  burn: MockFunction<ContractTransaction>;
  balanceOf: MockFunction<bigint>;
  totalSupply: MockFunction<bigint>;
  allowance: MockFunction<bigint>;
  approve: MockFunction<ContractTransaction>;
  transfer: MockFunction<ContractTransaction>;
  transferFrom: MockFunction<ContractTransaction>;
}

const mockContract = {
  mint: jest.fn().mockImplementation(async () => ({ hash: '0x123' }) as ContractTransaction),
  burn: jest.fn().mockImplementation(async () => ({ hash: '0x123' }) as ContractTransaction),
  balanceOf: jest.fn().mockImplementation(async () => BigInt(0)),
  totalSupply: jest.fn().mockImplementation(async () => BigInt(0)),
  allowance: jest.fn().mockImplementation(async () => BigInt(0)),
  approve: jest.fn().mockImplementation(async () => ({ hash: '0x123' }) as ContractTransaction),
  transfer: jest.fn().mockImplementation(async () => ({ hash: '0x123' }) as ContractTransaction),
  transferFrom: jest.fn().mockImplementation(async () => ({ hash: '0x123' }) as ContractTransaction),
} as const;

jest.mock('ethers', () => ({
  Contract: jest.fn().mockImplementation(() => mockContract),
}));

describe('WIP', () => {
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
      const wip = new WIP({
        address: '0x123',
        provider: mockProvider,
      });

      expect(wip.address).toBe('0x123');
      expect(wip.contract).toBeDefined();
    });

    it('should initialize with signer', () => {
      const wip = new WIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });

      expect(wip.address).toBe('0x123');
      expect(wip.contract).toBeDefined();
    });
  });

  describe('mint', () => {
    let wip: WIP;

    beforeEach(() => {
      wip = new WIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call mint with correct parameters', async () => {
      const to = '0x789';
      const amount = BigInt(1000);
      const mockTx = { hash: '0x456' };
      mockContract.mint.mockResolvedValue(mockTx);

      const result = await wip.mint(to, amount);

      expect(mockContract.mint).toHaveBeenCalledWith(to, amount);
      expect(result).toBe(mockTx);
    });
  });

  describe('burn', () => {
    let wip: WIP;

    beforeEach(() => {
      wip = new WIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call burn with correct parameters', async () => {
      const from = '0x789';
      const amount = BigInt(1000);
      const mockTx = { hash: '0x456' };
      mockContract.burn.mockResolvedValue(mockTx);

      const result = await wip.burn(from, amount);

      expect(mockContract.burn).toHaveBeenCalledWith(from, amount);
      expect(result).toBe(mockTx);
    });
  });

  describe('balanceOf', () => {
    let wip: WIP;

    beforeEach(() => {
      wip = new WIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return balance for given account', async () => {
      const account = '0x789';
      const mockBalance = BigInt(1000);
      mockContract.balanceOf.mockResolvedValue(mockBalance);

      const result = await wip.balanceOf(account);

      expect(mockContract.balanceOf).toHaveBeenCalledWith(account);
      expect(result).toBe(mockBalance);
    });
  });

  describe('totalSupply', () => {
    let wip: WIP;

    beforeEach(() => {
      wip = new WIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return total supply', async () => {
      const mockSupply = BigInt(10000);
      mockContract.totalSupply.mockResolvedValue(mockSupply);

      const result = await wip.totalSupply();

      expect(mockContract.totalSupply).toHaveBeenCalled();
      expect(result).toBe(mockSupply);
    });
  });

  describe('allowance', () => {
    let wip: WIP;

    beforeEach(() => {
      wip = new WIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return allowance for given owner and spender', async () => {
      const owner = '0x789';
      const spender = '0xabc';
      const mockAllowance = BigInt(500);
      mockContract.allowance.mockResolvedValue(mockAllowance);

      const result = await wip.allowance(owner, spender);

      expect(mockContract.allowance).toHaveBeenCalledWith(owner, spender);
      expect(result).toBe(mockAllowance);
    });
  });

  describe('approve', () => {
    let wip: WIP;

    beforeEach(() => {
      wip = new WIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call approve with correct parameters', async () => {
      const spender = '0x789';
      const amount = BigInt(1000);
      const mockTx = { hash: '0x456' };
      mockContract.approve.mockResolvedValue(mockTx);

      const result = await wip.approve(spender, amount);

      expect(mockContract.approve).toHaveBeenCalledWith(spender, amount);
      expect(result).toBe(mockTx);
    });
  });

  describe('transfer', () => {
    let wip: WIP;

    beforeEach(() => {
      wip = new WIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call transfer with correct parameters', async () => {
      const to = '0x789';
      const amount = BigInt(1000);
      const mockTx = { hash: '0x456' };
      mockContract.transfer.mockResolvedValue(mockTx);

      const result = await wip.transfer(to, amount);

      expect(mockContract.transfer).toHaveBeenCalledWith(to, amount);
      expect(result).toBe(mockTx);
    });
  });

  describe('transferFrom', () => {
    let wip: WIP;

    beforeEach(() => {
      wip = new WIP({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call transferFrom with correct parameters', async () => {
      const from = '0x789';
      const to = '0xabc';
      const amount = BigInt(1000);
      const mockTx = { hash: '0x456' };
      mockContract.transferFrom.mockResolvedValue(mockTx);

      const result = await wip.transferFrom(from, to, amount);

      expect(mockContract.transferFrom).toHaveBeenCalledWith(from, to, amount);
      expect(result).toBe(mockTx);
    });
  });
}); 