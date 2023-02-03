import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  const [number1, setNumber1] = useState(Math.ceil(Math.random() * 10));
  const [number2, setNumber2] = useState(Math.ceil(Math.random() * 10));

  const [resault, setResault] = useState(0);

  const [points, setPoints] = useState(0);

  const handleSubmit = () => {
    if (resault === number1 * number2) {
      setPoints((prev) => prev + 1);
    } else {
      setPoints((prev) => prev - 1);
    }
    setNumber2(Math.ceil(Math.random() * 10));
    setNumber1(Math.ceil(Math.random() * 10));
  };

  return (
    <form
      className="form"
      id="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <h5 id="score" className="score">
        نقاطك : {points}{' '}
      </h5>
      <h1 id="txt" className="txt">
        {' '}
        حاصل ضرب {number1} في {number2}
      </h1>

      <input
        type="number"
        id="input"
        className="input"
        placeholder="اكتب جوابك"
        autoFocus
        autoComplete="off"
        value={resault || ''}
        onChange={(e) => setResault(Number(e.target.value))}
      />
      <button type="submit" id="btn" className="btn">
        أرسل إجابتك
      </button>
    </form>
  );
}

export default App;
