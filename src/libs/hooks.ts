import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const concatSearch = (old: string, search: string) => {
  const searchParams = new URLSearchParams(old);
  const newParams = new URLSearchParams(search);

  newParams.forEach((value, key) => {
    searchParams.set(key, value);
  });

  return searchParams.toString();
};

export const usePaginationSearch = () => {
  const loc = useLocation();
  const nav = useNavigate();

  const pagination = useMemo(() => {
    const search = new URLSearchParams(loc.search);
    const _page = parseInt(search.get("page") || "0", 10);
    const _limit = parseInt(search.get("limit") || "10", 10);

    return { page: _page, limit: _limit };
  }, [loc.search]);

  const change = (input: { page?: number; limit?: number }) => {
    nav({
      search: concatSearch(
        loc.search,
        `?page=${input.page !== undefined ? input.page : pagination.page}&limit=${input.limit !== undefined ? input.limit : pagination.limit}`
      ),
    });
  };

  return [pagination, change] as const;
};

export const useParamSearch = <T extends string>(
  name: string,
  _default: T,
  replace?: boolean
) => {
  const loc = useLocation();
  const nav = useNavigate();

  const val = useMemo(() => {
    const search = new URLSearchParams(loc.search);
    return search.get(name) || _default;
  }, [loc.search]);

  const change = (val: T) => {
    nav(
      {
        search: concatSearch(window.location.search, `?${name}=${val}`),
      },
      {
        replace,
      }
    );
  };

  return [val as T, change] as const;
};

export const usePageModeSearch = (id: string) => {
  const loc = useLocation();
  const nav = useNavigate();

  const pageMode = useMemo(() => {
    const search = new URLSearchParams(loc.search);
    let mode: "edit" | "view" = (search.get("mode") as any) || "view";

    console.log(loc.search.replaceAll("?", ""));

    const initial = id == "0";
    if (initial) mode = "edit";
    const [editing, viewing] = [mode === "edit", mode === "view"];

    return { mode, editing, viewing, initial };
  }, [loc.search, id]);

  const change = (mode: "edit" | "view") => {
    nav({
      search: concatSearch(loc.search, `?mode=${mode}`),
    });
  };

  return [pageMode, change] as const;
};
