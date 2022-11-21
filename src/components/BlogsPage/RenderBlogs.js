import React from 'react';
import { useDB } from '../../contexts/DBContext';

export default function RenderBlogs() {

    const { blogs } = useDB();

    function MapBlogs () {
        blogs.forEach((blog) => {
            console.log(blog)
            return (
                <tr>
                    <th scope='row'>
                        {blog.key}
                    </th>
                    <td>
                        {blog.data.author}
                    </td>
                    <td>
                        {blog.data.title}
                    </td>
                    <td>
                        {blog.data.date}
                    </td>
                </tr>
            );
        })
    };

    return (
        <MapBlogs />
    )
}
