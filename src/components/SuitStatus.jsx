import React, { Component } from 'react';

import Modal from './Modal.jsx'
import TestStatus  from './TestStatus.jsx'

import './SuitStatus.css';

class SuitStatus extends Component {
    getTestsStatus() {
        const sortedTests = this.props.tests.sort((a, b) => a.numberInSuite - b.numberInSuite)
        const testStatus = sortedTests.map(test => {
            return <TestStatus
                key={test.id}
                test={test}
            />
        });
        return testStatus
    }

    render() {
        const {
            name,
            passed,
            onClose
        } = this.props;

        const getTestsStatus = this.getTestsStatus();
        console.log(passed, '/')
        const title = `${name}: ${passed ? "passed" : "failed"}`

        return (
            <div className="SuitStatus">
                <Modal
                    title={title}
                    onClose={onClose}
                    body={getTestsStatus}
                />
            </div>
        );
    }
}

export default SuitStatus;
