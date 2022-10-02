import React, { useContext } from 'react';
import { db, auth } from '../firebase';

const DBContext = React.createContext()

export function useDB() {
    return useContext(DBContext)
};

export function DBProvider({ children }){

    function addCurrentUserToDB() {
        return db.ref('users/' + auth.currentUser.uid).set({
            uid: auth.currentUser.uid,
            email: auth.currentUser.email
        })
    }

    const value = {
        addCurrentUserToDB
    }

    return (
        <DBContext.Provider value={value}>
            { children }
        </DBContext.Provider>
    )

}