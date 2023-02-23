import React from 'react';
import PropTypes from 'prop-types';
import { Bookmark } from '../../models/bookmark.model';

import '../../styles/book.scss';


const BookmarkComponent = ({ bookmark }) => {


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


BookmarkComponent.propTypes = {
    bookmark : PropTypes.instanceOf(Bookmark)
};


export default BookmarkComponent;
