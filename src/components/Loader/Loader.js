import RingLoader from "react-spinners/RingLoader";
import PropTypes from 'prop-types';
import Spinner from './Spinner.module.css'

export default function Loader({ loading }) { 

    return (<div className={Spinner.spinner}>
        <RingLoader color="red" loading={loading} size={120} />
        </div>
    )
}
Loader.propTypes = {
    loading: PropTypes.bool
}