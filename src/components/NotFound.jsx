
import { useLocation } from "react-router-dom";
function NotFound() {
  //display error message with pathname
  const location = useLocation();
  return (
    <div className="m-50 text-5xl font-extrabold">
      <h1>404</h1>
      <p>Page not found</p>
        <p>${location.pathname} is not correct url</p>
    </div>
  );
}
export default NotFound;