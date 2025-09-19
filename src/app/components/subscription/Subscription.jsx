import React from "react";

export default function Subscription() {
  return (
    <div>
      <h3>GELİŞMELERDEN İLK SEN HABERDAR OL!</h3>
      <form>
        <div className="form-row">
          <input type="email" className="form-control" placeholder="EMAIL"></input>
          <button type="submit" className="btn btn-default btn-submit">
            <span>Gönder</span>
            <span>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 6.1998H11.1045"
                  stroke="#F0E74D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.30176 1.39755L11.104 6.1998L6.30176 11.002"
                  stroke="#F0E74D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
