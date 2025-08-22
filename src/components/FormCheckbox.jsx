const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control justify-items-center">
      <label htmlFor={name} className="fieldset  cursor-pointer">
        <span className="fieldset-legend capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size} rounded-md flex`}
      />
    </div>
  );
};
export default FormCheckbox;
