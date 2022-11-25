import React, { useState, useEffect } from 'react'
import { Table, Alert } from 'reactstrap';
import { useDB } from '../../contexts/DBContext';
import { Link, useNavigate } from 'react-router-dom';


export default function BlogTable() {

    const { blogs, setCurrentBlog } = useDB();
    // eslint-disable-next-line no-unused-vars
    const [ error, setError ] = useState();

    const navigate = useNavigate();

    function handleViewBlog(blog){
        setCurrentBlog(blog);
        navigate('/blogs/displayBlog');
    }

    return (
        <div className='container'>
            {error && <Alert color='danger'>{error.message}</Alert>}
            <Table hover style={{backgroundColor: 'rgba(224, 242, 255,.9)', borderRadius: '1rem'}}>
                <thead>
                    <tr>
                        <th>
                            Title
                        </th>
                        <th>
                            Author
                        </th>
                        <th>
                            date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => {
                        return(
                            <tr key={blog.key} >
                                <th scope = 'row' >
                                    <Link onClick={handleViewBlog(blog)} >{blog.data.title}</Link>
                                </th>
                                <td>
                                    {blog.data.author}
                                </td>
                                <td>
                                    {blog.data.date.toLocaleString()}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
