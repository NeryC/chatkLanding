import {
  faDiscord,
  faInstagram,
  faTelegram,
  faTelegramPlane,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import StatsItem from "../components/stats-item";
import Title from "../components/title";

const Stats = () => {
  return (
    <div className="py-24 container mx-auto px-5 md:px-0 lg:px-28">
      <div className="mb-14">
        <img className="w-20" src="images/Group 1.png" />
        <Title>Redes sociales</Title>
        <div className="text-green-chia-dark1 text-lg">
          Síguenos y no te pierdas de nada
        </div>
      </div>
      <div className="lg:flex lg:flex-wrap lg:w-full lg:justify-around grid grid-cols-2 md:grid-cols-3">
        <StatsItem
          icon={faTelegramPlane}
          value="+4500"
          text="Usuarios en Telegram"
        />

        <StatsItem icon={faDiscord} value="+850" text="Usuarios en Discord" />
        <StatsItem icon={faYoutube} value="+16050" text="Usuarios en Youtube" />
        <StatsItem icon={faTwitter} value="+16050" text="Usuarios en Twitter" />
        <StatsItem
          icon={faInstagram}
          value="+16050"
          text="Usuarios en Instagram"
        />
      </div>
    </div>
  );
};

export default Stats;
