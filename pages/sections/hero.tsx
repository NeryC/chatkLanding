import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = () => {
  return (
    <div className="sm:bg-hero-pattern bg-no-repeat lg:bg-hero-lg md:bg-hero-md bg-none">
      <div className="grid grid-cols-1 mt-0 sm:grid-cols-2 container mx-auto md:bg-iPhone-in-Hand md:bg-no-repeat lg:h-hero-spacing md:h-hero-spacing-tablet md:bg-contain md:bg-iPhone-back-position-tablet lg:bg-iPhone-back-position lg:bg-iPhone-back-size md:bg-iPhone-back-size-tablet">
        <div className="flex flex-col flex-none self-center md:place-items-start py-10 px-5 sm:px-0">
          <div className="text-5xl sm:text-hero text-green-chia-lime">
            Chia ToolKit
          </div>
          <div className="text-3xl sm:text-hero-description pt-2 flex flex-col sm:flex-none sm:inline-block">
            <span>
              Herramientas esenciales <br />
              para la criptomoneda
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
                <div>Infraestructura completa para el ecosistema de Chia</div>
              </div>
              <div className="flex flex-row">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="mr-2 mt-0.5 text-green-chia-lime "
                />
                <div>Próximamente en Windows, Linux, Mac, Android, iOS</div>
              </div>
            </div>
            <div className="mt-14 sm:mt-20">
              <a
                className="px-4 py-4 mr-2 rounded bg-green-chia-lime font-gibson-light buttonsHero"
                href="/app"
              >
                ACCEDE A LA APP
              </a>

              <a
                className="px-6 py-4 rounded text-green-400 border-green-400 border text-center buttonsHero"
                href="https://www.youtube.com/watch?v=XUHvGqGD1EA&t=684s"
                target="_blank"
              >
                VER VIDEO &nbsp;
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
          <div className="left-8 md:left-2 md:bottom-26 lg:bottom-48 bottom-48 backdrop-filter backdrop-blur-3xl  absolute rounded-xl">
            <div className="py-3 px-3">
              <div>
                <span className="bubblesHeroDescription">
                  15.540
                </span>
                <div className="text-green-chia-lime bubblesHero">
                  Registrados en ChiaTK
                </div>
              </div>
            </div>
          </div>

          <div className="top-16 left-14 md:top-64 md:left-5 lg:top-20 lg:left-5 backdrop-filter backdrop-blur-xs  absolute rounded-xl">
            <div className="py-2 px-6">
              <div className="text-green-chia-lime bubblesHero text-center">
                Total network space
              </div>
              <span className="bubblesHeroDescription">
                11.975 EiB
              </span>
            </div>
          </div>

          <div className="top-32 right-5 md:right-2 md:top-80 lg:top-1/4 backdrop-filter backdrop-blur-3xl  absolute rounded-xl">
            <div className="py-2 px-3">
              <div>
                <div className="text-green-chia-lime bubblesHero text-center">
                  XCH/USDT
                </div>
                <span className="bubblesHeroDescription">
                  ≈ $1069.51 USD
                </span>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <img src="/images/iPhone-in-Hand-Mockup.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
