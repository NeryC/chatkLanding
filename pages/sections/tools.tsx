import React from "react";
import Title from "../components/title";
import Tool from "../components/tool";

const Tools = () => {
  return (
    <div className="bg-green-chia-dark3 pb-28">
      <div className="pt-8 container mx-auto">
        <div className="flex flex-col items-center my-20 text-center">
          <img className="w-20" src="images/Group 1.png" />
          <Title>Herramientas</Title>
          <div className="pt-1 text-green-chia-dark1 text-lg">
            Estamos desarrollando una amplia gama de utilidades
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 lg:gap-x-3 lg:gap-y-16">
          <div className="relative bg-green-400 text-white rounded-lg sm:col-span-2 p-5">
            <div className="flex justify-between">
              <div className="flex self-start mt-7">
                <img className="w-18" src="/images/kit/pool.png" />
              </div>
              <div className="absolute right-0">
                <img className="w-68 md:mr-12" src="/images/Group 3334.png" />
              </div>
            </div>
            <div className="text-1xl my-5 font-gibson-light">Pool</div>
            <div className="mb-5 font-gibson-light text-sm">
              <span>
                (Equivalente a un Pool de minado de tradicional) te permite
                unirte a nuestra comunidad para hacerle frente entre todos al
                gran tamaño de la red y recibir ganancias constantes. También
                podrás ver tus estadísticas de farming y gestionar tus pagos de
                forma eficiente.
              </span>
            </div>
          </div>
          <Tool
            title="Wallet"
            imageUrl="/images/kit/wallet.png"
          >
            Vas a poder administrar de una manera rápida y segura cualquier
        transacción con nuestra Wallet que estará disponible en Web, Android y
        IOS.
          </Tool>

          <Tool
            title="Academy"
            imageUrl="/images/kit/academy.png"
          >
            Academia Chia alfabetizar de la manera sencilla y dinámica, con video tutoriales, artículos y algunos consejos que te ayudarán a entender cómo funciona la blockchain de Chia y mucho más.
          </Tool>

          <Tool
            title="Plots Market"
            imageUrl="/images/kit/plot-exchange.png"
          >
            Buscamos unir a quienes decidan vender Plots y a quienes quieran comprarlos, en un mercado que permita el intercambio de una forma muy ágil y rápida.
          </Tool>

          <Tool
            title="Easy Farm"
            imageUrl="/images/kit/farm.png"
          >
            Con nuestro sistema automatizado, poniendo tú pc en línea y siguiendo a nuestro asistente, vas a poder ganar dinero con ChiaTK de una manera muy simple.
          </Tool>

          <Tool
            title="Plot Master"
            imageUrl="/images/kit/plot-master.png"
          >
            Estamos desarrollando una herramienta que te permita la creación de Plots de manera sencilla y eficiente a través de una interfaz amigable. 
          </Tool>

          <Tool
            title="Calculator"
            imageUrl="/images/kit/calc.png"
          >
            Podrás calcular tus ganancias Farmeando Chia en nuestro Pool basándonos en tu capacidad cómputo y el almacenamiento que posees.
          </Tool>

          <Tool
            title="Community"
            imageUrl="/images/kit/calc.png"
          >
            Podrás mantenerte en contacto con una comunidad que está creciendo 
            exponencialmente cada día en todo el mundo, incrementando la red de Chía Network a través 
            de chats, foros y grupos de discusión.
          </Tool>
        </div>
      </div>
    </div>
  );
};

export default Tools;
