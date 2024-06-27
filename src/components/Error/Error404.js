import Navbar from '../Navbar/Navbar';
import * as style from './error404-style'

const Error404 = () => {
    return (
        <div>
            <Navbar />
            <style.ErrorMessage>
                ERROR 404 : PAGE NOT FOUND
            </style.ErrorMessage>
        </div>
    );
}

export default Error404;