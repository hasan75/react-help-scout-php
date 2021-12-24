import React from "react";
import "./List.css";

function List(props) {
  const { listTitle, listData } = props;
  return (
    <>
      <p className="fs-16px white graphik-medium mb-20px">{listTitle}</p>
      <div className="footer-list">
        {listData?.map((data, index) => (
          <>
            <div className="footer-list-item">
              <a href={data?.link} className="fs-14px gray hovered-link block">
                {data.title}
                {data.revenu ? (
                  <span class="revenu-badge" color="CHARCOAL">
                    ▲ 99.99%
                  </span>
                ) : (
                  ""
                )}
                {data.to ? (
                  <svg
                    width="7"
                    height="7"
                    viewBox="0 0 7 7"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                  >
                    <g fill="#72808E" fill-rule="evenodd">
                      <path d="M7 0v7L0 0z"></path>
                      <path
                        fill-rule="nonzero"
                        d="M1 7.414L-.414 6 5 .586 6.414 2z"
                      ></path>
                    </g>
                  </svg>
                ) : (
                  ""
                )}
              </a>
              {data.new ? <div className="new-badge">New</div> : ""}
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default List;
