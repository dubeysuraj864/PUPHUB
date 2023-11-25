import { Link, useNavigate } from "react-router-dom";

function AdminNav() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="admin-nav">
        <nav className=" bg-yellow-500 font-bold flex justify-center items-center gap-6 p-5 m-10 border rounded-full">
          <Link to="/admin-products">Products</Link>
          <Link to="/admin-add-product">Add Products</Link>
          <Link to="/admin-product-update">Update Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/sign-up">Register</Link>
          <div className="cursor-pointer" onClick={logout}>
            Logout
          </div>
        </nav>
      </div>
    </>
  );
}

export default AdminNav;
