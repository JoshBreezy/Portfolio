import React, { useContext, useEffect, useState } from 'react';
import { db, auth } from '../firebase';

const DBContext = React.createContext()

export function useDB() {
    return useContext(DBContext)
};

export function DBProvider({ children }){

    const [ blogs, setBlogs ] = useState([]);
    const [ comments, setComments ] = useState([]);
    const [ currentBlog, setCurrentBlog ] = useState();
    // eslint-disable-next-line no-unused-vars
    const [ error, setError ] = useState();

    function addCurrentUserToDB(userName) {
        return db.ref('users/' + auth.currentUser.uid).set({
            email: auth.currentUser.email,
            userName: userName
        })
    }

    function updateUserSettings(email, userName, ofAge) {
        const newValues = {
            email: email,
            userName: userName,
            ofAge : ofAge
        }
        const update = {}
        update['users/' + auth.currentUser.uid] = newValues
        return(
            db.ref().update(update)
        )
    }

    function deleteComment(commentKey){
        const update = {}
        update[`blogs/${currentBlog.key}/comments/${commentKey}/visible`] = false;
        return(
            db.ref().update(update)
        )
    }

    function deleteBlog(blogKey){
        const update = {}
        update[`blogs/${currentBlog.key}/visible`] = false;
        return(
            db.ref().update(update)
        )
    }

    function addToUnavailNames(userName) {
        return db.ref('unavailNames/').push().set(userName)
    }

    function checkUnavailNames(userName) {
        return db.ref('unavailNames/').orderByValue().equalTo(userName).once('value');
    }

    function removeFromUnavail(key) {
        return db.ref(`unavailNames/${key}`).remove();
    }


    function getUser(){
        return db.ref('users/' + auth.currentUser.uid).once('value')
    }

    function getUserName(uid){
        return db.ref('users/' + uid + '/userName').once('value')
    }

    function addBlog(blogPack){
        return db.ref('blogs/').push().set({
            author: blogPack.author,
            title: blogPack.title,
            content: blogPack.content,
            authorID: blogPack.authorID,
            visible: true,
            date: new Date().toLocaleString()
        })
    }

    function addComment(commentPack){
        return db.ref(`blogs/${currentBlog.key}/comments/`).push().set({
            author: commentPack.author,
            comment: commentPack.comment,
            authorID: auth.currentUser.uid,
            visible: true,
            date: new Date().toLocaleString()
        })
    }

    async function pullComments(){
        const commentRef = db.ref(`blogs/${currentBlog.key}/comments/`);
        try {
            commentRef.on('value', (snapshot) => {
                setComments([]);
                snapshot.forEach((comment) => {
                    setComments(comments => [...comments, {key: comment.key, data:comment.val()}])
                })
            })
        } catch(err) {
            setError(err)
        }
    }



    async function pullBlogs(){
        const blogsRef = db.ref('blogs/');
        try {
            blogsRef.on('value', (snapshot) => {
                setBlogs([]);
                snapshot.forEach((blog) => {
                    setBlogs(blogs => [...blogs, {key: blog.key, data: blog.val()}])
                })
            })
        } catch(err) {
            setError(err)
        }
    }

    useEffect(() => {
        pullBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    function makeBlogCurrent(blogKey){
        return (
            setCurrentBlog(blogKey)
        )
    }


    const value = {
        addCurrentUserToDB,
        updateUserSettings,
        checkUnavailNames,
        getUser,
        removeFromUnavail,
        addToUnavailNames,
        addBlog,
        deleteBlog,
        getUserName,
        blogs,
        makeBlogCurrent,
        setCurrentBlog,
        currentBlog,
        addComment,
        pullComments,
        comments,
        deleteComment
    }

    return (
        <DBContext.Provider value={value}>
            { children }
        </DBContext.Provider>
    )

}