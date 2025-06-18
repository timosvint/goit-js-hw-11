import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import getImagesByQuery from './js/pixelabay-api';
import {refreshLightBox, createGallery, clearGallery, showLoader, hideLoader} from './js/render-functions'


const galleryContainer = document.querySelector(`.gallery`)
const form = document.querySelector(`.form`)
const button = document.querySelector(`button`)




function onSearch(event) {
    event.preventDefault()

    const userInfo = event.currentTarget.elements[`search-text`].value;
    
    clearGallery()
    showLoader()
    getImagesByQuery(userInfo).then(data => {
        if (data.hits.length === 0) {
            iziToast.error({
                message: `Sorry, there are no images matching your search query. Please try again!`,
                position: "topLeft"
            })
        }
        createGallery(data.hits)
        form.reset()
    }).catch(error => 
        iziToast.error({
            message: `${error}`, 
            position: "topLeft",
         })
    ).finally(() => hideLoader())


    

} 




form.addEventListener(`submit`,onSearch)




