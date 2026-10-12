import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ requestLocale }) => {
    const requestedLocale = await requestLocale;

    if (!hasLocale(routing.locales, requestedLocale)) {
        notFound();
    }

    return {
        locale: requestedLocale,
        messages: (
            await import(`../../messages/${requestedLocale}.json`)
        ).default,
    };
});