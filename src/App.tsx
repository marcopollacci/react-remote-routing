import { Suspense } from "react";
import "./App.css";
import { Routing } from "./routing/routing.tsx";
import { LoadingComponentProps } from "./interfaces/loadingComponent.ts";
import NamingPage from "./components/NamingPage/NamingPage.tsx";

interface RoutingProps {
  routing: LoadingComponentProps[];
}

function App({ routing }: Readonly<RoutingProps>) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <NamingPage />
      <Routing loadingComponent={routing} />
    </Suspense>
  );
}

export default App;
