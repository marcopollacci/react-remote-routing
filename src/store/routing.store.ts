import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {LoadingComponentProps} from "../interfaces/loadingComponent.ts";
import {staticRouting} from "../routing/routing.static.ts";
import {createTrackedSelector} from "react-tracked";

interface RoutingStoreInterface {
    listOfPages: LoadingComponentProps[];
    rewriteListOfPages: (listOfPages: LoadingComponentProps[]) => void;
}

const routingStore = create<RoutingStoreInterface>()(
    devtools((set, _get) => ({
        listOfPages: staticRouting,
        rewriteListOfPages: (listOfPages: LoadingComponentProps[]) => {
            set({listOfPages});
        },
    }))
);

export const useRoutingStore = createTrackedSelector(routingStore);

