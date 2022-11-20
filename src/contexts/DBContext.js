import React, { useContext } from 'react';
import { db, auth } from '../firebase';

const DBContext = React.createContext()

export function useDB() {
    return useContext(DBContext)
};

export function DBProvider({ children }){

    function addCurrentUserToDB() {
        return db.ref('users/' + auth.currentUser.uid).set({
            email: auth.currentUser.email
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

    function getUserName(){
        return db.ref('users/' + auth.currentUser.uid + '/userName').once('value')
    }

    function addBlog(blogPack){
        return db.ref('blogs/').push().set({
            author: blogPack.author,
            title: blogPack.title,
            content: blogPack.content,
            date: Date()
        })
    }

    const value = {
        addCurrentUserToDB,
        updateUserSettings,
        checkUnavailNames,
        getUser,
        removeFromUnavail,
        addToUnavailNames,
        addBlog,
        getUserName
    }

    return (
        <DBContext.Provider value={value}>
            { children }
        </DBContext.Provider>
    )

}