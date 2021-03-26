import React from 'react';
import PropTypes from 'prop-types';
import AlBumList from './components/AlBumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const listAlBum =[
        {
            id:1,
            title:"Chắc Gì Anh Yêu Cô Ấy",
            imgUrl:"https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/4/0/5/7405c66ff2177d3457abb14e6d69050d.jpg?fs=MTYxNjmUsIC1MDMzMDE2MHx3ZWJWNHw"
        },
        {
            id:2,
            title:"Chắc Gì Anh Yêu Cô Ấy1",
            imgUrl:"https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/1/1/8/0/1180ce679c0402b1f800530881d73e2e.jpg?fs=MTYxNjmUsIC1MDMzMDE2MXx3ZWJWNHw"
        },
        {
            id:3,
            title:"Chắc Gì Anh Yêu Cô Ấy2",
            imgUrl:"https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/5/1/5/c/515c62dd6cafcee1692131d213f71a7c.jpg?fs=MTYxNjmUsIC1MDMzMDE2Mnx3ZWJWNHw"
        },
    ]
    return (
        <div>
            <AlBumList listAlBum={listAlBum}></AlBumList>
        </div>
    );
}

export default AlbumFeature;