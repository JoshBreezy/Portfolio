import React from 'react'
import { Table } from 'reactstrap';
import { BLOGS } from "../shared/blogs";

const blogs = BLOGS;


export default function BlogTable() {

    const mapBlogs = blogs.map(({...blog}) => (
        <tr>
            <th scope='row'>
                {blog.id}
            </th>
            <td>
                {blog.title}
            </td>
            <td>
                {blog.author}
            </td>
            <td>
                {blog.date}
            </td>
        </tr>
    ))



    return (
        <div className='container'>
            <Table hover style={{backgroundColor: 'rgba(224, 242, 255,.9)', borderRadius: '1rem'}}>
                <thead>
                    <tr>
                        <th>
                            Blog Id
                        </th>
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
                    {mapBlogs}
                </tbody>
            </Table>
        </div>
    )
}
