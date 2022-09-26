import PacmanLoader from "react-spinners/ClipLoader";
import PropTypes from 'prop-types';

export default function Loader({ loading }) { 

    return (<div className="spinner">
        <PacmanLoader color="red" loading={loading} size={120} />
        </div>
    )
}
Loader.propTypes = {
    loading: PropTypes.bool
}