import React from 'react';
import PropTypes from 'prop-types';
import { Bookmark } from '../../models/bookmark.model';

import '../../styles/bookmark.scss';


const BookmarkCard = ({ bookmark }) => {

    return (
        <div>
            <div className='card m-2 bookmark'>
                <h6 className='card-header'>
                    Página: {bookmark.page}
                </h6>
                <p className='card-body'>
                    {bookmark.resume}
                </p>
            </div>
        </div>
    );
};


BookmarkCard.propTypes = {
    bookmark : PropTypes.instanceOf(Bookmark)
};


export default BookmarkCard;
