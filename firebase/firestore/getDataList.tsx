import firebase_app from "../config";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function getDataList(collectioName: string) {
    let result: any[] = [];

    let docRef = collection(db, collectioName);
    let error = null;

    try {
        const querySnapshot = await getDocs(docRef);

        querySnapshot.forEach((doc) => {
            result.push({...doc.data(), id: doc.id })
        })
    } catch (e) {
        error = e;
    }

    return { data: result, error: error };
}
