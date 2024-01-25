import {useLocation} from "wouter";
import {useRoutingStore} from "../../store/routing.store.ts";

export default function NamingPage() {
    const [location] = useLocation();
    const {getCurrentPage} = useRoutingStore();
    const {name} = getCurrentPage(location);
    return (
        <h1>{name}</h1>
    )
}