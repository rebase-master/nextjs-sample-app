import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Navbar() {
    return (
    <>
        <nav className={styles.navbar}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    </>
    )
}
