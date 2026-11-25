import { SearchIcon } from "./Icons";

interface SearchProps {
  query: string;
  setQuery: (val: string) => void;
}

function Search({ query, setQuery }: SearchProps) {
  return (
    <div className="mb-5.5 flex flex-col gap-3 sm:flex-row sm:items-center">
      <label className="search-box">
        <SearchIcon />
        <span className="sr-only">Search models</span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search models, e.g. iPhone 15"
          className="flex-1 border-0 bg-transparent text-[15px] text-ink outline-none placeholder:text-muted"
        />
      </label>
      <span className="flex h-12 items-center justify-center rounded-xl bg-brand-100 px-4 text-sm font-semibold text-brand-700">
        Smartphone · Apple
      </span>
    </div>
  );
}

export default Search;
