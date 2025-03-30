import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

const useEthereum = () => {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.Signer | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);

  useEffect(() => {
    if (window.ethereum) {
      const _provider = new ethers.BrowserProvider(window.ethereum);
      setProvider(_provider);

      window.ethereum.request({ method: 'eth_requestAccounts' }).then((accounts: string[]) => {
        const _signer = _provider.getSigner();
        setSigner(_signer);

        const _contract = new ethers.Contract(
          'YOUR_CONTRACT_ADDRESS',
          [
            // ABI of your contract
          ],
          _signer
        );
        setContract(_contract);
      }).catch(err => {
        console.error("Error connecting to MetaMask:", err);
      });
    } else {
      alert('Please install MetaMask!');
    }
  }, []);

  return { provider, signer, contract };
};

export default useEthereum;
