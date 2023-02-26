import React from 'react';
import PropTypes from 'prop-types';
import { GoogleBook } from '../../models/googleBook.model';

import '../../styles/book.scss';


const GoogleBookCard = ({ googleBook }) => {



    return (
        <div>
            <div>
                <h4>
                    {googleBook.title}
                </h4>
            </div>
                <img src={googleBook.thumbnail} alt=''/>
        </div>
    );
};


GoogleBookCard.propTypes = {
    googleBook : PropTypes.instanceOf(GoogleBook)
};


export default GoogleBookCard;
