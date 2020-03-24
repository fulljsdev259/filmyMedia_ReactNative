import React from "react";
import arrow from "../../assets/back.png";

export default function NextPrePage({ pageNo, handlePage, pageFor }) {
  return (
    <div
      className="page-icon-wrapper"
      style={{ justifyContent: pageNo === 1 ? "flex-end" : "space-between" }}
    >
      {pageNo > 1 && (
        <div
          className="page-handle-wrapper"
          onClick={() => handlePage(pageNo, "pre", pageFor)}
        >
          <img src={arrow} alt='left-arrow' />
          <div>Previous Page</div>
        </div>
      )}
      <div
        className="page-handle-wrapper"
        onClick={() => handlePage(pageNo, "next", pageFor)}
      >
        <div>Next Page</div>
        <img className='right-arrow' src={arrow} alt='right-arrow'/>
      </div>
    </div>
  );
}
