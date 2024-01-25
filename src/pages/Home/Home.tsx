import {Link} from "wouter";
import {useRoutingStore} from "../../store/routing.store.ts";

export default function Home() {
    const {listOfPages} = useRoutingStore();
    return (
        <>
            <h1>Home</h1>
            {listOfPages.map((page) =>
                <p key={page.path}><Link to={page.path}>{page.name}</Link></p>
            )}
        </>
    )
}