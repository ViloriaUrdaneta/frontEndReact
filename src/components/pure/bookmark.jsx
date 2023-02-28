import React from 'react';
import PropTypes from 'prop-types';
import { Bookmark } from '../../models/bookmark.model';

import '../../styles/bookmark.scss';


const BookmarkCard = ({ bookmark }) => {

    return (
        <div>
            <div className='bookmark'>
                <h4 className='pages'>
                    {bookmark.page}
                </h4>
                <h3 className='resume'>
                    {bookmark.resume}
                </h3>
            </div>
        </div>
    );
};


BookmarkCard.propTypes = {
    bookmark : PropTypes.instanceOf(Bookmark)
};


export default BookmarkCard;
