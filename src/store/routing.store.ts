import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {getCurrentPageType, LoadingComponentProps} from "../interfaces/loadingComponent.ts";
import {staticRouting} from "../routing/routing.static.ts";
import {createTrackedSelector} from "react-tracked";

interface RoutingStoreInterface {
    listOfPages: LoadingComponentProps[];
    rewriteListOfPages: (listOfPages: LoadingComponentProps[]) => void;
    getCurrentPage: (location: string) => getCurrentPageType;
}

const EMPTY_PAGE: getCurrentPageType = {
    path: "",
    name: ""
};


const routingStore = create<RoutingStoreInterface>()(
    devtools((set, _get) => ({
        listOfPages: staticRouting,
        rewriteListOfPages: (listOfPages: LoadingComponentProps[]) => {
            set({listOfPages});
        },
        getCurrentPage: (location: string) => {
            const pageRequested = _get().listOfPages.find((page) => page.path === location);
            if (!pageRequested) {
                return EMPTY_PAGE;
            }
            return {
                path: pageRequested.path,
                name: pageRequested.name,
            } as getCurrentPageType;
        }
    }))
);

export const useRoutingStore = createTrackedSelector(routingStore);

