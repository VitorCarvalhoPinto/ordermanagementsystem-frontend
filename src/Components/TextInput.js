const TextInput = ({ name, value, onChange, type }) => {
  return (
    <div className="mb-4">
      <input
        id={name}
        type={type}
        name={name}
        placeholder={`Digite o ${name}`}
        value={value}
        onChange={onChange}
        className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};

export default TextInput;
