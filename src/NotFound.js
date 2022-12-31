import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>404 page</h2>
        <p>not found </p>
        <Link to='/'>go back to homepage...</Link>
        </div>
     );
}
 
export default NotFound;