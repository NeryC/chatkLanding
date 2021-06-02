import {
  faDiscord,
  faInstagram,
  faTelegramPlane,
  faTwitter,
  faYoutube,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div className="py-5 container mx-auto px-5 md:px-0 lg:px-28">
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-3">
        <div className="flex flex-col justify-center">
          <div><img className="mb-10" src="images/Group 20.png" /></div>
          <div className="text-xl">Descarga la App</div>
          <div className="flex mt-5">
            <img src="/images/Group 14.png" className="mr-2 hidden" />
            <a href="https://play.google.com/store/apps/details?id=com.chiatk.apps.movil" target="_blank">
              <img src="/images/Group 15.png" />
            </a>
          </div>
        </div>

        <div className="p-5 sm:flex justify-center hidden">
          <img src="images/coin.png" />
        </div>

        <div className="flex flex-col justify-center">
          <div className="my-5 flex flex-wrap justify-start md:justify-center lg:justify-end text-4xl sm:text-3xl">
            <a href="http://bit.ly/ChiatkTelegram" target="_blank">
              <FontAwesomeIcon
                icon={faTelegramPlane}
                className="mx-2 p-1 text-green-chia-lime"
              />
            </a>
              
            <a href="http://bit.ly/ChiatkDiscord" target="_blank">
              <FontAwesomeIcon
                icon={faDiscord}
                className="mx-2 p-1 text-green-chia-lime"
              />
            </a>

            <a href="http://bit.ly/ChiatkYoutube" target="_blank">
              <FontAwesomeIcon
                icon={faYoutube}
                className="mx-2 p-1 text-green-chia-lime"
              />
            </a>

            <a href="https://twitter.com/Chiatoolkit" target="_blank">
              <FontAwesomeIcon
                icon={faTwitter}
                className="v p-1 text-green-chia-lime"
              />
            </a>
            
            <a href="http://bit.ly/ChiatkInstagram" target="_blank">
              <FontAwesomeIcon
                icon={faInstagram}
                className="mx-2 p-1 text-green-chia-lime"
              />
            </a>

            <a href="http://bit.ly/ChiatkFacebook" target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                className="mx-2 p-1 text-green-chia-lime"
              />
            </a>

            <a href="http://bit.ly/ChiatkLinkedin" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="p-1 text-green-chia-lime"
              />
            </a>
          </div>
          <div className="text-green-chia-dark1 flex justify-start sm:justify-end mb-5 whitespace-nowrap text-sm">
            <div className="pr-2">
              <a href="https://docs.google.com/document/d/1sBfCOoj3pn-_M4-x6EE737Kx6cpl4ilTgUGJ3EcxqYI/edit?usp=sharing">Términos y condiciones</a>
            </div>
            {/* |&nbsp; */}
            <div className="hidden">
              <a href="#">Política de privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;