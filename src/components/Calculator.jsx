import { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorButton from './CalculatorButton';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="max-w-xs mx-auto p-4 bg-slate-500 rounded-xl">
      <CalculatorDisplay input={input} result={result} />
      <div className="grid grid-cols-4 gap-2">
        {[...Array(10).keys(), '+', '-', '*', '/', '.'].map((item) => (
          <CalculatorButton
            key={item}
            onClick={() => handleInput(item)}
            value={item}
            additionalClass="col-span-1"
          />
        ))}
        <CalculatorButton onClick={clearInput} value="C" additionalClass="col-span-2" />
        <CalculatorButton onClick={calculateResult} value="=" additionalClass="col-span-2" />
      </div>
    </div>
  );
};

export default Calculator;
