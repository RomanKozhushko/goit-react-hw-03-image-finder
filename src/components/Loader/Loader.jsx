import PacmanLoader from "react-spinners/ClipLoader";
import PropTypes from 'prop-types';
import { Spinner } from './Loader.styled' 

export default function Loader({ loading }) { 

    return (<Spinner>
                <PacmanLoader color="#36d7b7" loading={loading} size={120} /> 
            </Spinner>
    )
}
Loader.propTypes = {
    loading: PropTypes.bool
}