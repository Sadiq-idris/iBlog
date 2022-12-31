import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <div className="header">
            <h2>iYOLA</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/create">New Blog</Link>
            </nav>
        </div>
    );
}

export default Navbar;