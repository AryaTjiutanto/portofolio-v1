import type { MetadataRoute } from "next";

const BASE_URL = "https://aryatjiutanto.my.id";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${BASE_URL}/en`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/id`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}