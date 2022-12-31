import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle ] = useState('');
    const [body, setBody ] = useState('');
    const [author, setAuthor ] = useState('sadiq');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog)
        }).then(()=>{
            console.log('new blog added');
            setIsPending(false);
            navigate('/');
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="sadiq">sadiq</option>
                    <option value="adam">adam</option>
                </select>
                { !isPending && <button className='btn'>Add blog</button>}
                { isPending && <button className='btn' disabled>Adding blog....</button>}
            </form>
        </div>
     );
}
 
export default Create;