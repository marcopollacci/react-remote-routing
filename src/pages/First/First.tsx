import {Link} from "wouter";
import Hi from "../../components/Hi/Hi.tsx";
import {useState} from "react";
import {lazyLoadComponent} from "../../helpers/lazy.helper.ts";

const LazyHi = lazyLoadComponent('LazyHi')
export default function Refactor() {
    const [showHi, setShowHi] = useState(false);

    return (
        <div>
            <button onClick={() => setShowHi(!showHi)}>Toggle Hi and LazyHi</button>
            {showHi && <><Hi/><LazyHi/></>}
            <Link to="/">Home</Link>
        </div>
    )
}