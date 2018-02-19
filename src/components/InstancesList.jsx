import React, { Component } from 'react';

import DynamicTable   from '@atlaskit/dynamic-table';
import CheckIcon      from '@atlaskit/icon/glyph/check';
import CrossIcon      from '@atlaskit/icon/glyph/cross';

import './InstancesList.css';

class InstancesList extends Component {
    state = {
        head: {
            cells: []
        },
        rows: []
    }

    componentWillMount() {
        this.getSuitsList(this.props);
        this.getInstancesList(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.integration) {
            this.getSuitsList(nextProps);
            this.getInstancesList(nextProps);

        }
    }

    getSuitsList(props) {
        const head = {
            cells: []
        };
        const { integration, selectedTab } = props;

        const titles = {
            jira: 'Jira base URL',
            bitbucket: 'Bitbucket base URL'
        }

        head.cells.push({
            content: titles[selectedTab]
        })

        integration[0].testsHarvest.map(suit => {
            return head.cells.push({
                content: suit.name
            })
        })

        this.setState({ head })
    }

    getInstancesList(props) {
        const rows = [];
        const { integration, onModalClick } = props;

        integration.map(instance => {
            const statuses = instance.testsHarvest.map(suit => {
                return {
                    content: suit.passed ? <CheckIcon onClick={onModalClick.bind(null, suit)}/>
                        : <CrossIcon onClick={onModalClick.bind(null, suit)}/>
                }
            })
            return rows.push({
                cells: [
                    {
                        content: <a href={instance.system.baseUrl} target="_blank"> {instance.system.baseUrl} </a>
                    },
                    ...statuses
                ]
            })
        })

        this.setState({ rows })

    }

    render() {
        const { head, rows } = this.state;

        return (
            <DynamicTable
                head={head}
                rows={rows}
                rowsPerPage={100}
                defaultPage={1}
                isLoading={false}
                isFixedSize
            />
        )
    }
}

export default InstancesList;