import React, { Component } from 'react';
import {CopyToClipboard}               from 'react-copy-to-clipboard';
// import { AkCode }                      from '@atlaskit/code';
import CopyIcon                        from '@atlaskit/icon/glyph/copy';

import './TestStatus.css';

class TestStatus extends Component {
    getTeststatus() {
        const {
            test
        } = this.props;

        let customFields = '';
        if(test.type === 'ASSERT') {
            customFields = <div>
                got: {test.got ? "true" : "false"} <br/>
                expected: {test.expected ? "true" : "false"}<br/>
            </div>
        }
        if(test.type === 'API_CALL') {
            customFields = <div>
                req.url: <a href={test.req.url} target="_blank">{test.req.url}</a><br/>
                req.method: {test.req.method}<br/>
                res.status: {test.res.status}<br/>
            </div>
        }

        const testStatus = <div className="TestStatus">
            <b>{test.description}</b>
            <CopyToClipboard text={JSON.stringify(test, null, 2)}
                onCopy={() => console.log('cop')}
                >
                <CopyIcon />
            </CopyToClipboard>
            <br/>
            {customFields}
            passed: {test.passed ? "true" : "false"}<br/>
        </div>

        return testStatus;
    }
    render() {
        const getTeststatus = this.getTeststatus();

        return (
            <div>
                {getTeststatus}
            </div>
        )
    }
}
export default TestStatus;