import "./styles.css";
export const Button = ({ text, onClick = null, isActive = null }) => {
  return (
    <button className={`button ${isActive ? "active" : ""}`} onClick={onClick}>
      {text}
    </button>
  );
};
