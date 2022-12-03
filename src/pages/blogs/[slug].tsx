import {useRouter} from 'next/router'
import DynamicTextForPages from '../../components/DynamicTextForPages'
import SeoMetas from '../../components/common/seo/SeoMetas'
import GradientText from '../../components/GradientText'

const Post = () => {
    const router = useRouter()
    const { slug } = router.query

    const meta = {
        title: "Single Post | WebinoxMedia",
        description: "WebinoxMedia - The Best Web Development Company in Pune.",
        keywords: "WebinoxMedia, Web Development, Ecommerce Web Development, React JS Developer, Python Django Developer, Next JS Developer",
        image: "/image.png",
        publishedAt: "2022-07-25",
        updatedAt: "2022-7-28",
        author: "Yuvraj Limbole"
    }

    return (
        <div className="flex flex-col justify-center items-center text-center min-h-screen p-4">
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
            <GradientText text={"Your Query Blog slug is"} />
            <DynamicTextForPages text={`slug: /${slug}`} />
        </div>
    )
}

export default Post