import "./InputCheckbox.css";
export default function InputCheckbox({ type, value, id, htmlFor, onClick }) {
  return (
    <>
      <input type={type} value={value} id={id} onClick={onClick}></input>
      <label htmlFor={htmlFor}></label>
    </>
  );
}
// label ONLY AFTER INPUT
