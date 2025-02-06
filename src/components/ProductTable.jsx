import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

function ProductTable({ products, filterText, inStockOnly }) {
    const rows = [];
    let lastCategory = null;
  
    products.forEach((product) => {
      // If not found anything, return
      if (
        product.name.toLowerCase().indexOf(
          filterText.toLowerCase()
        ) === -1
      ) {
        return;
      }
      // If inStockOnly is true and product.stocked is false, return
      if (inStockOnly && !product.stocked) {
        return;
      }
      // If product.category is not equal to lastCategory, push a new ProductCategoryRow
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
  
    return (
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2 px-3 text-left">Name</th>
            <th className="p-2 px-3 ">Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  export default ProductTable;