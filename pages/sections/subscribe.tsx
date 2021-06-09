import { useState } from "react";
import { useTranslation } from 'next-i18next';
import validator from 'validator'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../components/title";

const Subscribe = () => {
  const { t } = useTranslation('subscribe');
  const [mailValue, setMailValue] = useState('');

  const postEmail = () => {
    fetch('https://us-central1-basic-zenith-312516.cloudfunctions.net/registerEmail', {
      method: 'POST', 
      mode: 'cors', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"email":mailValue})
    }).then(function(response) {
      const tipSpan = document.getElementById('tipSpan');
      if(tipSpan){
        if(response.ok) {
          if(response.status == 201){
            tipSpan.classList.remove("hidden");
            tipSpan.classList.add("text-black");
            tipSpan.innerText = "El email se registro correctamente"
          } else if(response.status == 200){
            tipSpan.classList.remove("hidden");
            tipSpan.classList.add("text-black");
            tipSpan.innerText = "Este email ya esta suscrito"
          }
        } else {
          tipSpan.classList.remove("hidden");
          tipSpan.classList.add("text-red-600");
          tipSpan.innerText = "Ha ocurrido un error, inténtelo de nuevo más tarde"
        }
      }
    })
    .catch(function(error) {
      const tipSpan = document.getElementById('tipSpan');
      if(tipSpan){
        tipSpan.classList.remove("hidden");
        tipSpan.classList.add("text-red-600");
        tipSpan.innerText = "Ha ocurrido un error, inténtelo de nuevo más tarde"
      }
    });
  }

  const handlerClick = () =>{
    const tipSpan = document.getElementById('tipSpan')
    if (validator.isEmail(mailValue)) {
      postEmail();
    } else if(tipSpan){
      
      tipSpan.classList.remove("hidden");
      tipSpan.classList.add("text-red-600");
      tipSpan.innerText = "*El Email no es valido"
    }
  }

  const handleChange = (event) =>{
    const tipSpan = document.getElementById('tipSpan')
    tipSpan && !tipSpan.classList.contains("hidden") && tipSpan.classList.add("hidden")
    setMailValue(event.target.value)
  }

  return (
    <div className="bg-green-chia-lime px-5 sm:px-0 lg:h-suscribe 2xl:h-suscribe-2xl md:h-suscribe-tablet h-suscribe-mobile">
      <div className="mx-auto container lg:flex lg:justify-between md:grid ">
        <div className="lg:mt-3 pt-14"> 
          <img className="w-20" src="images/Group 3337.webp" />
          <Title>{t('title-subscribe')}</Title>
          <span className="font-gibson-light text-lg">
            {t('subtitle-subscribe')}
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row h-12 mt-14 lg:mt-26 md:mt-16">
            <input
              type="text"
              className="rounded-lg pl-4 w-full text-black w-suscribe-input"
              placeholder={t('suscribe-place-holder')}
              onChange={event=> handleChange(event)}
              value={mailValue}
            />
            <button type="button" className="bg-green-chia-dark3 rounded-lg p-2 w-19" onClick={handlerClick}>
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="mx-1 text-white"
              />
            </button>
          </div>
          <span id="tipSpan" className="hidden"></span>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
