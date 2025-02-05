function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <div className="flex flex-col items-start my-6">
        <div className="w-full rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-cyan-400">
          <input
            type="text"
            value={filterText}
            placeholder="Search..."
            onChange={(e) => onFilterTextChange(e.target.value)}
            className="w-full py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>

        <div className="mt-2">
          <label>
            <input
              style={{ accentColor: "oklch(0.789 0.154 211.53)" }}
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => onInStockOnlyChange(e.target.checked)}
            />{" "}
            Only show products in stock
          </label>
        </div>
      </div>
    </form>
  );
}

export default SearchBar;
