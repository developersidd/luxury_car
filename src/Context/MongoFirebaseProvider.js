import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
import useMongodb from '../Hooks/useMongodb';

export const MongoFirebaseContext = createContext();

const MongoFirebaseProvider = ({ children }) => {

    const firebaseContext = useFirebase();
    const mongoContext = useMongodb();

    return (
        <MongoFirebaseContext.Provider value={{ mongoContext, firebaseContext }}>
            {children}
        </MongoFirebaseContext.Provider>
    )
}

export default MongoFirebaseProvider
