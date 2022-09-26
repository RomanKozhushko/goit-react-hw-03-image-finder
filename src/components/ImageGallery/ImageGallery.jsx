import PropTypes from 'prop-types';
import { ImageGalleryStyle } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';


export default function ImageGallery({ gallery, page, isLoading, totalItems, loadMore, showModal } ) {
    const theRest = (totalItems - page * 12);
    return (
        <>
            <ImageGalleryStyle> 
            {gallery.map(item => (
                <ImageGalleryItem
                    key={item.id}
                    item={item}
                    onClick={showModal} />
            ))}
            </ImageGalleryStyle>
            {theRest > 0 && !isLoading && <Button loadMore={loadMore}/>}
        </>
    )
}
ImageGallery.propTypes = {
    gallery: PropTypes.array,
    page: PropTypes.number,
    totalItems: PropTypes.number,
    loadMore: PropTypes.func,
    isLoading: PropTypes.bool,
    showModal: PropTypes.func
}