import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import tailwindLogo from "./assets/Tailwind_CSS_Logo.svg";
import "./App.css";

import FilterableProductTable from "./components/FilterableProductTable";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  return (
    <>
      <div className="max-w-[360px] mt-[10%] mx-auto flex flex-col items-center">
        {/* Title */}
      <div className="flex items-baseline">
        <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <p><b>Vite</b></p>
        </div>
        <div><p><b>+</b></p></div>
        <div>
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p><b>React</b></p>
        </div>
        <div><p><b>+</b></p></div>
        <div>
          <img src={tailwindLogo} className="logo" alt="React logo" />
          <p><b>Tailwind</b></p>
        </div>
      </div>

      <FilterableProductTable products={PRODUCTS} />
      </div>
    </>
  );
}

export default App;
