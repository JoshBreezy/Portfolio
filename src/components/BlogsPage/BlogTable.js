import React, { useState, useEffect } from 'react'
import { Table, Alert } from 'reactstrap';
import { useDB } from '../../contexts/DBContext';
import { Link } from 'react-router-dom';


export default function BlogTable() {

    const { blogs, makeBlogCurrent } = useDB();
    // eslint-disable-next-line no-unused-vars
    const [ error, setError ] = useState();

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
                                    <Link to={`/blogs/${blog.key}`} onClick={makeBlogCurrent(blog)} >{blog.data.title}</Link>
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
