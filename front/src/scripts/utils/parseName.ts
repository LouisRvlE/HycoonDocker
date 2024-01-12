export const parseName = (name?: string) => {
    if (!name || name === "") return name;
    return (
        name
            // .replaceAll("_", " ")
            .split("_")
            .map((el) => `${el[0].toUpperCase()}${el.slice(1)}`)
            .join(" ")
    );
};
