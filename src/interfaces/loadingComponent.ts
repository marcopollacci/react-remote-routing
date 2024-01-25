import {ComponentType, LazyExoticComponent} from "react";

export interface LoadingComponentProps {
    path: string;
    component: LazyExoticComponent<ComponentType<any>>;
    name: string;
}

export interface LoadingComponentFromBEProps {
    path: string;
    component: string;
    name: string;
}