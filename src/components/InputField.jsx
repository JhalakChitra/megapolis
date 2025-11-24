// Placeholder for the InputField component (assuming it's a simple text input wrapper)
// FIX: Restored the complete JSX structure for the InputField component.
const InputField = ({ label, name, value, onChange, placeholder, required, type = "text", badge }) => (
  <div className="space-y-1">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      <div className="flex items-center space-x-2">
        <span>{label}</span>
        {required && <span className="text-red-500">*</span>}
        {badge} {/* Render the optional badge here */}
      </div>
    </label>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition duration-150"
    />
  </div>
);

export default InputField;