import React from "react";
import { useTranslation } from 'next-i18next';
import Slider from "react-slick";
import Title from "../components/title";
import CardMember from "./card_member";
import Members from "../utils/members.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardMemberList = () => {
  const { t } = useTranslation('card_member_list');

  const settings = {
    dots: true,
    infinite: true,
    rows: 2,
    slidesPerRow: 4,
    arrows: true,
    nextArrow: <Arrow type="next" />,
    prevArrow: <Arrow type="prev" />,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesPerRow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          rows: 2,
          slidesPerRow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          rows: 2,
          slidesPerRow: 1,
        }
      }
    ]
  };

  function Arrow(props) {
    let className = props.type === "next" ? "next" : "prev";
    className += " arrow";
    return (
      <span className={className} onClick={props.onClick}>
      </span>
    );
  }

  const CardMembers= Members.map((member,index) => (
    <div key={index}>
      <CardMember member={member}/>
    </div>
  ));

  return (
    <div className="bg-green-chia-dark3 pt-4 pb-5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mt-24 text-center px-5 sm:px-0">
          <img className="w-20" src="images/Group 1.png" />
          <Title>{t('title-members')}</Title>
        </div>

        <div className="">
          <Slider {...settings} className="my-24 text-center">

            {
              CardMembers
            }
            
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CardMemberList;
