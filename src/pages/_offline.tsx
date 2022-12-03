import Link from 'next/link'

export default function Offline() {
    return (
        <div className="flex flex-col justify-center items-center text-center min-h-screen">App is Offline. Please contact <Link href='tel:+91-9022286083' passHref><a>@9022286083</a></Link>.</div>
    )
}