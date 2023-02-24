import React from 'react';
import PropTypes from 'prop-types';
import { GoogleBook } from '../../models/googleBook.model';

import '../../styles/book.scss';


const GoogleBookCard = ({ googleBook }) => {


    return (
        <div>
            <div className='googleBook'>
                <h4 className='title'>
                    {googleBook.title}
                </h4>
            </div>
        </div>
    );
};


GoogleBookCard.propTypes = {
    googleBook : PropTypes.instanceOf(GoogleBook)
};


export default GoogleBookCard;
