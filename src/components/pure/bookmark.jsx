import React from 'react';
import PropTypes from 'prop-types';
import { Bookmark } from '../../models/bookmark.model';

import '../../styles/bookmark.scss';


const BookmarkCard = ({ bookmark }) => {

    return (
        <div>
            <div className='card m-2 bookmark'>
                <div className='card-header'>
                    <h5>
                        {bookmark.bookName}
                    </h5>
                </div>
                <div className='card-body'>
                    <h6>
                        Página: {bookmark.page}
                    </h6>
                    <p>
                        {bookmark.resume}
                    </p>
                </div>
            </div>
        </div>
    );
};


BookmarkCard.propTypes = {
    bookmark : PropTypes.instanceOf(Bookmark)
};


export default BookmarkCard;
