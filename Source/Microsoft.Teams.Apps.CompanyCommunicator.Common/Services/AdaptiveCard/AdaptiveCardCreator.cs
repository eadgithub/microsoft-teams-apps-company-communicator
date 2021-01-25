// <copyright file="AdaptiveCardCreator.cs" company="Microsoft">
// Copyright (c) Microsoft. All rights reserved.
// </copyright>

namespace Microsoft.Teams.Apps.CompanyCommunicator.Common.Services.AdaptiveCard
{
    using System;
    using System.Collections.Generic;
    using AdaptiveCards;
    using Microsoft.Teams.Apps.CompanyCommunicator.Common.Repositories.NotificationData;

    /// <summary>
    /// Adaptive Card Creator service.
    /// </summary>
    public class AdaptiveCardCreator
    {
        /// <summary>
        /// Creates an adaptive card.
        /// </summary>
        /// <param name="notificationDataEntity">Notification data entity.</param>
        /// <returns>An adaptive card.</returns>
        public AdaptiveCard CreateAdaptiveCard(NotificationDataEntity notificationDataEntity)
        {
            return this.CreateAdaptiveCard(
                notificationDataEntity.Title,
                notificationDataEntity.ImageLink,
                notificationDataEntity.Summary,
                notificationDataEntity.Author,
                notificationDataEntity.ButtonTitle,
                notificationDataEntity.ButtonLink, 
                notificationDataEntity.DepartmentName);
        }

