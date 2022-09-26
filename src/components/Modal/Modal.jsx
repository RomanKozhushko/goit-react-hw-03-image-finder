import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalStyle } from './Modal.styled'

const modalRoot = document.getElementById('modal-root');

export default class Modal extends Component { 

    componentDidMount() {
        const { onEsc } = this.props;
        document.addEventListener('keydown', onEsc);
    }
    componentWillUnmount() {
        const { onEsc } = this.props;
        document.removeEventListener('keydown', onEsc);
    }

    render() {
        const { currentImg, handleOverlayClick } = this.props;
        return createPortal(
            <Overlay onClick={ handleOverlayClick}>
                <ModalStyle>
                    <img src={currentImg.largeImageURL} alt="largeImageURL" />
                </ModalStyle>
            </Overlay>, modalRoot
        )
    }
}
Modal.proptype = {
    currentImg: PropTypes.object,
    handleOverlayClick: PropTypes.func,
    onEsc: PropTypes.func
}