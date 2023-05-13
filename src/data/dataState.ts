export const dataState: DataStateType = {
    pages: [
        {
            heading: "while",
            about: "about while"
        },
        {
            heading: "for",
            about: "about for"
        },
        {
            heading: "switch",
            about: "about switch"
        }
    ]
}

export type DataStateType = {
    pages: Array<PagesType>
}

export type  PagesType = {
    heading: string,
    about: string,
}
