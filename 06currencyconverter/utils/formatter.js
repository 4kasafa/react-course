import localeMap from "./localMap";

export function formatCurrency(amount, currencyCode) {
    if (!amount) return '0';

    const locale = localeMap[currencyCode.toLowerCase()] || localeMap.default;
    const formated = new Intl.NumberFormat(locale, {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
    }).format(amount);

    return formated;
}