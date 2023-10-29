const CalculatorButton = ({ onClick, value, additionalClass }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-300 hover:bg-gray-400 text-xl font-bold p-4 rounded ${additionalClass}`}
    >
      {value}
    </button>
  );
};

export default CalculatorButton;
