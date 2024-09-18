import {
  Firestore,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore/lite";

export const getPlayers = async (db: Firestore) => {
  const playersCollection = collection(db, "players");
  const playersSnapshot = await getDocs(playersCollection);
  return playersSnapshot.docs.map((doc) => doc.data());
};

export const createPlayer = async (db: Firestore, name: string) => {
  const playersCollection = collection(db, "myCollectionName");
  try {
    const docRef = await addDoc(playersCollection, { name });
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
