import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAddProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState({});
  const navigate = useNavigate();

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
    setImageUrl("");
    setTitle("");
    setDescription("");
    setPrice("");
    navigate("/admin-products")
    
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
    <div className="flex flex-col items-center justify-center p-30">
      <table>
        <h1 className="text-4xl from-bold my-20">Admin Page</h1>
        <tbody>
          <tr className="border flex flex-col">
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
    </div>
  );
}

export default AdminAddProduct;
