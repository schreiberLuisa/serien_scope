import {TextField} from "@mui/material";

interface ISearchBarProps {
    setSearchQuery: (query: string) => void;
}

const SearchBar = ({setSearchQuery}: ISearchBarProps) => {
    return (
        <form action="">
            <TextField
                id={"search-bar"}
                className={"text"}
                onInput={(e) => setSearchQuery(e.target.value)}
                placeholder={"Search..."}
            />
        </form>
    )
}
export default SearchBar;