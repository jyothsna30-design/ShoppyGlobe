import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../features/cart/products/searchSlice";

function Header() {
  const dispatch = useDispatch();
  //calculating cart items
  const cartCount = useSelector((state) => state.cart.items?.reduce((total, item) => total + item.quantity, 0) || 0);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <header className="border-2 bg-violet-950 ">
      <nav className="flex flex-col md:flex-row md:items-center text-white">
      {/*logo*/}
        <Link to="/" className="font-extrabold m-3 text-xl">
          ShoppyGlobe
        </Link>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="mt-3 ml-10 mb-3 border-2 rounded-lg bg-white text-black md:ml-100"
        />

        {/* Navigation Links */}
        <div className=" lg:ml-80 mt-3 ">
          <Link to="/" className="mr-3">Home</Link>
          <Link to="/cart" className="cart-link">
            🛒 Cart <span className="cart-count">({cartCount})</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Header
