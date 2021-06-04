import React from "react";
import { useTranslation } from 'next-i18next';
import Title from "../components/title";

const PoolInfo = () => {
  const { t } = useTranslation('pool-info');
  return (
    <div className="bg-green-chia-dark3 pt-36 pb-16 px-5 sm:px-0 bg-iPhone-information lg:bg-iPhone-back-info-position md:bg-pool-back-info-position-tablet bg-pool-back-info-position-mobile lg:bg-iPhone-back-info-size md:bg-pool-back-info-size-tablet bg-pool-back-info-size-mobile bg-no-repeat lg:h-pool-info md:h-pool-info-tablet">
      <div className="container mx-auto">
        <div className="md:w-80 lg:w-auto">
          <img className="w-20" src="images/Group 1.png" />
          <Title>{t('title-pool-info')}</Title>
          <span className="text-green-chia-dark1 text-lg">
          {t('subtitle-pool-info-1')}<br/>{t('subtitle-pool-info-2')}
          </span>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-5 ">
            <div className="mt-9 sm:grid lg:grid-cols-2">
              <div className="mb-5">
                <img className="w-11" src="/images/pool-info/comision.png" />
                <div className="text-4xl sm:text-5xl font-bold text-green-chia-lime mt-2 font-gibson-light">
                  1%
                  <span className="text-green-chia-lime text-2xl font-gibson-light">{t('or-less')}</span>
                </div>
                <div className="text-2xl sm:text-lg">{t('commission')}</div>
              </div>
              <div className="mb-5">
                <img className="w-11" src="/images/pool-info/size.png" />
                <div className="text-4xl sm:text-4.5xl font-bold text-green-chia-lime mt-4 font-gibson-light">
                  <span>53.69 </span>
                  <span className="font-light">PiB</span>
                </div>
                <div className="text-2xl sm:text-lg">{t('pool-size')}</div>
              </div>

              <div className="mb-5 lg:mt-10">
                <img className="w-11" src="/images/pool-info/crecimiento.png" />
                <div className="text-4xl sm:text-5xl font-bold text-green-chia-lime mt-5 font-gibson-light">
                  15%
                </div>
                <div className="text-2xl sm:text-lg">
                  {t('growth-rate')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolInfo;
