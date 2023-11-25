import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getData();
    }
  };

  const getData = async () => {
    const result = await fetch("http://localhost:5000/products");
    const data = await result.json();
    setProducts(data);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <table className="table-auto border gap-2 m-20">
        <thead className="border">
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody className="border  ">
          {products.map((item) => {
            return (
              <tr className="border" key={item._id}>
                <td className="border p-4 w-[100px]" key={item._id}>
                  {item._id}
                </td>
                <td className="border p-4 w-[200px]">
                  <img
                    src={item.imageUrl}
                    className="w-[150x] h-[150px] object-cover"
                    alt=""
                  />
                </td>
                <td className="border p-4 w-[400px]">{item.title}</td>
                <td className="border p-4 w-[400px]">{item.description}</td>
                <td className="border p-4 w-[30px]">${item.price}</td>
                <td className="border p-4 ">
                  <Link to={"/admin-product-update/" + item._id}>
                    {" "}
                    <button className="bg-yellow-300 p-4">Edit</button>
                  </Link>
                </td>
                <td className="border p-4">
                  <button
                    onClick={() => deleteProduct(item._id)}
                    className="bg-red-600 p-4"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
