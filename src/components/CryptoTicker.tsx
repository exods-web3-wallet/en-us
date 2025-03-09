import React, { useEffect, useState } from 'react';

interface CryptoPrice {
  symbol: string;
  price: number;
  change24h: number;
}

const CryptoTicker: React.FC = () => {
  const [prices, setPrices] = useState<CryptoPrice[]>([]);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,cardano,solana&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();

        const formattedPrices = Object.entries(data).map(([coin, data]: [string, any]) => ({
          symbol: coin.toUpperCase(),
          price: data.usd,
          change24h: data.usd_24h_change,
        }));

        setPrices(formattedPrices);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-black/20 py-3">
      <div className="flex animate-scroll space-x-8">
        {prices.map((crypto) => (
          <div key={crypto.symbol} className="flex items-center space-x-2">
            <span className="font-bold">{crypto.symbol}</span>
            <span>${crypto.price?.toLocaleString() ?? 'N/A'}</span>
            <span className={crypto.change24h >= 0 ? 'text-green-400' : 'text-red-400'}>
              {crypto.change24h?.toFixed(2) ?? 'N/A'}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoTicker;