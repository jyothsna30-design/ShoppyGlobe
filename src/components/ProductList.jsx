import { useSelector } from "react-redux";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const query = useSelector(state => state.search.query);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return(<div className="flex flex-row flex-wrap justify-between ">
    {filtered.map(product => (<ProductItem key={product.id} product={product} />))}
  </div>);
}