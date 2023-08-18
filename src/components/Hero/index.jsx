import moonImage from "~/assets/moon.jpg";
import "./styles.css";

export const Hero = () => {
  return (
    <div className="image--container">
      <h1>NASA API</h1>
      <img src={moonImage} alt="Imagen de la luna" />
    </div>
  );
};
