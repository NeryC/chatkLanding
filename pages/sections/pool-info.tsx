import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Title from "../components/title";

const PoolInfo = () => {
  return (
    <div className="bg-green-chia-dark3 pt-36 pb-16 px-5 sm:px-0 bg-iPhone-information lg:bg-iPhone-back-info-position md:bg-pool-back-info-position-tablet bg-pool-back-info-position-mobile lg:bg-iPhone-back-info-size md:bg-pool-back-info-size-tablet bg-pool-back-info-size-mobile bg-no-repeat lg:h-pool-info md:h-pool-info-tablet">
      <div className="container mx-auto">
        <div className="md:w-80 lg:w-auto">
          <img className="w-20" src="images/Group 1.png" />
          <Title>Información de la Pool</Title>
          <span className="text-green-chia-dark1 text-lg">
            La información será actualizada una vez <br className=""/> la Pool este operativa
          </span>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-5 ">
            <div className="mt-9 sm:grid lg:grid-cols-2">
              <div className="mb-5">
                <img className="w-11" src="/images/pool-info/comision.png" />
                <div className="text-4xl sm:text-5xl font-bold text-green-chia-lime mt-2 font-gibson-light">
                  1%
                  <span className="text-green-chia-lime text-2xl font-gibson-light"> o Menos</span>
                </div>
                <div className="text-2xl sm:text-lg">Comisión</div>
              </div>
              <div className="mb-5">
                <img className="w-11" src="/images/pool-info/size.png" />
                <div className="text-4xl sm:text-4.5xl font-bold text-green-chia-lime mt-4 font-gibson-light">
                  <span>53.69 </span>
                  <span className="font-light">PiB</span>
                </div>
                <div className="text-2xl sm:text-lg">Tamaño de la Pool</div>
              </div>

              <div className="mb-5 lg:mt-10">
                <img className="w-11" src="/images/pool-info/crecimiento.png" />
                <div className="text-4xl sm:text-5xl font-bold text-green-chia-lime mt-5 font-gibson-light">
                  15%
                </div>
                <div className="text-2xl sm:text-lg">
                  Tasa de crecimiento
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center  items-center relative">
            <img className="absolute " src="/images/Group 3342.png" />
            <img
              className="relative "
              src="/images/i12_1.png"
              style={{ zIndex: 1 }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PoolInfo;
