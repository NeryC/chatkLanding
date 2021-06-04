import React from "react";
import { useTranslation } from 'next-i18next';
import Title from "../components/title";
import Accordion from "./../components/accordion";

const Faq = () => {
  const { t } = useTranslation('faq');
  const hiddenTexts = [
    {
      label: t('label-faq-1'),
      value: t('description-faq-1'),
    },
    {
      label: t('label-faq-2'),
      value: t('description-faq-2'),
    },
    {
      label: t('label-faq-3'),
      value: t('description-faq-3'),
    },
    {
      label: t('label-faq-4'),
      value: t('description-faq-4'),
    },
    {
      label: t('label-faq-5'),
      value: t('description-faq-5'),
    },
    {
      label: t('label-faq-6'),
      value: t('description-faq-6'),
    },
  ];

  return (
    <div className="bg-green-chia-dark3 pt-16">
      <div className="py-14 pb-10 container mx-auto px-5 md:px-0 lg:px-28">
        <img className="w-20" src="images/Group 1.png" />
        <Title>{t('title-faq')}</Title>
        <div className="text-green-chia-dark1 text-lg font-gibson-light">
          {t('subtitle-faq-1')}<br/>{t('subtitle-faq-2')}
        </div>
      </div>

      <div className="bg-green-chia-dark4 pt-10 pb-14">
        <div className=" container mx-auto">
          <Accordion hiddenTexts={hiddenTexts} />
        </div>
      </div>
      <div className="bg-green-chia-dark3"></div>
    </div>
  );
};

export default Faq;
