import { useLocation } from "react-router-dom";

// TODO: Solution for not using `any` as return typehint?
function useQueryParam(name: string): any {
  const query = new URLSearchParams(useLocation().search);
  if (!query.has(name)) {
    throw new Error(`No query parameter with name ${name} found.`);
  }
  return query.get(name);
}

export default useQueryParam;
