function ProductRow({ product }) {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr className="outline-1 outline-gray-200 ">
        <td className="p-2 px-3 text-left">{name}</td>
        <td className="p-2 px-3 ">{product.price}</td>
      </tr>
    );
  }

  export default ProductRow;