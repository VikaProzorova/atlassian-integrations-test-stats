import React, { Component }    from 'react';
import styled                             from 'styled-components';
import Modal, { ModalHeader, ModalTitle } from '@atlaskit/modal-dialog';
import Button                             from '@atlaskit/button';
import CrossIcon                          from '@atlaskit/icon/glyph/cross';
import { colors }                         from '@atlaskit/theme';

const Body = styled.div`
    align-items: left;
    display: flex;
    flex-direction: column;
    margin: 20px;
`;

class CustomModal extends Component {
    render() {
        const {
            title,
            body,
            onClose
        } = this.props;

        const Header = ({showKeyline }) => (
            <ModalHeader showKeyline={showKeyline}>
                <ModalTitle> {title} </ModalTitle>
                <Button onClick={onClose} appearance="link" spacing="none">
                    <CrossIcon label="Close Modal" primaryColor={colors.R400} size="small" />
                </Button>
            </ModalHeader>
        );
        return (
            <Modal
                header={Header}
                onClose={onClose}
                width="large"
            >
                <Body>
                    {body}
                </Body>
            </Modal>
        )
    }
}

export default CustomModal;