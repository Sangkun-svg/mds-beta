interface FontStyle {
    size: string;
    height: string;
    weight: number;
}

interface FontStyles {
    [key: string]: FontStyle;
}

export const FONT_STYLES: FontStyles = {
    PRETENDARD_50: {
        size: "0.75rem",
        height: "1.125rem",
        weight: 400,
    },
    PRETENDARD_75: {
        size: "0.75rem",
        height: "1.125rem",
        weight: 500,
    },
    PRETENDARD_100: {
        size: "0.875rem",
        height: "1.375rem",
        weight: 400,
    },
    PRETENDARD_125: {
        size: "0.875rem",
        height: "1.375rem",
        weight: 500,
    },
    PRETENDARD_150: {
        size: "0.875rem",
        height: "1.375rem",
        weight: 700,
    },
    PRETENDARD_200: {
        size: "1rem",
        height: "1.5rem",
        weight: 400,
    },
    PRETENDARD_225: {
        size: "1rem",
        height: "1.5rem",
        weight: 500,
    },
    PRETENDARD_250: {
        size: "1rem",
        height: "1.5rem",
        weight: 700,
    },
    PRETENDARD_300: {
        size: "1.125rem",
        height: "1.75rem",
        weight: 500,
    },
    PRETENDARD_350: {
        size: "1.125rem",
        height: "1.75rem",
        weight: 700,
    },
    PRETENDARD_400: {
        size: "1.25rem",
        height: "2rem",
        weight: 500,
    },
    PRETENDARD_450: {
        size: "1.25rem",
        height: "2rem",
        weight: 700,
    },
    PRETENDARD_500: {
        size: "1.5rem",
        height: "2.25rem",
        weight: 700,
    },
};
