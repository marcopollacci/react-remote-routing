import {LoadingComponentProps} from "../interfaces/loadingComponent.ts";
import {lazyLoadComponent} from "../helpers/lazy.helper.ts";

export const staticRouting: LoadingComponentProps[] = [
    {
        path: "/pluto",
        component: lazyLoadComponent('Pluto', 'pages'),
        name: "Pluto - Internal",
    }
]
