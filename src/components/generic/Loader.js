import React from "react";
import CustomLoader from "./CustomLoader";

export default function Loader({ message, isLoading }) {
  if (isLoading) {
    return (
      <div className="loader-wrapper">
        <CustomLoader size={'md'} />
      </div>
    );
  } else if (message !== "") {
    return (
      <div >
        <span>{message}</span>
      </div>
    );
  } else return null;
}
