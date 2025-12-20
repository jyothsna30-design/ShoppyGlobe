import { useSelector } from "react-redux";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { Suspense } from "react";
import React from "react";
const ProductItem = React.lazy(()=>import("./ProductItem"));

 function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const query = useSelector(state => state.search.query);
  //searches if title is in products and sends the filtered array
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
//sending props to productitem
  return(<div className="flex flex-row flex-wrap justify-between ">
    {filtered.map(product => (<Suspense key={product.id} fallback={<p>Loading..</p>}><ProductItem key={product.id} product={product} /></Suspense>))}
  </div>);
}
export default ProductList;