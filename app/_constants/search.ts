interface QuickSearchOption {
    imageUrl: string;
    title: string;
    name: string;
}

export const quickSearchOptions: QuickSearchOption[] = [
    {
        imageUrl: "/cabelo.svg",
        title: "icone cabelo",
        name: "Babelo",
    },
    {
        imageUrl: "/barba.svg",
        name: "Barba",
        title: "icone barba",
    },
    {
        imageUrl: "/acabamento.svg",
        name: "Acabamento",
        title: "icone acabamento",
    },
    {
        imageUrl: "/massagem.svg",
        name: "Massagem",
        title: "icone massagem",
    },
    {
        imageUrl: "/sobrancelha.svg",
        title: "icone sobrancelha",
        name: "Sobrancelha",
    },
    {
        imageUrl: "/hidratacao.svg",
        name: "Hidratação",
        title: "icone hidratação",
    },
];
