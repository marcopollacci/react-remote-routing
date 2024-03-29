import {ComponentType, lazy, LazyExoticComponent} from "react";
import PageNotFound from "../components/PageNotFound/PageNotFound.tsx";

export function lazyLoadComponent<T>(
    nameImportComponent: string,
    startingFolder = "components"
) {
    return lazy(() =>
        import(
            `../${startingFolder}/${nameImportComponent}/${nameImportComponent}.tsx`
            ).then((module) => ({
            default: module.default,
        })).catch(
            () => {
                return {default: PageNotFound};
            }
        )
    ) as LazyExoticComponent<ComponentType<T>>;
}
