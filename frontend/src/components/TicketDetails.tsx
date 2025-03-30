import React, { useState, useEffect } from 'react';
import useEthereum from '../src/hooks/useEthereum';


const TicketDetails = () => {
  const { contract } = useEthereum();
  const [ticketId, setTicketId] = useState<number | null>(null);
  const [tokenURI, setTokenURI] = useState<string | null>(null);

  useEffect(() => {
    if (contract && ticketId !== null) {
      const fetchData = async () => {
        const uri = await contract.tokenURI(ticketId);
        setTokenURI(uri);
      };
      fetchData();
    }
  }, [contract, ticketId]);

  return (
    <div>
      <input
        type="number"
        value={ticketId || ''}
        onChange={(e) => setTicketId(Number(e.target.value))}
        placeholder="Enter Ticket ID"
      />
      {tokenURI && <div>Token URI: {tokenURI}</div>}
    </div>
  );
};

export default TicketDetails;
