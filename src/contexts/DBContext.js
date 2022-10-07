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
    function updateUserSettings(email, userName) {
        const newValues = {
            'email': email,
            'userName': userName
        }
        const update = {}
        update['users/' + auth.currentUser.uid] = newValues
        return db.ref().update(update)
    }

    function getUser(){
        return db.ref('users/' + auth.currentUser.uid).once('value')
    }

    const value = {
        addCurrentUserToDB,
        updateUserSettings,
        getUser
    }

    return (
        <DBContext.Provider value={value}>
            { children }
        </DBContext.Provider>
    )

}