import { APP_NAME, BackLinks, Business, DOMAIN_NAME } from '../../../utils/Web'

interface Props {
    name: string;
    title: string;
    description: string;
    image?: string;
    pageslug?: string;
    publishedAt?: string;
    updatedAt?: string;
    author: string;
    telephone?: string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    country: string;
    latitude: string;
    longitude: string;
    opensAt: string;
    closesAt: string;
}

const BodySchemaMarkup = () => {
    return (
        <>
            {/* <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `{"@context": "https://schema.org",
                    "@type": "NewsArticle",
                    "headline": "${props?.title}",
                    "image": [
                        "${props?.image}"
                    ],
                    "datePublished": "${props?.publishedAt}",
                    "author": [{
                        "@type": "Person",
                        "name": "${props?.author}"
                        }]
                    }`,
                }}
            ></script> */}

            <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `
                {
                    "@context": "https://schema.org",
                    "@type": "${Business.bizType}",
                    "name": "${APP_NAME}",
                    "image": "${DOMAIN_NAME}/images/logo.png",
                    "@id": "${DOMAIN_NAME}/${Business.bizNature}",
                    "url": "${DOMAIN_NAME}",
                    "telephone": "${Business.contactNo}",
                    "priceRange": "${Business.howExpensive}",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "${Business.fullAddress}",
                        "addressLocality": "${Business.city}",
                        "postalCode": "${Business.zipCode}",
                        "addressCountry": "${Business.country}"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": ${Business.latitude},
                        "longitude": ${Business.longitude}
                    },
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday",
                            "Saturday"
                        ],
                        "opens": "${Business.opensAt}",
                        "closes": "${Business.closesAt}"
                    },
                    "sameAs": [
                        "${BackLinks.links.fb}",
                        "${BackLinks.links.Insta}",
                        "${BackLinks.links.tw}",
                        "${BackLinks.links.Ln}",
                        "${BackLinks.links.Pn}",
                        "${BackLinks.links.Im}",
                        "${BackLinks.links.Jd}"
                    ]
                }`}}></script>
        </>
    )
}

export default BodySchemaMarkup