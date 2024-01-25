import { Route, Switch } from "wouter";
import { LoadingComponentProps } from "../interfaces/loadingComponent.ts";
import { staticRouting } from "./routing.static.ts";
import { useMemo } from "react";
import { useRoutingStore } from "../store/routing.store.ts";

interface RoutingProps {
  loadingComponent: LoadingComponentProps[];
}

export function Routing({ loadingComponent }: Readonly<RoutingProps>) {
  const allRoutes = useMemo(
    () => [...loadingComponent, ...staticRouting],
    [loadingComponent],
  );
  const { rewriteListOfPages } = useRoutingStore();
  rewriteListOfPages(allRoutes);

  return (
    <Switch>
      {allRoutes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
}
