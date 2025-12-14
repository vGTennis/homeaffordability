'use client';
import { useState } from 'react';

export default function Page() {
  const [price, setPrice] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [rate, setRate] = useState(5);
  const [years, setYears] = useState(25);
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const loan = price - deposit;
    const r = rate / 100 / 12;
    const n = years * 12;
    const payment = (loan * r) / (1 - Math.pow(1 + r, -n));
    setResult(payment);
  }

  return (
    <main>
      <h1>Home Affordability</h1>
      <p>Understand what you can really afford when buying a home.</p>

      <input type="number" placeholder="Purchase Price" onChange={e => setPrice(+e.target.value)} />
      <input type="number" placeholder="Deposit" onChange={e => setDeposit(+e.target.value)} />
      <input type="number" placeholder="Interest Rate (%)" value={rate} onChange={e => setRate(+e.target.value)} />
      <input type="number" placeholder="Mortgage Term (years)" value={years} onChange={e => setYears(+e.target.value)} />

      <button onClick={calculate}>Calculate Mortgage</button>

      {result && (
        <p><strong>Estimated Monthly Payment:</strong> £{result.toFixed(2)}</p>
      )}

      <footer style={{ marginTop: '40px', fontSize: '14px' }}>
        <p>
          This calculator is for guidance only and does not constitute financial advice.
        </p>
      </footer>
    </main>
  );
}
