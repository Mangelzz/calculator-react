const CalculatorDisplay = ({ input, result }) => {
  return (
    <div className="bg-gray-200 border p-4 mb-4 rounded-md">
      <input
        type="text"
        value={input}
        readOnly
        className="w-full mb-2 p-2 text-2xl bg-gray-200"
        disabled
      />
      <div className="text-3xl font-bold">{result}</div>
    </div>
  );
};

export default CalculatorDisplay;
