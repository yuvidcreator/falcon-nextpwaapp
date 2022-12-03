import { APP_NAME, Business } from "../../utils/Web";
import Link from "next/link";


const Footer = () => {
    const fullYear = new Date().getFullYear();

    return (
        <footer className="mb-20 md:mt-16 mt-96 lg:mb-0">
            <div className="flex justify-center items-center text-center lg:mb-4">
                <div>
                <p>
                    {fullYear} &copy; {APP_NAME} 
                </p>
                <p>
                    Designed & Developed by{' '}<br className="md:hidden" />
                    <Link 
                        href="https://www.webinoxmedia.com" 
                        className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 dark:from-violet-500 dark:to-pink-500"
                        passHref
                    >
                        WebinoxMedia
                    </Link>
                </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer