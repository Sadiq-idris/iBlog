import { Link } from 'react-router-dom';

const BlogList = ({blogs,title}) => {
    // const blogs = prop.blogs;
    // const title = prop.title;
    return ( 
        <div className="blog-list">
            <h2 style={
                {
                    color:'grey',
                    textAlign:'center',
                    margin:'15px 0'
                }
            }>{ title }</h2>
            { blogs.map((blog)=>(
                 <div className="list-blog" key={ blog.id }>
                    <Link to = {`blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author}</p>
                    </Link>
                 </div>
            ))}
        </div>
     );
}
 
export default BlogList;