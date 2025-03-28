import { Withdrawal } from '../../src/story/withdrawal';

const mockContract = {
  requestWithdrawal: jest.fn(),
  completeWithdrawal: jest.fn(),
  getWithdrawalRequest: jest.fn(),
  getWithdrawalRequestsByUser: jest.fn(),
};

jest.mock('ethers', () => ({
  Contract: jest.fn().mockImplementation(() => mockContract),
}));

describe('Withdrawal', () => {
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
      const withdrawal = new Withdrawal({
        address: '0x123',
        provider: mockProvider,
      });

      expect(withdrawal.address).toBe('0x123');
      expect(withdrawal.contract).toBeDefined();
    });

    it('should initialize with signer', () => {
      const withdrawal = new Withdrawal({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });

      expect(withdrawal.address).toBe('0x123');
      expect(withdrawal.contract).toBeDefined();
    });
  });

  describe('requestWithdrawal', () => {
    let withdrawal: Withdrawal;

    beforeEach(() => {
      withdrawal = new Withdrawal({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call requestWithdrawal with correct parameters', async () => {
      const amount = BigInt(1000);
      const mockTx = { hash: '0x456' };
      mockContract.requestWithdrawal.mockResolvedValue(mockTx);

      const result = await withdrawal.requestWithdrawal(amount);

      expect(mockContract.requestWithdrawal).toHaveBeenCalledWith(amount);
      expect(result).toBe(mockTx);
    });
  });

  describe('completeWithdrawal', () => {
    let withdrawal: Withdrawal;

    beforeEach(() => {
      withdrawal = new Withdrawal({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should call completeWithdrawal with correct parameters', async () => {
      const requestId = BigInt(1);
      const mockTx = { hash: '0x456' };
      mockContract.completeWithdrawal.mockResolvedValue(mockTx);

      const result = await withdrawal.completeWithdrawal(requestId);

      expect(mockContract.completeWithdrawal).toHaveBeenCalledWith(requestId);
      expect(result).toBe(mockTx);
    });
  });

  describe('getWithdrawalRequest', () => {
    let withdrawal: Withdrawal;

    beforeEach(() => {
      withdrawal = new Withdrawal({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return withdrawal request details', async () => {
      const requestId = BigInt(1);
      const mockRequest = {
        user: '0x789',
        amount: BigInt(1000),
        timestamp: BigInt(1234567890),
        completed: false,
      };
      mockContract.getWithdrawalRequest.mockResolvedValue(mockRequest);

      const result = await withdrawal.getWithdrawalRequest(requestId);

      expect(mockContract.getWithdrawalRequest).toHaveBeenCalledWith(requestId);
      expect(result).toEqual(mockRequest);
    });
  });

  describe('getWithdrawalRequestsByUser', () => {
    let withdrawal: Withdrawal;

    beforeEach(() => {
      withdrawal = new Withdrawal({
        address: '0x123',
        provider: mockProvider,
        signer: mockSigner,
      });
    });

    it('should return withdrawal requests for given user', async () => {
      const user = '0x789';
      const mockRequests = [BigInt(1), BigInt(2), BigInt(3)];
      mockContract.getWithdrawalRequestsByUser.mockResolvedValue(mockRequests);

      const result = await withdrawal.getWithdrawalRequestsByUser(user);

      expect(mockContract.getWithdrawalRequestsByUser).toHaveBeenCalledWith(user);
      expect(result).toEqual(mockRequests);
    });
  });
}); 