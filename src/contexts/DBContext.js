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

    function addBlog(author, title, content){
        return db.ref('blogs/').push().set({
            author: author,
            title: title,
            content: content,
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
        addBlog
    }

    return (
        <DBContext.Provider value={value}>
            { children }
        </DBContext.Provider>
    )

}