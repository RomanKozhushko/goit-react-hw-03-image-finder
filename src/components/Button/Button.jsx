import React from 'react';
import PropTypes from 'prop-types'
import { ButtonStyle } from './Button.styled'

export default function Button ({ loadMore }) {
    return (
        <ButtonStyle type="button" onClick={loadMore}>Load more</ButtonStyle>
    )
}
 
Button.propTypes = {
    loadMore: PropTypes.func
}