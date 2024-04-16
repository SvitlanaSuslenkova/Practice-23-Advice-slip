import "./InputRange.css";

export default function InputRange({
  type,
  min,
  max,
  defaultValue,
  step,
  data,
  onChange,
}) {
  return (
    <input
      type={type}
      min={min}
      max={max}
      defaultValue={defaultValue}
      step={step}
      data={data}
      onChange={onChange}
    ></input>
  );
}
