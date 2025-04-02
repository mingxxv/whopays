import React, { useEffect, useState } from 'react';
import Window95 from './Window95';

const PayerDisplay = () => {
  const [payer, setPayer] = useState('Loading...');
  const [loading, setLoading] = useState(false);

  const fetchPayer = async () => {
    try {
      const response = await fetch('/api/payer');
      const data = await response.json();
      setPayer(data.lastPayer);
    } catch (error) {
      console.error('Error fetching payer:', error);
      setPayer('Error loading data');
    }
  };

  useEffect(() => {
    fetchPayer();
  }, []);

  const updatePayer = async (name: string) => {
    if (loading) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/payer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      
      const data = await response.json();
      setPayer(data.lastPayer);
    } catch (error) {
      console.error('Error updating payer:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Window95 title="Who Paid for Claude Code?">
      <div className="display-area">
        {payer}
      </div>
      <div className="button-container">
        <button 
          className="win95-button"
          onClick={() => updatePayer('Gordon')}
          disabled={loading}
        >
          Gordon
        </button>
        <button 
          className="win95-button"
          onClick={() => updatePayer('Zhuang')}
          disabled={loading}
        >
          Zhuang
        </button>
      </div>
    </Window95>
  );
};

export default PayerDisplay;