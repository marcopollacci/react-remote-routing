import {LoadingComponentProps} from "../interfaces/loadingComponent.ts";
import {lazyLoadComponent} from "../helpers/lazy.helper.ts";

export const staticRouting: LoadingComponentProps[] = [
    {
        path: "/second",
        component: lazyLoadComponent('Second', 'pages'),
        name: "Second - Internal",
    }
]
