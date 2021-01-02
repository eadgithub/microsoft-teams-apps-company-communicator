//import { Button, Flex, FlexItem } from '@stardust-ui/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AdaptiveCards from 'adaptivecards';
import { Icon, Loader, Text, List, Button } from '@stardust-ui/react';
import * as ACData from 'adaptivecards-templating';
import { getBaseUrl } from '../../configVariables';
//import { Loader, Text, List } from '@fluentui/react-northstar';
import './templateSelector.scss';
import './teamTheme.scss';

import * as microsoftTeams from '@microsoft/teams-js';
interface Props {
	cards: any;
	selectedIndex: any;
	cardData: any;
	getDraftMessagesList?: any;
}
interface State {
	selectedIndex: any;
	itemListSelected: number;
	url: string;
}
interface ITaskInfo {
	title?: string;
	height?: number;
	width?: number;
	url?: string;
	card?: string;
	fallbackUrl?: string;
	completionBotId?: string;
}

export class templateSelector extends React.Component<Props, State, ITaskInfo> {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		selectedIndex: -1,
	// 		itemListSelected: 0,

	// 	};
	// }

	state = {
		selectedIndex: 0,
		itemListSelected: 0,
		url: ''
	};
	listItems = [ 'Default', 'Video', 'Informational' ];
	itemIndex = -1;

	public async componentDidMount() {
		this.getAdaptiveCard(0);
	}
	getAdaptiveCard(x) {
		var template = new ACData.Template(this.props.cards[x]);
		var cardPayload = template.expand({ $root: this.props.cardData[x] });
		console.log();
		let adaptiveCard = new AdaptiveCards.AdaptiveCard();
		adaptiveCard.parse(cardPayload);
		let renderedCard = adaptiveCard.render();
		const container = document.getElementsByClassName('adaptiveCardContainer')[0].firstChild;
		if (container != null) {
			container.replaceWith(renderedCard);
		} else {
			document.getElementsByClassName('adaptiveCardContainer')[0].appendChild(renderedCard);
		}
	}

	async itemSelected(e, NewProps) {
		await this.setState({ itemListSelected: NewProps.selectedIndex });
		console.log(this.state.itemListSelected);
		this.getAdaptiveCard(this.state.itemListSelected);
	}

	async nextClicked() {
		var selectedTemplate = this.state.itemListSelected.toString();
		await this.setState({
			url: getBaseUrl() + '/newmessage?selected=' + selectedTemplate
		});

		let taskInfo: ITaskInfo = {
			url: this.state.url,
			title: 'Message',
			height: 530,
			width: 1000,
			fallbackUrl: this.state.url
		};

		let submitHandler = (err: any, result: any) => {
			this.props.getDraftMessagesList();
		};

		microsoftTeams.tasks.startTask(taskInfo, submitHandler);
	}

	render() {
		return (
			<div className="taskModule">
				<div className="formContainer">
					<div className="formContentContainer">
						<List selectable onSelectedIndexChange={this.itemSelected.bind(this)} items={this.listItems} />
					</div>
					<div>
						<div className="adaptiveCardContainer" />
					</div>
				</div>
				<div className="footerContainer">
					<div className="buttonContainer">
						<Button content="next" onClick={this.nextClicked.bind(this)} primary />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	cards: state.cards,
	cardData: state.cardData,
	messages: state.draftMessagesList
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(templateSelector);
