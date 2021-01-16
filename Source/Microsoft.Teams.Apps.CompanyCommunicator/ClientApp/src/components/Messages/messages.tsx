import * as React from 'react';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { TooltipHost } from 'office-ui-fabric-react';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Icon, Loader, List, Flex, Text, Input } from '@stardust-ui/react';
import * as microsoftTeams from '@microsoft/teams-js';
import { selectMessage, getMessagesList, getDraftMessagesList, getFilteredList, searchBarChanged } from '../../actions';
import { getBaseUrl } from '../../configVariables';
import Overflow from '../OverFlow/sentMessageOverflow';
import './messages.scss';
import { TFunction } from 'i18next';
import { formatNumber } from '../../i18n';

export interface ITaskInfo {
	title?: string;
	height?: number;
	width?: number;
	url?: string;
	card?: string;
	fallbackUrl?: string;
	completionBotId?: string;
}

export interface IMessage {
	title: string;
	sentDate: string;
	recipients: string;
	acknowledgements?: string;
	reactions?: string;
	responses?: string;
	departmentName: string;
	senderName: string;
	like: number;
	heart: number;
	surprised: number;
	laugh: number;
	angry: number;
	sad: number;
}

export interface IMessageProps extends WithTranslation {
	messagesList: IMessage[];
	selectMessage?: any;
	getMessagesList?: any;
	getDraftMessagesList?: any;
	getFilteredList?: any;
	searchedText?: any;
	searchBarChanged?: any;
	filteredList: IMessage[];
}

export interface IMessageState {
	message: IMessage[];
	loader: boolean;
	search: any;
	filteredmessages: any;
}

class Messages extends React.Component<IMessageProps, IMessageState> {
	readonly localize: TFunction;
	private interval: any;
	private isOpenTaskModuleAllowed: boolean;
	//private searchedValue: string;
	constructor(props: IMessageProps) {
		super(props);
		initializeIcons();
		this.localize = this.props.t;
		this.isOpenTaskModuleAllowed = true;

		this.state = {
			message: this.props.messagesList,
			loader: true,
			search: this.props.searchedText,
			filteredmessages: this.props.filteredList
		};
		this.escFunction = this.escFunction.bind(this);
	}

	public componentDidMount() {
		microsoftTeams.initialize();
		this.props.getMessagesList();

		document.addEventListener('keydown', this.escFunction, false);

		this.interval = setInterval(() => {
			//console.log("searchTextValue", search)
			this.props.getMessagesList();
			this.getFilteredList();
		}, 60000);
	}

	public componentWillUnmount() {
		document.removeEventListener('keydown', this.escFunction, false);
		clearInterval(this.interval);
	}

	public componentWillReceiveProps(nextProps: any) {
		if (this.props !== nextProps) {
			this.setState({
				message: nextProps.messagesList,
				loader: false,
				filteredmessages: nextProps.filteredList
			});
		}
	}

	public render(): JSX.Element {
		let keyCount = 0;
		const processItem = (message: any) => {
			keyCount++;
			const out = {
				key: keyCount,
				content: this.messageContent(message),
				onClick: (): void => {
					let url = getBaseUrl() + '/viewstatus/' + message.id + '?locale={locale}';
					this.onOpenTaskModule(null, url, this.localize('ViewStatus'));
				},
				styles: { margin: '0.2rem 0.2rem 0 0' }
			};
			return out;
		};

		const label = this.processLabels();
		const outList = this.state.message.map(processItem);
		const filteredlist = this.state.filteredmessages.map(processItem);

		const allFilteredMessages = [ ...label, ...filteredlist ];
		const allMessages = [ ...label, ...outList ];
		var searchedValue = new String(this.props.searchedText);

		if (this.state.loader) {
			return <Loader />;
		} else if (this.state.message.length === 0) {
			return <div className="results">{this.localize('EmptySentMessages')}</div>;
		} else if (this.props.searchedText != null && searchedValue.length >= 3) {
			console.log('SearchedValue ', searchedValue);
			return <div> <br/> <List selectable items={allFilteredMessages} className="list" /></div>;
		} else {
			return <div> <br /> <List selectable items={allMessages} className="list" /></div>;
		}
	}

	private getFilteredList = () => {
		//console.log(this.props.searchedText);
	};

