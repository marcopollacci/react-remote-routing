import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {lazyLoadComponent} from "./helpers/lazy.helper.ts";
import {LoadingComponentFromBEProps} from "./interfaces/loadingComponent.ts";

interface EmptyInterface {
}

const routingFetch = await fetch('http://127.0.0.1:3000/')
const routingData = await routingFetch.json() as LoadingComponentFromBEProps[];
const routingMapped = routingData.map((route) => {
    return {
        ...route,
        component: lazyLoadComponent<EmptyInterface>(route.component, 'pages')
    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App routing={routingMapped}
        />
    </React.StrictMode>,
)
