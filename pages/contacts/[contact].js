import Header from "../../Components/Header";
import Navbar from "../../Components/navbar";
import styles from "@/styles/Home.module.css";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import contacts from "../api/contacts";

import { useRouter } from "next/router";

export default function Contact() {
    const router = useRouter()
    const { contact } = router.query
    const person = contacts.find(person => person.id === contact)
    console.log("person: ", person);
    return (
        <>
            <Header />
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar />
                <div>
                    <h1>Contact Info</h1><br/>
                    <p>Name: {person.name}</p>
                    <p>Country: {person.country}</p>
                </div>
            </main>
        </>
    )
}