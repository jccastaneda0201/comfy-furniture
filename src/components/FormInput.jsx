const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <div className="form-control w-full max-w-md">
      <label htmlFor={name} className="label">
        <span className="label-text text-base font-roboto tracking-wide text-[#0e4b8b]">
          {label}
        </span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered w-full rounded-xl border-2 border-[#d1b892] bg-white/90 text-gray-800 focus:border-[#4da6e7] focus:ring focus:ring-[#4da6e7]/30 transition-all duration-300 shadow-sm hover:shadow-md ${size}`}
      />
    </div>
  );
};
export default FormInput;
