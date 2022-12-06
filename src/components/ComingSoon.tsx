import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaStore, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'

const ComingSoon = () => {
    return (
        <section className="h-screen bg-cover" style={{backgroundImage: "url('/images/falcon-banner.jpeg')"}}>
            <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
                <div className="max-w-2xl text-center">
                    <h1 className="text-3xl sm:text-5xl capitalize tracking-widest text-white lg:text-7xl">Comming Soon</h1>

                    {/* <p className="mt-6 lg:text-lg text-white">You can subscribe to our newsletter, and let you know when we are back</p>
                    <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                        <input id="email" type="text" className="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2" placeholder="Email Address" />
                        <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">Notify Me</button>
                    </div> */}

                    <p className="mt-6 lg:text-lg text-white">
                        You can Follow on Social media or Contact us, and let you know when we are back
                    </p>
                    <h3 className="mt-6 lg:text-3xl text-2xl text-white ">Follow us</h3>
                    <div className="flex justify-center mb-6">
                        <Link href="https://www.facebook.com/falconcouriers/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-blue-800 hover:border-blue-800 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaFacebook className="ml-2 mt-2 mx-auto" />
                        </Link>

                        <Link href="https://www.instagram.com/falconcouriers/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-gradient-to-tr from-fuchsia-600 to-orange-600 hover:border-transparent focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaInstagram className="ml-2 mt-2 mx-auto" />
                        </Link>

                        <Link href="https://wa.me/919623995499/" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaWhatsapp className="ml-2 mt-2 mx-auto" />
                        </Link>

                        <Link href="https://twitter.com/falconcouriers" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-blue-400 hover:border-blue-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaTwitter className="ml-2 mt-2 mx-auto" />
                        </Link>

                        <Link href="https://goo.gl/maps/koo5FUkvREdNxi8n8" type="button" className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-green-500 hover:border-green-500 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1">
                            <FaStore className="ml-2 mt-2 mx-auto" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ComingSoon