import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../features/cart/products/searchSlice";
import { selectTotalCartItems } from "../features/cart/cartSelectors";


function Header() {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectTotalCartItems);

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <header className="border-2 bg-violet-950 ">
      <nav className="flex text-white">
      
        <Link to="/" className="font-extrabold m-3 text-xl">
          ShoppyGlobe
        </Link>

        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearch}
          className="mt-3 ml-100 mb-3 border-2 rounded-lg bg-white text-black"
        />

        {/* Navigation Links */}
        <div className=" ml-80 mt-3">
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
