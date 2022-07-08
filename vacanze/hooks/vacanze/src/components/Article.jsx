import React from "react";

const Article = ({title, description, time, price, img, nextPage, backPage}) => {
  return (
    <article className="article_holidays">
      <img src={img} alt={title}></img>
      <div className="text">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="time_price">
          <small>{time}</small>
          <h5 style={{ color:"#3892c2" }}>{price}</h5>
        </div>
        <div className="btn_group">
          <button className="back" onClick={() => backPage()}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8" transform="matrix(-1 0 0 1 24 0)"></path></svg>
          </button>
          <button className="next" onClick={() => nextPage()}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"></path></svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Article;
