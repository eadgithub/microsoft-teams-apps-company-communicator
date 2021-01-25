import { TFunction } from "i18next";


export const getInitAdaptiveCard = (t: TFunction, Type: number) => {
    const titleTextAsString = t("TitleText");
    switch (Type) {
        case 0:
            {
                return (
                    {
                        "type": "AdaptiveCard",
                        "body": [
                            {
                                "type": "TextBlock",
                                "weight": "Bolder",
                                "text": "department",
                                "size": "small",
                                "wrap": true,
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "TextBlock",
                                "weight": "Bolder",
                                "spacing": "None",
                                "text": titleTextAsString,
                                "size": "ExtraLarge",
                                "wrap": true,
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "Image",
                                "spacing": "Default",
                                "url": "",
                                "size": "Stretch",
                                "width": "400px",
                                "altText": ""
                            },
                            {
                                "type": "TextBlock",
                                "text": "",
                                "wrap": true,
                                "horizontalAlignment": "Left"
                            },
                            {
                                "type": "TextBlock",
                                "wrap": true,
                                "size": "Small",
                                "weight": "Lighter",
                                "text": ""
                            },
                            {
                                "type": "ColumnSet",
                                "columns": [
                                    {
                                        "type": "Column",
                                        "width": "stretch",
                                        "items": [
                                            {
                                                "type": "Image",
                                                "url": "https://blcompanycommunicator.azurewebsites.net/image/DHLogo.png",
                                                "size": "Large"
                                            }
                                        ],
                                        "verticalContentAlignment": "Center"
                                    },
                                    {
                                        "type": "Column",
                                        "width": "stretch",
                                        "items": [
                                            {
                                                "type": "Image",
                                                "url": "https://blcompanycommunicator.azurewebsites.net/image/FTGOT.png"
                                            }
                                        ],
                                        "verticalContentAlignment": "Bottom"
                                    }
                                ]
                            }
                                ],
                                "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                                "version": "1.2"
                            }
                );
                break;
            }
        case 2:
            {
                return (
                    {
                        "type": "AdaptiveCard",
                        "minHeight": "800px",
                        "backgroundImage": {
                            "url": "https://blcompanycommunicator-test.azurewebsites.net/image/banner.png"
                        },
                        "body": [
                            {
                                "type": "Image",
                                "width": "500px",
                                "height": "800px",
                                "size": "Stretch",
                                "url": "https://blcompanycommunicator-test.azurewebsites.net/image/transparentbanner.png",
                                "selectAction": {
                                    "type": "Action.OpenUrl",
                                    "url": "https://www.blueridgeit.com"
                                }
                            }
                        ],
                        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                        "version": "1.2"
                    }
                );
            }
        case 1:
            {
                return (
                    {
                        "type": "AdaptiveCard",
                        "body": [
                            {
                                "type": "TextBlock",
                                "weight": "Bolder",
                                "text": "department",
                                "size": "small",
                                "wrap": true,
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "TextBlock",
                                "weight": "Bolder",
                                "spacing": "None",
                                "text": titleTextAsString,
                                "size": "ExtraLarge",
                                "wrap": true,
                                "horizontalAlignment": "Center"
                            },
                            {
                                "type": "Media",
                                "poster": "${ThumbnailUrl}",
                                "sources": [
                                    {
                                        "mimeType": "video/mp4",
                                        "url": "${Url}"
                                    }
                                ]
                            },
                            {
                                "type": "TextBlock",
                                "text": "",
                                "wrap": true,
                                "horizontalAlignment": "Left"
                            },
                            {
                                "type": "TextBlock",
                                "wrap": true,
                                "size": "Small",
                                "weight": "Lighter",
                                "text": ""
                            },
                            {
                                "type": "ColumnSet",
                                "columns": [
                                    {
                                        "type": "Column",
                                        "width": "stretch",
                                        "items": [
                                            {
                                                "type": "Image",
                                                "url": "https://blcompanycommunicator.azurewebsites.net/image/DHLogo.png",
                                                "size": "Large"
                                            }
                                        ],
                                        "verticalContentAlignment": "Center"
                                    },
                                    {
                                        "type": "Column",
                                        "width": "stretch",
                                        "items": [
                                            {
                                                "type": "Image",
                                                "url": "https://blcompanycommunicator.azurewebsites.net/image/FTGOT.png"
                                            }
                                        ],
                                        "verticalContentAlignment": "Bottom"
                                    }
                                ]
                            }
                        ],
                        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                        "version": "1.2"
                    }
                );
                      
            }
        case 3:
            {
                return (
                    {
                        "type": "AdaptiveCard",
                        "body": [
                            
                            {
                                "type": "Media",
                                "poster": "${ThumbnailUrl}",
                                "sources": [
                                    {
                                        "mimeType": "video/mp4",
                                        "url": "${Url}"
                                    }
                                ]
                            }
                        ],
                        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                        "version": "1.2"
                    }
                );
            }
    }
}

export const getCardTitle = (card: any) => {
    return card.body[1].text;
}
export const setCardPosterAction = (card: any, action?: string)=> {
    card.body[0].selectAction.url = action;
}

export const setCardTitle = (card: any, title: string) => {
    card.body[1].text = title;
}
export const setCardPosterUrl = (card: any, imageLink?: string) => {
    card.backgroundImage.url = imageLink;
}

export const getCardImageLink = (card: any) => {
    return card.body[2].url;
}
export const setCardDepartment = (card: any, department?: string) => {
    card.body[0].text = department;
}
export const setCardImageLink = (card: any, imageLink?: string) => {
    card.body[2].url = imageLink;
}
export const setCardPosterLink = (card: any, imageLink?: string) => {
    card.body[2].poster = imageLink;
}
export const setCardVideoLink = (card: any, videoLink?: string) => {
    card.body[2].sources[0].url = videoLink;
}
export const setCardVideoPlayerUrl = (card: any, videoLink?: string) => {
    card.body[0].sources[0].url = videoLink;
}
export const getCardSummary = (card: any) => {
    return card.body[3].text;
}

export const setCardSummary = (card: any, summary?: string) => {
    card.body[3].text = summary;
}

export const getCardAuthor = (card: any) => {
    return card.body[4].text;
}

export const setCardAuthor = (card: any, author?: string) => {
    card.body[4].text = author;
}

export const getCardBtnTitle = (card: any) => {
    return card.actions[0].title;
}

export const getCardBtnLink = (card: any) => {
    return card.actions[0].url;
}

export const setCardBtn = (card: any, buttonTitle?: string, buttonLink?: string) => {
    if (buttonTitle && buttonLink) {
        //buttonTitle.forEach(function () {
        //    card.actions
        //})
        card.actions = [
            {
                "type": "Action.OpenUrl",
                "title": buttonTitle,
                "url": buttonLink
            }
        ];
    } else {
        delete card.actions;
    }
}
