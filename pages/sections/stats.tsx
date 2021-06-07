import React from "react";
import { useTranslation } from 'next-i18next';
import {
  faDiscord,
  faInstagram,
  faTelegramPlane,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import StatsItem from "../components/stats-item";
import Title from "../components/title";

const Stats = () => {
  const { t } = useTranslation('stats');
  return (
    <div className="py-24 container mx-auto px-5 sm:px-0">
      <div className="mb-14">
        <img className="w-20" src="images/Group 1.png" />
        <Title>{t('title-stats')}</Title>
        <div className="text-green-chia-dark1 text-lg">
          {t('subtitle-stats')}
        </div>
      </div>
      <div className="lg:flex lg:flex-wrap lg:w-full lg:justify-around grid grid-cols-2 md:grid-cols-3">
        <StatsItem icon={faTelegramPlane} value="+4500" text={t('users-telegram')}/>
        <StatsItem icon={faDiscord} value="+850" text={t('users-discord')} />
        <StatsItem icon={faYoutube} value="+16050" text={t('users-youtube')} />
        <StatsItem icon={faTwitter} value="+16050" text={t('users-twitter')} />
        <StatsItem icon={faInstagram} value="+16050" text={t('users-instagram')}/>
      </div>
    </div>
  );
};

export default Stats;
