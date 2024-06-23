import { useRouter } from "next/router"
import topics from "../api/default"

export default function Learn() {
    const router = useRouter()
    const { name } = router.query
    const topic = topics.find(topic => topic.id === name)

    return (
        <h1>Learn {topic.id}</h1>
    )
}

