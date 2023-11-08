import { useEffect, useState } from "react";
// import { Params } from "react-router-dom";

function AdminPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const addProducts = async () => {
    let result = await fetch("http://localhost:5000/add-products", {
      method: "post",
      body: JSON.stringify({ imageUrl, title, description, price }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    getData();
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
        getData();
      alert("record is deleted successfully");
    }
    
  };

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
      <table>
        <h1 className="text-4xl from-bold my-20">Admin Page</h1>
        <tbody>
          <tr className="border">
            <td className="p-4 border">auto ID</td>
            <td className="p-4 border">
              <input
                type="text"
                name="imageURL"
                id=""
                placeholder="Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </td>
            <td className="p-4 border">
              <input
                type="text"
                name="title"
                id=""
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
            <td className="p-4 border">
              <input
                type="text"
                name="description"
                id=""
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </td>
            <td className="p-4 border">
              <input
                type="text"
                name="price"
                id=""
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
            <td className="p-4 border">
              <button onClick={addProducts} className="bg-green-600 p-4">
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
                  <img src={item.imageUrl} className="w-[150x] h-[150px] object-cover" alt="" />
                </td>
                <td className="border p-4 w-[400px]">{item.title}</td>
                <td className="border p-4 w-[400px]">{item.description}</td>
                <td className="border p-4 w-[30px]">${item.price}</td>
                <td className="border p-4 ">
                  <button className="bg-yellow-300 p-4">Edit</button>
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
