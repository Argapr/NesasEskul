import { useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddToFirestoreForm = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "messages"), {
                name: name,
                message: message,
            });
            console.log("Document written with ID: ", docRef.id);
            setName('');
            setMessage('');
            alert("Data added to Firestore DB!");
        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Failed to add data to Firestore DB!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddToFirestoreForm;