	private processLabels = () => {
		const out = [
			{
				key: 'labels',
				content: (
					<Flex vAlign="center" fill gap="gap.small">
						<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }} grow={1}>
							<Text truncated weight="bold" content={this.localize('TitleText')} />
						</Flex.Item>
						<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }} shrink={false}>
							<Text truncated content={this.localize('SenderName')} weight="bold" />
						</Flex.Item>
						<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }} shrink={false}>
							<Text truncated content={this.localize('DepartmentName')} weight="bold" />
						</Flex.Item>
						<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }}>
							<Text />
						</Flex.Item>
						<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }} shrink={false}>
							<Text truncated content={this.localize('Recipients')} weight="bold" />
						</Flex.Item>
						<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }} shrink={false}>
							<Text truncated content={this.localize('Reactions')} weight="bold" />
						</Flex.Item>
						<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }}>
							<Text truncated content={this.localize('Sent')} weight="bold" />
						</Flex.Item>
						<Flex.Item shrink={0}>
							<Overflow title="" />
						</Flex.Item>
					</Flex>
				),
				styles: { margin: '0.2rem 0.2rem 0 0' }
			}
		];
		return out;
	};

	private renderSendingText = (message: any) => {
		var text = '';
		switch (message.status) {
			case 'Queued':
				text = this.localize('Queued');
				break;
			case 'SyncingRecipients':
				text = this.localize('SyncingRecipients');
				break;
			case 'InstallingApp':
				text = this.localize('InstallingApp');
				break;
			case 'Sending':
				let sentCount =
					(message.succeeded ? message.succeeded : 0) +
					(message.failed ? message.failed : 0) +
					(message.unknown ? message.unknown : 0);

				text = this.localize('SendingMessages', {
					SentCount: formatNumber(sentCount),
					TotalCount: formatNumber(message.totalMessageCount)
				});
				break;
			case 'Sent':
			case 'Failed':
				text = '';
		}

		return <Text truncated content={text} />;
	};

	private messageContent = (message: any) => {
		

		return (
			<Flex className="listContainer" vAlign="center" fill gap="gap.small">
				<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }} grow={1}>
					<Text truncated content={message.title} />
				</Flex.Item>
				<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }} grow={1}>
					<Text truncated content={message.senderName} />
				</Flex.Item>

				<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }}>
					<Text truncated content={message.departmentName} />
				</Flex.Item>

				<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }}>
					{this.renderSendingText(message)}
				</Flex.Item>
				<Flex.Item size="size.quarter" variables={{ 'size.quarter': '10%' }} grow={1} >
					<div>
						<TooltipHost content={this.props.t('TooltipSuccess')} calloutProps={{ gapSpace: 0 }}>
							<Icon name="stardust-checkmark" xSpacing="after" className="succeeded" outline />
							<span className="semiBold">{formatNumber(message.succeeded)}</span>
						</TooltipHost>
						<TooltipHost content={this.props.t('TooltipFailure')} calloutProps={{ gapSpace: 0 }}>
							<Icon name="stardust-close" xSpacing="both" className="failed" outline />
							<span className="semiBold">{formatNumber(message.failed)}</span>
						</TooltipHost>
						{message.unknown && (
							<TooltipHost content="Unknown" calloutProps={{ gapSpace: 0 }}>
								<Icon name="exclamation-circle" xSpacing="both" className="unknown" outline />
								<span className="semiBold">{formatNumber(message.unknown)}</span>
							</TooltipHost>
						)}
					</div>
				</Flex.Item>
				<Flex.Item size="size.quarter" variables={{ 'size.quarter': '18%' }} shrink={false} grow={1}>
					<div>
						<TooltipHost content={this.props.t('TooltipLike')} calloutProps={{ gapSpace: 0 }}>
							<img src="https://statics.teams.cdn.office.net/evergreen-assets/skype/v2/yes/20.png?v=4" className="reaction" />
							<span className="semiBold">{formatNumber(message.like)}</span>
						</TooltipHost>
						<TooltipHost content={this.props.t('TooltipHeart')} calloutProps={{ gapSpace: 0 }}>
							<img src="https://statics.teams.cdn.office.net/evergreen-assets/skype/v2/heart/20.png?v=4" className="reaction" />
							<span className="semiBold">{formatNumber(message.heart)}</span>
						</TooltipHost>
						<TooltipHost content={this.props.t('TooltipLaugh')} calloutProps={{ gapSpace: 0 }}>
							<img src="https://statics.teams.cdn.office.net/evergreen-assets/skype/v2/laugh/20.png?v=4" className="reaction" />
							<span className="semiBold">{formatNumber(message.laugh)}</span>
						</TooltipHost>
						<TooltipHost content={this.props.t('TooltipSurprised')} calloutProps={{ gapSpace: 0 }}>
							<img src="https://statics.teams.cdn.office.net/evergreen-assets/skype/v2/surprised/20.png?v=4" className="reaction" />
							<span className="semiBold">{formatNumber(message.surprised)}</span>
						</TooltipHost>
						<TooltipHost content={this.props.t('TooltipSad')} calloutProps={{ gapSpace: 0 }}>
							<img src="https://statics.teams.cdn.office.net/evergreen-assets/skype/v2/sad/20.png?v=4" className="reaction" />
							<span className="semiBold">{formatNumber(message.sad)}</span>
						</TooltipHost>
						<TooltipHost content={this.props.t('TooltipAngry')} calloutProps={{ gapSpace: 0 }}>
							<img src="https://statics.teams.cdn.office.net/evergreen-assets/skype/v2/angry/20.png?v=4" className="reaction" />
							<span className="semiBold">{formatNumber(message.angry)}</span>
						</TooltipHost>
						
					</div>
				</Flex.Item>
				<Flex.Item size="size.quarter" variables={{ 'size.quarter': '14%' }}>
					<Text truncated className="semiBold" content={message.sentDate} />
				</Flex.Item>
				<Flex.Item shrink={0}>
					<Overflow message={message} title="" />
				</Flex.Item>
			</Flex>
		);
	};

	private escFunction = (event: any) => {
		if (event.keyCode === 27 || event.key === 'Escape') {
			microsoftTeams.tasks.submitTask();
		}
	};

	public onOpenTaskModule = (event: any, url: string, title: string) => {
		if (this.isOpenTaskModuleAllowed) {
			this.isOpenTaskModuleAllowed = false;
			let taskInfo: ITaskInfo = {
				url: url,
				title: title,
				height: 530,
				width: 1000,
				fallbackUrl: url
			};

			let submitHandler = (err: any, result: any) => {
				this.isOpenTaskModuleAllowed = true;
			};

			microsoftTeams.tasks.startTask(taskInfo, submitHandler);
		}
	};
}

const mapStateToProps = (state: any) => {
	return {
		messagesList: state.messagesList,
		searchedText: state.searchedText,
		filteredList: state.filteredList
	};
};

const messagesWithTranslation = withTranslation()(Messages);
export default connect(mapStateToProps, {
	selectMessage,
	getMessagesList,
	getDraftMessagesList,
	getFilteredList,
	searchBarChanged
})(messagesWithTranslation);
