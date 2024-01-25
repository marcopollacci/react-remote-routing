import { Link } from "wouter";
import Hi from "../../components/Hi/Hi.tsx";
import { useState } from "react";
import { lazyLoadComponent } from "../../helpers/lazy.helper.ts";
import { useRoutingStore } from "../../store/routing.store.ts";

const LazyHi = lazyLoadComponent("LazyHi");
export default function Refactor() {
  const [showHi, setShowHi] = useState(false);
  const { getHomePage } = useRoutingStore();
  const { name, path } = getHomePage();

  return (
    <div>
      <button onClick={() => setShowHi(!showHi)}>Toggle Hi and LazyHi</button>
      {showHi && (
        <>
          <Hi />
          <LazyHi />
        </>
      )}
      <Link style={{ marginTop: "1em", display: "block" }} to={path}>
        {name}
      </Link>
    </div>
  );
}
