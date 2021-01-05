import { TFunction } from "i18next";

export const getInitAdaptiveBannerCard = (t: TFunction) => {
    const titleTextAsString = t("TitleText");
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
                    "url": "https://blcompanycommunicator-test.azurewebsites.net/image/transparentbanner.png"
                }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.2"
        }
    );
}





export const getCardImageLink = (card: any) => {
    return card.backgroundImage[0].url;
}

export const setCardPosterUrl = (card: any, imageLink?: string) => {
    card.backgroundImage.url = imageLink;
}


