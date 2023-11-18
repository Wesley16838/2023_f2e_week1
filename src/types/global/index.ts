export type EventProp = {
    id: number,
    title: string,
    description: string,
    fullDescription: string,
    date: string,
    asset: string,
    fullAsset: string,
}

export type IssueProp = {
    id: number,
    name: string,
    content: string,
    asset: string,
    fullAsset: string
}

export type donationOptionProp = {
    optionName: string,
    optionAmount: string,
    optionAsset: string
}