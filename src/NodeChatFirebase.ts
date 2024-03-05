import { db } from "./Config";
import { addDoc, collection, limit, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";

interface ISendMessage {
    message: String
}

export const SendMessage = async (props : ISendMessage) => {

  const { message } = props;

  await addDoc(collection(db, "messages"), {
    text: message,
    createdAt: serverTimestamp(),
  });
};

export const GetMessage = async () => {
  const q = query(
    collection(db, "messages"),
    orderBy("createdAt", "desc"),
    limit(50)
  );

  const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
    const fetchedMessages = [];
    QuerySnapshot.forEach((doc) => {
      fetchedMessages.push({ ...doc.data(), id: doc.id });
    });
    const sortedMessages = fetchedMessages.sort(
      (a, b) => a.createdAt - b.createdAt
    );
    return sortedMessages;
  });
  return unsubscribe;
}