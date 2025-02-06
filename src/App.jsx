
import "./App.css";

import FilterableProductTable from "./components/FilterableProductTable";
import Stack from "./components/Stack";

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
        <Stack />
        <FilterableProductTable products={PRODUCTS} />
      </div>
    </>
  );
}

export default App;
