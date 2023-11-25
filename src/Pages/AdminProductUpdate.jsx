import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AdminProductUpdate() {
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const params = useParams();
  const navigate = useNavigate();


  const getData = async () => {
    let result = await fetch(`https://puphub-backend.onrender.com/products/${params.id}`);
    result = await result.json();
    console.warn(result, "result");

    setImageUrl(result.imageUrl);
    setTitle(result.title);
    setDescription(result.description);
    setPrice(result.price);
  };

  const updateProducts = async (e) => {
    e.preventDefault();
    console.warn(imageUrl, title, description, price);

      let result = await fetch(
        `https://puphub-backend.onrender.com/products/${params.id}`,
        {
          method: "put",
          body: JSON.stringify({ imageUrl, title, description, price }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      result = await result.json();

      if (result) {
        navigate("/admin-products");
      }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <div className="admin-add-products m-20 flex flex-col justify-center items-center">
        <table>
          <h1 className="text-4xl from-bold my-20">Admin Page</h1>
          <tbody className=" ">
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
                  required
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
                  required
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
                  required
                />
              </td>

              <td className="p-4 border">
                <button onClick={updateProducts} className="bg-green-600 p-4">
                  Update
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminProductUpdate;
