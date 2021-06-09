import React from "react";
import { useTranslation } from 'next-i18next';
import Title from "../components/title";

const PoolInfo = () => {
  const { t } = useTranslation('pool-info');
  return (
    <div className="
      bg-green-chia-dark3 
      bg-iPhone-information
      bg-pool-back-info-position-mobile
      bg-pool-back-info-size-mobile
      bg-no-repeat
      h-pool-info-mobile
      pt-28 
      pb-16 
      px-5 
      sm:px-0
      sm:pt-36 
      md:bg-pool-back-info-position-tablet
      md:bg-pool-back-info-size-tablet
      md:h-pool-info-tablet
      lg:bg-iPhone-back-info-position 
      lg:bg-iPhone-back-info-size
      lg:h-pool-info-lg
      xl:bg-pool-back-info-position-xl
      xl:h-pool-info-xl 
      2xl:bg-pool-back-info-position-2xl
      2xl:h-pool-info-2xl">
      <div className="container mx-auto">
        <div className="md:w-80 lg:w-auto">
          <img className="w-20" src="images/Group 1.webp" />
          <Title>{t('title-pool-info')}</Title>
          <span className="text-green-chia-dark1 text-lg">
          {t('subtitle-pool-info-1')}<br/>{t('subtitle-pool-info-2')}
          </span>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-5 ">
            <div className="mt-9 sm:grid lg:grid-cols-2">
              <div className="mb-5">
                <img className="w-11" src="/images/pool-info/comision.webp" />
                <div className="text-4xl sm:text-5xl font-bold text-green-chia-lime mt-2 font-gibson-light">
                  1%
                  <span className="text-green-chia-lime text-2xl font-gibson-light">{t('or-less')}</span>
                </div>
                {/* <div className="text-2xl sm:text-lg">{t('commission')}</div> */}
              </div>
              <div className="mb-5">
                <img className="w-11" src="/images/pool-info/size.webp" />
                <div className="text-3xl sm:text-3xl font-bold text-green-chia-lime mt-4 font-gibson-light">
                  <span>Próximamente</span>
                  {/* <span className="font-light">PiB</span> */}
                </div>
                {/* <div className="text-2xl sm:text-lg">{t('pool-size')}</div> */}
              </div>

              <div className="mb-5 lg:mt-10">
                <img className="w-11" src="/images/pool-info/crecimiento.webp" />
                <div className="text-3xl sm:text-3xl font-bold text-green-chia-lime mt-5 font-gibson-light">
                Próximamente
                </div>
                {/* <div className="text-2xl sm:text-lg">
                  {t('growth-rate')}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolInfo;
