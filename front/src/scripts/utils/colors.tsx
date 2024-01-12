const colors: Partial<
    Record<
        string,
        [
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string,
            string
        ]
    >
> = {
    orange: [
        "#C68C68", // 0
        "#CC7A47", // 1
        "#D56824", // 2
        "#D65A0D", // main // 3 main
        "#AF551E", // 4
        "#905028", // 5
        "#784A2D", // 6
        "#65442F", // 7
        "#563E30", // 8
        "#4A392E", // 9
    ],
    red: [
        "#E9C1C3", // 0
        "#E69EA0", // 1
        "#EA767A", // 2
        "#F7494F", // main // 3 main
        "#E13F44", // 4
        "#CB383D", // 5
        "#AB3E42", // 6
        "#904244", // 7
        "#7B4244", // 8
        "#694142", // 9
    ],
    pink: [
        "#E1B4D0", // 0
        "#DE92C1", // 1
        "#E26DB5", // 2
        "#EE42AC", // main // 3 main
        "#D83A9B", // 4
        "#BD398A", // 5
        "#9E3F7A", // 6
        "#86426C", // 7
        "#72415F", // 8
        "#623F55", // 9
    ],
    purple: [
        "#DACFEE", // 0
        "#C2ABE9", // 1
        "#AA83EC", // 2
        "#9256F8", // main // 3 main
        "#8249E3", // 4
        "#7541CE", // 5
        "#6B40B3", // 6
        "#634497", // 7
        "#5B4580", // 8
        "#53436E", // 9
    ],
    indigo: [
        "#DEDEF4", // 0
        "#B9BAEF", // 1
        "#9092F1", // 2
        "#6165FD", // 3 main
        "#5155EA", // 4
        "#474BD4", // 5
        "#4043BF", // 6
        "#4547A1", // 7
        "#464888", // 8
        "#454675", // 9
    ],
    blue: [
        "#96B0D4", // 0
        "#759DD4", // 1
        "#518BDA", // 2
        "#2779E9", // main // 3 main
        "#2B6ECA", // 4
        "#3565A8", // 5
        "#3A5D8D", // 6
        "#3B5577", // 7
        "#3B4D66", // 8
        "#394658", // 9
    ],
    teal: [
        "#339A8D", // 0
        "#239789", // 1
        "#139786", // 2
        "#029885", // main // 3 main
        "#0F7B6E", // 4
        "#17655B", // 5
        "#1C544D", // 6
        "#1E4742", // 7
        "#1F3C38", // 8
        "#1E3331", // 9
    ],
    lowGreen: [
        "#329C6B", // 0
        "#229A62", // 1
        "#11995A", // 2
        "#009B53", // main // 3 main
        "#0E7E4A", // 4
        "#176742", // 5
        "#1C553B", // 6
        "#1E4834", // 7
        "#1F3D2F", // 8
        "#1E342A", // 9
    ],
    green: [
        "#3D9B39", // 0
        "#2D9829", // 1
        "#1E9619", // 2
        "#0E9708", // main // 3 main
        "#187B14", // 4
        "#1E651B", // 5
        "#22551F", // 6
        "#234721", // 7
        "#223D21", // 8
        "#213420", // 9
    ],
    brown: [
        "#C5954C", // 0
        "#C1862A", // 1
        "#B77714", // 2
        "#AF6A00", // main // 3 main
        "#84560F", // 4
        "#654616", // 5
        "#4E3919", // 6
        "#3D2F1A", // 7
        "#312719", // 8
        "#272017", // 9
    ],
};

export const buttonFilter: Record<string, string> = {
    orange: "hue-rotate(160deg)",
    red: "hue-rotate(135deg)",
    pink: "hue-rotate(95deg)",
    purple: "hue-rotate(45deg)",
    indigo: "hue-rotate(25deg)",
    blue: "hue-rotate(0deg)",
    teal: "hue-rotate(-50deg)",
    lowGreen: "hue-rotate(-70deg)",
    green: "hue-rotate(-105deg)",
    brown: "hue-rotate(-175deg)",
    gray: "grayscale(1)",
    grey: "grayscale(1) brightness(0.75) contrast(200%)",
};

export default colors;