        /// <summary>
        /// Create an adaptive card instance.
        /// </summary>
        /// <param name="title">The adaptive card's title value.</param>
        /// <param name="imageUrl">The adaptive card's image URL.</param>
        /// <param name="summary">The adaptive card's summary value.</param>
        /// <param name="author">The adaptive card's author value.</param>
        /// <param name="buttonTitle">The adaptive card's button title value.</param>
        /// <param name="buttonUrl">The adaptive card's button url value.</param>
        /// <returns>The created adaptive card instance.</returns>
        public AdaptiveCard CreateAdaptiveCard(
            string title,
            string imageUrl,
            string summary,
            string author,
            string buttonTitle,
            string buttonUrl,
            string department)
        {
            var version = new AdaptiveSchemaVersion(1, 2);
            AdaptiveCard card = new AdaptiveCard(version);
            card.Body.Add(new AdaptiveTextBlock()
            {
                Text = department,
                Size = AdaptiveTextSize.Small,
                Weight = AdaptiveTextWeight.Bolder,
                HorizontalAlignment = AdaptiveHorizontalAlignment.Center,
                Wrap = true,
            });
            card.Body.Add(new AdaptiveTextBlock()
            {
                Text = title,
                Spacing= AdaptiveSpacing.None,
                Size = AdaptiveTextSize.ExtraLarge,
                Weight = AdaptiveTextWeight.Bolder,
                HorizontalAlignment = AdaptiveHorizontalAlignment.Center,
                Wrap = true,
            });

            if (!string.IsNullOrWhiteSpace(imageUrl))
            {
                card.Body.Add(new AdaptiveImage()
                {
                    Url = new Uri(imageUrl, UriKind.RelativeOrAbsolute),
                    Spacing = AdaptiveSpacing.Default,
                    Size = AdaptiveImageSize.Stretch,
                    AltText = string.Empty,
                });
            }

            if (!string.IsNullOrWhiteSpace(summary))
            {
                card.Body.Add(new AdaptiveTextBlock()
                {
                    Text = summary,
                    HorizontalAlignment = AdaptiveHorizontalAlignment.Left,
                    Wrap = true,
                });
            }

            if (!string.IsNullOrWhiteSpace(author))
            {
                card.Body.Add(new AdaptiveTextBlock()
                {
                    Text = author,
                    Size = AdaptiveTextSize.Small,
                    Weight = AdaptiveTextWeight.Lighter,
                    Wrap = true,
                });
            }

            if (!string.IsNullOrWhiteSpace(buttonTitle)
                && !string.IsNullOrWhiteSpace(buttonUrl))
            {
                card.Actions.Add(new AdaptiveOpenUrlAction()
                {
                    Title = buttonTitle,
                    Url = new Uri(buttonUrl, UriKind.RelativeOrAbsolute),
                });
            }
            card.Body.Add(new AdaptiveColumnSet()
            {
                Columns = new List<AdaptiveColumn>() {
                    new AdaptiveColumn()
                    {
                        Width = AdaptiveColumnWidth.Stretch,
                        VerticalContentAlignment = AdaptiveVerticalContentAlignment.Center,
                        Items = new List<AdaptiveElement>()
                        {
                            new AdaptiveImage()
                            {
                                Url = new Uri("https://blcompanycommunicator.azurewebsites.net/image/DHLogo.png", UriKind.RelativeOrAbsolute),
                                Size = AdaptiveImageSize.Large,
                            },
                        },
                    },
                    new AdaptiveColumn()
                    {
                        Width = AdaptiveColumnWidth.Stretch,
                        VerticalContentAlignment = AdaptiveVerticalContentAlignment.Bottom,
                        Items = new List<AdaptiveElement>()
                        {
                            new AdaptiveImage()
                            {
                                Url = new Uri("https://blcompanycommunicator.azurewebsites.net/image/FTGOT.png", UriKind.RelativeOrAbsolute),
                                Size = AdaptiveImageSize.Stretch,
                            },
                        },
                    },
                    },
            });

            return card;
        }
        public AdaptiveCard CreateAdaptiveVideoCard(
            string title,
            string imageUrl,
            string summary,
            string author,
            string buttonTitle,
            string buttonUrl, 
            string id,
            string department)
        {
            var version = new AdaptiveSchemaVersion(1, 2);
            AdaptiveCard card = new AdaptiveCard(version);
            card.Body.Add(new AdaptiveTextBlock()
            {
                Text = title,
                Size = AdaptiveTextSize.ExtraLarge,
                Weight = AdaptiveTextWeight.Bolder,
                HorizontalAlignment = AdaptiveHorizontalAlignment.Center,
                Wrap = true,
            });
            card.Body.Add(new AdaptiveTextBlock()
            {
                Text = title,
                Size = AdaptiveTextSize.ExtraLarge,
                Weight = AdaptiveTextWeight.Bolder,
                HorizontalAlignment = AdaptiveHorizontalAlignment.Center,
                Wrap = true,
            });

            if (!string.IsNullOrWhiteSpace(imageUrl))
            {
                card.Body.Add(new AdaptiveImage()
                {
                    Url = new Uri(imageUrl, UriKind.RelativeOrAbsolute),
                    Spacing = AdaptiveSpacing.Default,
                    Size = AdaptiveImageSize.Stretch,
                    AltText = string.Empty,
                    SelectAction = new AdaptiveOpenUrlAction()
                    {
                        Url = new Uri("https://teams.microsoft.com/l/task/1c07cd26-a088-4db8-8928-ace382fa219f?url=https://companycommunicator.blueridgeit.com/videoPlayer/" + id + "&height=300&width=400&title=Video", UriKind.RelativeOrAbsolute),
                    },
                });
            }

            if (!string.IsNullOrWhiteSpace(summary))
            {
                card.Body.Add(new AdaptiveTextBlock()
                {
                    Text = summary,
                    HorizontalAlignment = AdaptiveHorizontalAlignment.Left,
                    Wrap = true,
                });
            }

            if (!string.IsNullOrWhiteSpace(author))
            {
                card.Body.Add(new AdaptiveTextBlock()
                {
                    Text = author,
                    Size = AdaptiveTextSize.Small,
                    Weight = AdaptiveTextWeight.Lighter,
                    Wrap = true,
                });
            }

            if (!string.IsNullOrWhiteSpace(buttonTitle)
                && !string.IsNullOrWhiteSpace(buttonUrl))
            {
                card.Actions.Add(new AdaptiveOpenUrlAction()
                {
                    Title = buttonTitle,
                    Url = new Uri(buttonUrl, UriKind.RelativeOrAbsolute),
                });
            }
            card.Body.Add(new AdaptiveColumnSet()
            {
                Columns = new List<AdaptiveColumn>() {
                    new AdaptiveColumn()
                    {
                        Width = AdaptiveColumnWidth.Stretch,
                        VerticalContentAlignment = AdaptiveVerticalContentAlignment.Center,
                        Items = new List<AdaptiveElement>()
                        {
                            new AdaptiveImage()
                            {
                                Url = new Uri("https://blcompanycommunicator.azurewebsites.net/image/DHLogo.png", UriKind.RelativeOrAbsolute),
                                Size = AdaptiveImageSize.Large,
                            },
                        },
                    },
                    new AdaptiveColumn()
                    {
                        Width = AdaptiveColumnWidth.Stretch,
                        VerticalContentAlignment = AdaptiveVerticalContentAlignment.Bottom,
                        Items = new List<AdaptiveElement>()
                        {
                            new AdaptiveImage()
                            {
                                Url = new Uri("https://blcompanycommunicator.azurewebsites.net/image/FTGOT.png", UriKind.RelativeOrAbsolute),
                                Size = AdaptiveImageSize.Stretch,
                            },
                        },
                    },
                    },
            });

            return card;
        }
        public AdaptiveCard CreateAdaptiveBannerCard(string imageUrl, string buttonUrl)
        {
            var version = new AdaptiveSchemaVersion(1, 1);
            AdaptiveCard card = new AdaptiveCard(version);
            card.BackgroundImage = new AdaptiveBackgroundImage() { Url = new Uri(imageUrl, UriKind.RelativeOrAbsolute), FillMode = AdaptiveImageFillMode.Cover };
            card.PixelMinHeight = 800;
            if (!string.IsNullOrWhiteSpace(imageUrl))
            {
                card.Body.Add(new AdaptiveImage()
                {
                    Url= new Uri("https://blcompanycommunicator-test.azurewebsites.net/image/transparentbanner.png", UriKind.RelativeOrAbsolute),
                    PixelWidth=500,
                    PixelHeight=800,
                    Size=AdaptiveImageSize.Stretch,
                    AltText = string.Empty,
                    SelectAction = new AdaptiveOpenUrlAction()
                    {
                        Url = new Uri(buttonUrl, UriKind.RelativeOrAbsolute),
                    },
                });
            }

            return card;
        }
    public string GetCardJson(NotificationDataEntity notificationDataEntity)
        {
            switch (notificationDataEntity.selectedTemplate)
            {
                case 0:
                    {
                        var x = this.CreateAdaptiveCard(
                notificationDataEntity.Title,
                notificationDataEntity.ImageLink,
                notificationDataEntity.Summary,
                notificationDataEntity.Author,
                notificationDataEntity.ButtonTitle,
                notificationDataEntity.ButtonLink, 
                notificationDataEntity.DepartmentName);
                        return x.ToJson();
                    }
                case 1:
                    {
                        var x = this.CreateAdaptiveVideoCard(
                notificationDataEntity.Title,
                notificationDataEntity.ImageLink,
                notificationDataEntity.Summary,
                notificationDataEntity.Author,
                notificationDataEntity.ButtonTitle,
                notificationDataEntity.ButtonLink,
                notificationDataEntity.Id,
                notificationDataEntity.DepartmentName);
                        return x.ToJson();
                    }
                case 2:
                    {
                        var x = this.CreateAdaptiveBannerCard(notificationDataEntity.ImageLink, notificationDataEntity.ButtonLink);
                        return x.ToJson();
                    }
            }
            return null;
        }
    }
}
