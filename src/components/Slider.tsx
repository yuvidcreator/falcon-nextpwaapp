import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Slider() {
    return (
        <section className="relative max-w-screen-3xl mx-auto">
            <Carousel 
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <Image src="/falcon-banner.jpeg" alt="" height={680} width={1280} loading="lazy" />
                </div>
                <div>
                    <Image src="/falcon-banner.jpeg" alt="" height={680} width={1280} loading="lazy" />
                </div>
                {/* <div>
                    <Image src="/falcon-banner.jpeg" alt="" height={680} width={1280} loading="lazy" />
                </div>
                <div>
                    <Image src="/falcon-banner.jpeg" alt="" height={680} width={1280} loading="lazy" />
                </div> */}
            </Carousel>
        </section>
    )
}

export default Slider;