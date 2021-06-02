import React from "react";
import Title from "../components/title";
import Accordion from "./../components/accordion";

const Faq = () => {
  const hiddenTexts = [
    {
      label: "¿Qué es Chia?",
      value: `Chia nace en agosto de 2017 con el objetivo de desarrollar una plataforma de 
        transacciones inteligentes y blockchain mejorada. La red de Chia busca mejorar el sistema 
        financiero y de pago global, buscando ser el primer dinero digital empresarial. Chia está 
        utilizando el primer nuevo algoritmo de consenso desde la creación del Bitcoin, que es la 
        Prueba de espacio y tiempo, creada por Bram Cohen, el mejor ingeniero de protocolos de red vivo 
        e inventor de BitTorrent. Junto con chia nace Chialisp el nuevo lenguaje de programación de 
        transacciones inteligentes potente, fácil de auditar y seguro.`,
    },
    {
      label: "¿No es Bitcoin lo suficientemente bueno?",
      value: `Cuando se desarrolló Bitcoin, no se preveía que el hardware especializado pudiera superar 
        ampliamente a las computadoras actuales. Lo que pretendía ser una red descentralizada, ahora 
        está controlado por un pequeño número de mineros, con acceso a plantas de fabricación de chips 
        y compra de electricidad al por mayor. Los mineros que actualmente controlan la red Bitcoin 
        tienen una ventaja competitiva y se oponen a cambiar el protocolo incluso cuando está claro 
        que debería cambiarse. Chia ha tenido diez años para estudiar el nuevo ecosistema de dinero 
        digital, haciendo que Chia  sea la criptomoneda más descentralizada, segura y  fácil de usar.`,
    },
    {
      label: "¿Qué necesito para crear un plot?",
      value: `Para crear un plot los requisitos mínimos son  4 GB de RAM, 2 hilos del procesador y por 
        lo menos 500 GB de almacenamiento. Hay que tener en cuenta que los archivos temporales pueden 
        pesar más de 256 GB .Para crear plots con mayor velocidad se recomienda almacenar los archivos 
        temporales en un SSD, debido al tamaño de los archivos la unidad de estado sólido debe tener al 
        menos 257 GB libres para poder crear 1 plot. Con un SSD de 1 TB se pueden crear 3 plots en 
        paralelo, con uno de 2 TB hasta 7 plots en paralelo y así progresivamente. A la hora de almacenar 
        los archivos finales se recomienda utilizar discos HDD de alta capacidad para poder guardar la 
        mayor cantidad de plots posibles. Los SSD tienen una vida útil medida en TBW (Terabytes escritos) 
        y cada plot puede gastar entre 1,6 y 1,8 TBW. Se recomienda prestar atención a la vida útil máxima 
        de cada SSD.`,
    },
    {
      label: "¿Cual es la diferencia entre plot portable y no portable?",
      value: `Los plots no portables son todos los que se crearon antes de la actualización prevista 
        para finales de mayo. Estos no se pueden usar en las pool oficiales, pero pueden seguir 
        usándose para farmear de manera individual. Después de la actualización prevista para finales 
        de mayo todos los plots creados serán portables. Estos se podrán utilizar en las pool o para 
        farmear de manera individual, según lo decida el usuario.`,
    },
    {
      label: "¿Cómo funcionan las pool de Chia?",
      value: `Al igual que otras pool de criptomonedas, en Chia las pools están formadas por un grupo 
      de personas que farmean en conjunto.. Cuando uno de los usuarios del grupo gana un bloque, todos 
      comparten la recompensa. Para las pool de Chia, el usuario que gana el bloque de 2 XCH obtiene 
      0.25 XCH y el 1.75 XCH restante se reparte con la pool, asegurando ganancias diarias casi 
      constantes a todos los participantes. Para poder financiar sus operaciones ,la mayoría de las 
      pool cobran una pequeña comisión.`,
    },
    {
      label: "¿Cómo puedo unirme a Chiatk?",
      value: `Al ser una pool oficial, Chiatk requiere por lo menos 1 plot portable y conexión a 
        internet, para poder conectarse a nuestro servidor. La pool estará operativa después de la 
        actualización de finales de mayo.`,
    },
  ];

  return (
    <div className="bg-green-chia-dark3 pt-16">
      <div className="py-14 pb-10 container mx-auto px-5 md:px-0 lg:px-28">
        <img className="w-20" src="images/Group 1.png" />
        <Title>Preguntas Frecuentes</Title>
        <div className="text-green-chia-dark1 text-lg font-gibson-light">
          Sabemos que tienes algunas preguntas en mente, hemos <br/>resaltado las más
          importantes.
        </div>
      </div>

      <div className="bg-green-chia-dark4 pt-10 pb-14">
        <div className=" container mx-auto">
          <Accordion hiddenTexts={hiddenTexts} />
        </div>
      </div>
      <div className="bg-green-chia-dark3"></div>
    </div>
  );
};

export default Faq;