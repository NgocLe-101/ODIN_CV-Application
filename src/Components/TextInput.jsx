function TextInput({
  id,
  title,
  placeholder,
  onChangeHandler = () => {},
  isRequired = false,
}) {
  return (
    <div className="panel-module" id={id}>
      <label>{title}</label>
      {isRequired ? (
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChangeHandler}
          required
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
