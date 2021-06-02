import React from "react";
import { AppBar } from "./sections/app-bar";
import Copyright from "./sections/copyright";
import Faq from "./sections/faq";
import Footer from "./sections/footer";
import { Hero } from "./sections/hero";
import PoolInfo from "./sections/pool-info";
import Stats from "./sections/stats";
import Subscribe from "./sections/subscribe";
import Tools from "./sections/tools";
import CardMemberList from "./sections/card_member_list";

export default function Home(props: any) {
  return (
    <div className="mx-auto shadow text-white-chia bg-green-chia-dark4 text-xl font-gibson ">
      <AppBar />
      <Hero />
      <Tools />
      <Stats />
      <PoolInfo />
      <Subscribe />
      <Faq />
      <CardMemberList />
      <Footer />
      <Copyright />
    </div>
  );
}

export async function getStaticProps() {
  return { props: { isStatic: true } };
}
