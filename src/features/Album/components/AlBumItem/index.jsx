import React from 'react';
import PropTypes from 'prop-types';

AlbumItem.propTypes = {
    
};

function AlbumItem(props) {
    const {album}=props;
    return (
        <div>
            <img src={album.imgUrl}></img>
            <p>Tên bài hát :{album.title}</p>
        </div>
    );
}

export default AlbumItem;