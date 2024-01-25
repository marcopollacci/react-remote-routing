import { Link } from "wouter";
import { useRoutingStore } from "../../store/routing.store.ts";

export default function PageNotFound() {
  const { getHomePage } = useRoutingStore();
  const { name, path } = getHomePage();
  return (
    <div>
      <h1>404</h1>
      <Link to={path}>{name}</Link>
    </div>
  );
}
