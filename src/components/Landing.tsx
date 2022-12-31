import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "./Button";

function Landing() {
  const router = useRouter();
  return (
    <main className="bg-[#E7ECEE]">
      <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
        <div className="space-y-8">
          <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
            <span className="block bg-gradient-to-r from-blue-900 to-blue-300 bg-clip-text text-transparent">
              Powered
            </span>
            <span className="block">By Falcon Couriers</span>
            <span className="block">Driven By Values</span>
          </h1>

          <div className="space-x-8">
            <Button
              title="Track Package"
              onClick={() => router.push("/tracking")}
            />
            {/* <Link href={"/about"} className="link">Learn More</Link> */}
          </div>
        </div>

        <div className="relative hidden h-[450px] w-[450px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
          <Image src="/images/images/about_img01.png" layout="fill" objectFit="contain" alt={"image"} />
        </div>
      </section>
    </main>
  );
}

export default Landing;
