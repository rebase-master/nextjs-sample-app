import Header from "../Components/Header";
import Navbar from "../Components/navbar";
import styles from "@/styles/Home.module.css";
import {Inter} from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import contacts from "./api/contacts";
import Link from "next/link";

export default function Contacts() {
    return (
        <>
            <Header />
            <main className={`${styles.main} ${inter.className}`}>
                <Navbar />
                <div>
                    <h1>Contacts List</h1>
                    <ul>
                        {contacts.map((contact) => {
                            return (
                                <li>
                                    <Link href={`/contacts/${contact.id}`}>
                                        {contact.name}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </main>
        </>
    )
}