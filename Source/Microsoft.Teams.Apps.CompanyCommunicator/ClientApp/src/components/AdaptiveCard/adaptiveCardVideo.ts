import { TFunction } from "i18next";

export const getInitAdaptiveVideoCard = (t: TFunction) => {
    const titleTextAsString = t("TitleText");
    return (
        {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "TextBlock",
                    "text": "Title",
                    "wrap": true,
                    "horizontalAlignment": "Center",
                    "size": "ExtraLarge",
                    "fontType": "Default"
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
                }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.1"
        }
    );
}

export const getCardTitle = (card: any) => {
    return card.body[0].text;
}

export const setVideoCardTitle = (card: any, title: string) => {
    card.body[0].text = title;
}

export const getCardImageLink = (card: any) => {
    return card.body[1].url;
}

export const setCardPosterLink = (card: any, imageLink?: string) => {
    card.body[1].poster = imageLink;
}
export const getCardVideoLink = (card: any) => {
    return card.body[1].sources[0].url;
}

export const setCardVideoLink = (card: any, videoLink?: string) => {
    card.body[1].sources[0].url = videoLink;
}
export const getCardBtnTitle = (card: any) => {
    return card.actions[0].title;
}

export const getCardBtnLink = (card: any) => {
    return card.actions[0].url;
}

export const setCardBtn = (card: any, buttonTitle?: string, buttonLink?: string) => {
    if (buttonTitle && buttonLink) {
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
