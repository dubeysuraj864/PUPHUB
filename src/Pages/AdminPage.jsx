import { useEffect, useState } from "react";

function AdminPage() {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const result = await fetch("http://localhost:5000/products");
    const data = await result.json();
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Admin Page</h1>
      <table className="table-auto border gap-2">
        <thead className="border">
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="border">
          {
            products.map((item, id) => {
              return (
   
                  <tr className="border" key={item._id}>
                    <td className="border p-4 w-[100px]">{item._id}</td>
                    <td className="border p-4 w-[200px]">{item.image}</td>
                    <td className="border p-4">{item.title}</td>
                    <td className="border p-4 w-[400px]">{item.description}</td>
                    <td className="border p-4">{item.price}40$</td>
                  </tr>
           
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPage;
