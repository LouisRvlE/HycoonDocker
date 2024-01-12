const format = new Intl.NumberFormat("fr-FR", { notation: "compact" });
const formater = (number: number) => {
    return format.format(number);
};

export default formater;
