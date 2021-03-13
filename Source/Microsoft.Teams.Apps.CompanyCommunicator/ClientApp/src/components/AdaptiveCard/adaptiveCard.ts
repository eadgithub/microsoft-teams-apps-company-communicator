import { TFunction } from "i18next";
import { getBaseUrl } from '../../configVariables';


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
                                "size": "medium",
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
                                                "url": getBaseUrl()+"/image/Customs.png",
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
                                                "url": getBaseUrl() + "/image/UAE.png"
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
                        "body": [
                            {
                                "type": "Image",
                                "width": "400px",
                                "size": "Stretch",
                                "spacing":"Default",
                                "url": getBaseUrl()+"/image/banner.png",
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
                                "size": "medium",
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
                                                "url": getBaseUrl()+"/image/Customs.png",
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
                                                "url": getBaseUrl()+"/image/UAE.png"
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
        case 4:
            {
                return (
                    {
                        "type": "AdaptiveCard",
                        "body": [
                            {
                                "type": "TextBlock",
                                "weight": "Bolder",
                                "text": "department",
                                "size": "medium",
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
                                "horizontalAlignment": "Right"
                            },
                            {
                                "type": "TextBlock",
                                "wrap": true,
                                "size": "Small",
                                "weight": "Lighter",
                                "text": "",
                                "horizontalAlignment": "Right"
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
                                                "url": getBaseUrl()+"/image/UAE.png",
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
                                                "url": getBaseUrl()+"/image/Customs.png"
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
        case 5:
            {
                return (
                    {
                        "type": "AdaptiveCard",
                        "body": [
                            {
                                "type": "TextBlock",
                                "weight": "Bolder",
                                "text": "department",
                                "size": "medium",
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
                                "horizontalAlignment": "Right"
                            },
                            {
                                "type": "TextBlock",
                                "wrap": true,
                                "size": "Small",
                                "weight": "Lighter",
                                "text": "",
                                "horizontalAlignment": "Right"
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
                                                "url": getBaseUrl()+"/image/UAE.png",
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
                                                "url": getBaseUrl()+"/image/Customs.png"
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
    card.body[0].url = imageLink;
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
export const setCardVideoPlayerPoster = (card: any, imageLink?: string) => {
    card.body[0].poster = imageLink;
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
