import React from "react";
import { useTranslation } from 'next-i18next';
import Title from "../components/title";
import Tool from "../components/tool";

const Tools = () => {
  const { t } = useTranslation('tools');
  return (
    <div className="bg-green-chia-dark3 pb-28">
      <div className="pt-6 container mx-auto">
        <div className="flex flex-col items-center my-20 text-center">
          <img className="w-20" src="images/Group 1.png" />
          <Title>{t('title-tools')}</Title>
          <div className="pt-1 text-green-chia-dark1 text-lg">
            {t('subtitle-tools')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 lg:gap-x-3 lg:gap-y-16">
          <div className="relative bg-green-chia-lime text-white rounded-lg sm:col-span-2 p-5 text-green-chia-dark3">
            <div className="flex justify-between">
              <div className="flex self-start mt-7">
                <img className="w-18" src="/images/kit/tool-pool-dark.png" />
              </div>
              <div className="absolute right-0">
                <img className="w-68 md:mr-12" src="/images/kit/pool-coins-dark.png" />
              </div>
            </div>
            <div className="text-1xl my-5">Pool</div>
            <div className="mb-5 text-sm">
              <span>
                {t('pool-description')}
              </span>
            </div>
          </div>
          <Tool
            title="Wallet"
            imageUrl="/images/kit/wallet.png"
          >
            {t('wallet-description')}
          </Tool>

          <Tool
            title="Academy"
            imageUrl="/images/kit/academy.png"
          >
            {t('academy-description')}
          </Tool>

          <Tool
            title="Plots Market"
            imageUrl="/images/kit/plot-exchange.png"
          >
            {t('plots-market-description')}
          </Tool>

          <Tool
            title="Easy Farm"
            imageUrl="/images/kit/farm.png"
          >
            {t('easy-farm-description')}
          </Tool>

          <Tool
            title="Plot Master"
            imageUrl="/images/kit/plot-master.png"
          >
            {t('plot-master-description')}
          </Tool>

          <Tool
            title="Calculator"
            imageUrl="/images/kit/calc.png"
          >
            {t('calculator-description')}
          </Tool>

          <Tool
            title="Community"
            imageUrl="/images/kit/calc.png"
          >
            {t('community-description')}
          </Tool>
        </div>
      </div>
    </div>
  );
};

export default Tools;
