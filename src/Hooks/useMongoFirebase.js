import { useContext } from "react"
import { MongoFirebaseContext } from "../Context/MongoFirebaseProvider"

const useMongoFirebase = () => {
    return useContext(MongoFirebaseContext);
}

export default useMongoFirebase
