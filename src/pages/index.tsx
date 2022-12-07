// import Head from 'next/head'
// import Image from 'next/image'
import { useRouter } from "next/router";
import SeoMetas from "../components/common/seo/SeoMetas";
import Gauranty from "../components/Gauranty";
import Slider from "../components/Slider";
import WhatMakeUs from "../components/WhatMakeUs";
import WhyChooseUs from "../components/WhyChooseUs";
// import ComingSoon from "../components/ComingSoon";


const meta = {
  title: "Falcon Courier Services",
  description: "Falcon Courier Services - The Best Courier Service Provider in Pune.",
  keywords: "Falcon Courier Services, package courier, delivery company, courier services in pimpri chinchwad",
  image: "/image.png",
  publishedAt: "2022-11-25",
  updatedAt: "2022-12-05",
  author: "Yuvraj Limbole"
}


export default function Home() {

  const router = useRouter();

  return (
    <>
      <SeoMetas 
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        image={meta.image}
        pageslug={router.asPath}
        publishedAt={meta.publishedAt}
        updatedAt={meta.updatedAt}
        author={meta.author}
      />
      <div className="mt-16">
        <Slider />
      </div>
      <Gauranty />
      <WhyChooseUs />
      <div className="p-8">
        <WhatMakeUs />
      </div>
      <div className="flex justify-center text-center">
        {/* <h1>Hello From Falcon</h1> */}
      </div>
      
    </>
  )
}
