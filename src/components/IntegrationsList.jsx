import React, { Component } from 'react';
import Tabs                 from '@atlaskit/tabs';

import responseSample    from '../dataExample.js'
import InstancesList     from './InstancesList.jsx'
import SuitStatus        from './SuitStatus.jsx'

import './IntegrationsList.css';

class IntegrationsList extends Component {
    state = {
        tabs: [],
        selectedTab: Object.keys(responseSample.data)[0],
        suitName: '',
        suitPassed: '',
        suitTests: [],
        modalOpen: false
    }

    componentWillMount() {
        const {tabs} = this.state;

        Object.keys(responseSample.data).map(integration => {
            return tabs.push({
                label: integration,
                content: <InstancesList
                    integration={responseSample.data[integration]}
                    selectedTab={integration}
                    onModalClick={this.onModalClick}
                />,
                id: integration
            })
        })

        this.setState({ tabs })
    }

    onSelectTab = ({ id }) => {
        this.setState({ selectedTab: id});
    }

    onOpenModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    }

    onModalClick = suit => {
        this.setState({
            suitName: suit.name,
            suitPassed: suit.passed,
            suitTests: suit.Tests
        });
        this.onOpenModal();
    }

    render() {
        const {
            suitName,
            suitPassed,
            suitTests,
            tabs,
            modalOpen
        } = this.state;

        return (
            <div className="IntegrationsList">
                <Tabs
                    tabs={tabs}
                    onSelect={this.onSelectTab}
                />
                {
                    modalOpen
                    ? <SuitStatus
                        name={suitName}
                        passed={suitPassed}
                        tests={suitTests}
                        onClose={this.onOpenModal}
                    />
                    : null
                }
            </div>
        )
    }
}

export default IntegrationsList;