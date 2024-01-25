import {Suspense} from 'react'
import './App.css'
import {Routing} from "./routing/routing.tsx";
import {LoadingComponentProps} from "./interfaces/loadingComponent.ts";

interface RoutingProps {
    routing: LoadingComponentProps[];
}

function App({routing}: Readonly<RoutingProps>) {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Routing loadingComponent={routing}/>
        </Suspense>
    )
}

export default App
