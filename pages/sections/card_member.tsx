import React from "react";

const CardMember = ({member}) => {
  return (
    <>
      {
        member && <div className="news-card mx-6 sm:mx-2 mb-8 w-auto lg:h-cardImage md:h-cardImage-md h-cardImage-sm">
          <img src={member.img} alt="" className="news-card__image "/>
          <div className="news-card__text-wrapper w-full">
            <h2 className="news-card__title font-bold">{member.name}</h2>
            <div className="news-card__position font-gibson-light">{member.position}</div>
            <div className="news-card__details-wrapper">
              <p className="news-card__excerpt font-gibson-light">{member.country}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CardMember;
