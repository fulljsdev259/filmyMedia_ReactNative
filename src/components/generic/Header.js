import React from "react";
import homeIcon from "../../assets/home-icon.png";
import searchIcon from "../../assets/search-icon.png";
import CustomLoader from "../generic/CustomLoader";
import DebounceInput from "react-debounce-input";

export default function Header({
  handleSearch,
  search,
  isLoading,
  handleClearSearch,
  query,
  ...props
}) {
  return (
    <div className="app-header">
      {!search && <h5>Movie Details</h5>}
      {search && (
        <div className="search-wrapper">
          <img className="home-icon" src={searchIcon} alt="search-icon" />
          <DebounceInput
            className="search-input"
            value={query}
            debounceTimeout={200}
            forceNotifyOnBlur={false}
            placeholder='Search'
            onChange={e => handleSearch(e.target.value)}
          />
          {!isLoading && search && query !== "" && (
            <span onClick={() => handleClearSearch()} className="cross-icon">
              X
            </span>
          )}
          {isLoading && <CustomLoader size="sm" />}
        </div>
      )}
      <div onClick={()=>props.history.push('/')} className="home-icon-wrapper">
        <img className="home-icon" src={homeIcon} alt="home-icon" />
      </div>
    </div>
  );
}
