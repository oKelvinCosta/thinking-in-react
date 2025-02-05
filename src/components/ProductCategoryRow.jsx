
function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2" className="text-left p-2 px-3 outline-1 outline-gray-200 bg-gray-50 ">
          {category}
        </th>
      </tr>
    );
  }
  export default ProductCategoryRow;