import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAccount } from '../features/walletSlice';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const account = useSelector((state: any) => state.wallet.account);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert('MetaMask не установлен');
      return;
    }

    try {
      setIsLoading(true);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      dispatch(setAccount(accounts[0]));
    } catch (error) {
      console.error('Ошибка при подключении:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: string[]) => {
        dispatch(setAccount(accounts.length > 0 ? accounts[0] : null));
      });
    }
  }, [dispatch]);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-semibold">Tickets NFT</h1>
      {account ? (
        <span className="text-green-400">Connected: {account.slice(0, 6)}...{account.slice(-4)}</span>
      ) : (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          onClick={connectWallet}
          disabled={isLoading}
        >
          {isLoading ? 'Connecting...' : 'Connect Wallet'}
        </button>
      )}
    </header>
  );
};

export default Header;
