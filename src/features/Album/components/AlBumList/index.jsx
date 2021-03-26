import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlBumItem';

AlBumList.propTypes = {
    
};

function AlBumList(props) {
    const {listAlBum}=props;
    return (
        <div>
            {listAlBum.map(album=>(
                <AlbumItem key={album.id} album={album}></AlbumItem>
            ))}
        </div>
    );
}

export default AlBumList;