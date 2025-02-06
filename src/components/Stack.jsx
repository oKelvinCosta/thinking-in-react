import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "../assets/Tailwind_CSS_Logo.svg";

function Stack() {
  return (
    <>
      <div className="flex items-baseline">
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <p>
            <b>Vite</b>
          </p>
        </div>
        <div>
          <p>
            <b>+</b>
          </p>
        </div>
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>
            <b>React</b>
          </p>
        </div>
        <div>
          <p>
            <b>+</b>
          </p>
        </div>
        <div>
          <img src={tailwindLogo} className="logo" alt="React logo" />
          <p>
            <b>Tailwind</b>
          </p>
        </div>
      </div>
    </>
  );
}

export default Stack;
