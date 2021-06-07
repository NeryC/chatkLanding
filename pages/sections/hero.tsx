import { useTranslation } from 'next-i18next';
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [data, setData] = useState({ price: 0, net_space:"0" });
  const { t } = useTranslation('hero');

  useEffect(() => {
    fetch('https://us-central1-basic-zenith-312516.cloudfunctions.net/getSpaceAndPrice')
    .then(response => response.json())
    .then(function(response) {
      setData(
        {
          price: response.data.price,
          net_space:(response.data.net_space/1000000000000000000).toFixed(3)
        }
      );
    })
    .catch(function(error) {
      console.log(error)
    });
  },[]);
  return (
    <div className="sm:bg-hero-pattern bg-no-repeat lg:bg-hero-lg sm:bg-hero-md bg-none">
      <div className="
        grid 
        grid-cols-1 
        mt-0 
        container mx-auto
        sm:grid-cols-2 
        sm:bg-iPhone-in-Hand
        sm:bg-no-repeat
        sm:h-hero-spacing-tablet
        sm:bg-contain
        sm:bg-iPhone-back-size-tablet
        sm:bg-iPhone-back-position-tablet
        lg:bg-iPhone-back-position
        lg:h-hero-spacing 
        lg:bg-iPhone-back-size 
        xl:bg-iPhone-back-position-xl
        2xl:bg-iPhone-back-position-2xl">
        <div className="flex flex-col flex-none self-center md:place-items-start py-10 px-5 sm:px-0">
          <div className="text-5xl sm:text-hero text-green-chia-lime">
            Chia ToolKit
          </div>
          <div className="text-3xl sm:text-hero-description pt-2 flex flex-col sm:flex-none sm:inline-block">
            <span>
              {t('essential-tools')}<br />{t('for-the-cripto')}
            </span>
            <span className="text-4xl sm:text-5xl text-green-chia-lime sm:ml-2 ">
              Chia
            </span>
          </div>
          <div className="mt-5 sm:mt-10">
            <div className="text-green-chia-dark1 descriptionHero">
              <div className="flex flex-row">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mr-2 mt-0.5 text-green-chia-lime "
                />
                <div>{t('complete-infrastructure')}</div>
              </div>
              <div className="flex flex-row">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mr-2 mt-0.5 text-green-chia-lime "
                />
                <div>{t('coming-soon')}</div>
              </div>
            </div>
            <div className="mt-14 sm:mt-20">
              <a
                className="px-4 py-4 mr-2 rounded bg-green-chia-lime font-gibson-light buttonsHero"
                href="https://app.chiatk.com/"
              >
                {t('access-the-app')}
              </a>

              <a
                className="px-6 py-4 rounded text-green-400 border-green-400 border text-center buttonsHero"
                href="https://www.youtube.com/watch?v=X6sROJaRllA&t=1s"
                target="_blank"
              >
                {t('watch-video')}
                <FontAwesomeIcon
                  icon={faPlayCircle}
                  className=" text-green-chia-lime"
                />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:flex mt-7">
              <img className="sm:mr-2 h-9 w-28 hidden" src="/images/Group 14.png" />
              <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank">
                <img className="h-9 w-28" src="/images/Group 15.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="left-8 md:left-2 md:bottom-26 lg:bottom-48 lg:left-24 2xl:left-32 2xl:bottom-60 bottom-48 backdrop-filter backdrop-blur-3xl  absolute rounded-xl">
            <div className="py-3 px-3">
              <div>
                <span className="bubblesHeroDescription">
                  1.954
                </span>
                <div className="text-green-chia-lime bubblesHero">
                  {t('registered-in-chiatk')}
                </div>
              </div>
            </div>
          </div>

          <div className="top-16 left-14 md:top-64 md:left-0 xl:left-28 lg:top-20 lg:left-16 2xl:left-32 backdrop-filter backdrop-blur-xs  absolute rounded-xl">
            <div className="py-2 px-6">
              <div className="text-green-chia-lime bubblesHero text-center">
                {t('total-network-space')}
              </div>
              <span className="bubblesHeroDescription">
                {data.net_space} EiB
              </span>
            </div>
          </div>

          <div className="top-32 right-5 md:right-2 xl:right-0 lg:right-16 md:top-80 lg:top-1/4 backdrop-filter backdrop-blur-3xl  absolute rounded-xl">
            <div className="py-2 px-3">
              <div>
                <div className="text-green-chia-lime bubblesHero text-center">
                  XCH/USDT
                </div>
                <span className="bubblesHeroDescription">
                  ≈ ${data.price}
                </span>
              </div>
            </div>
          </div>
          <div className="sm:hidden">
            <img src="/images/iPhone-in-Hand-Mockup.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
