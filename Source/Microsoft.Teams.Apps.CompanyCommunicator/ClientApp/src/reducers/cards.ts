export default function() {
	return [
		{
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '1.0',
			body: [
				{
					speak: "Tom's Pie is a Pizza restaurant which is rated 9.3 by customers.",
					type: 'ColumnSet',
					columns: [
						{
							type: 'Column',
							width: 2,
							items: [
								{
									type: 'TextBlock',
									text: '${address.addressLocality}, ${address.addressRegion}',
									wrap: true
								},
								{
									type: 'TextBlock',
									text: '${name}',
									weight: 'bolder',
									size: 'extraLarge',
									spacing: 'none',
									wrap: true
								},
								{
									type: 'TextBlock',
									$when: '${aggregateRating.ratingValue <= 1}',
									text:
										'${aggregateRating.ratingValue} star (${aggregateRating.reviewCount} reviews) · ${priceRange}',
									isSubtle: true,
									spacing: 'none',
									wrap: true
								},
								{
									type: 'TextBlock',
									$when: '${aggregateRating.ratingValue >= 2}',
									text:
										'${aggregateRating.ratingValue} stars (${aggregateRating.reviewCount} reviews) · ${priceRange}',
									isSubtle: true,
									spacing: 'none',
									wrap: true
								},
								{
									type: 'TextBlock',
									text: '**${review[0].author}** said "${review[0].description}"',
									size: 'small',
									wrap: true,
									maxLines: 3
								}
							]
						},
						{
							type: 'Column',
							width: 1,
							items: [
								{
									type: 'Image',
									url: '${image}',
									size: 'auto'
								}
							]
						}
					]
				}
			],
			actions: [
				{
					type: 'Action.OpenUrl',
					title: 'More Info',
					url: '${url}'
				}
			]
		},
		{
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '1.1',
			fallbackText:
				'This card requires Media to be viewed. Ask your platform to update to Adaptive Cards v1.1 for this and more!',
			body: [
				{
					type: 'Media',
					poster: '${ThumbnailUrl}',
					sources: [
						{
							mimeType: 'video/mp4',
							url: '${Url}'
						}
					]
				}
			],
			actions: [
				{
					type: 'Action.OpenUrl',
					title: 'Learn more',
					url: 'https://adaptivecards.io'
				}
			]
		},
		{
			$schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
			type: 'AdaptiveCard',
			version: '0.5',
			backgroundImage: '${backgroundImageUrl}',
			body: [
				{
					type: 'ColumnSet',
					columns: [
						{
							type: 'Column',
							width: 1,
							items: [
								{
									type: 'Image',
									url: '${gameImageUrl}',
									size: 'Stretch'
								}
							]
						},
						{
							type: 'Column',
							width: 1,
							items: [
								{
									type: 'TextBlock',
									text: '${action.title}',
									color: 'Light',
									weight: 'Bolder',
									wrap: true,
									size: 'default',
									horizontalAlignment: 'Center'
								}
							]
						}
					]
				}
			]
		}
	];
}
