import React from "react";
import { useTranslation } from 'next-i18next';
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const AppBar = () => {
  const { t } = useTranslation('app-bar');
  return (
    <div className="sticky top-0 z-10 px-5 align-middle bg-green-chia-dark4">
      <div className="mx-auto container grid grid-cols-2 ">
        <div className="flex place-items-center my-2">
          <img className="logoHeader" src="images/Group 20.png" />
        </div>

        <div className="py-2 flex items-center justify-end">
          <FontAwesomeIcon
            icon={faShareAlt}
            className="mx-6 hidden md:inline-block text-sm"
          />
          <a 
            className="bg-transparent hover:bg-green-500 text-green-chia-lime font-gibson-light hover:text-white py-2 px-5 border border-green-500 hover:border-transparent rounded text-sm"
            href="/app"
          >
            {t('btn-register')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
