import PropTypes from 'prop-types';
import { ImageGalleryItemStyle, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ item, onClick }) { 
    return (
        <ImageGalleryItemStyle onClick={() => onClick(item) }> 
            <ImageGalleryItemImage src={item.webformatURL} alt="" />
        </ImageGalleryItemStyle>
    )
}

ImageGalleryItem.propTypes = {
    item: PropTypes.object,
    onClick: PropTypes.func
}