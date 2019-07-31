import React from 'react'
import ImageGallery from 'react-image-gallery'
import photos from '../data/photos'
import "react-image-gallery/styles/css/image-gallery.css"


const myGallery = function(props){
    return <ImageGallery items={photos} />
    
    }
    
    export default myGallery
    