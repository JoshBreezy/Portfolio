import React, { useState, useEffect } from 'react'
import { Table, Alert } from 'reactstrap';
import { useDB } from '../../contexts/DBContext';


export default function BlogTable() {

    const { pullBlogs } = useDB();
    const [ error, setError ] = useState();
    const [ blogs, setBlogs ] = useState([]);


    async function getBlogs(){
        try {
            await pullBlogs().then((res) => {
                console.log(res.val())
                for (const item in res.val()) {
                    setBlogs(blogs + {...item})
                    console.log(blogs)
                }
            })
        } catch(err) {
            setError(err)
        }
    }

    useEffect(() => {
        getBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    function MapBlogs () {
        for (const {...item} in blogs) {
            const keys = Object.keys(item);
            const key = keys[0];
            for (const {...blog} in item) {
                return (
                    <tr>
                        <th scope='row'>
                            {key}
                        </th>
                        <td>
                            {blog.author}
                        </td>
                        <td>
                            {blog.title}
                        </td>
                        <td>
                            {blog.date}
                        </td>
                    </tr>
                )
            }
        }
    }



    return (
        <div className='container'>
            {error && <Alert color='danger'>{error.message}</Alert>}
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
                    <MapBlogs />
                </tbody>
            </Table>
        </div>
    )
}
