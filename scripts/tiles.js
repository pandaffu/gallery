const mainImgs = document.querySelectorAll('.tile__img--main');
const thumbnails = document.querySelectorAll('.tile__thumbnail');
const border = "4px #007FFF solid";

thumbnails.forEach(thumbnail => thumbnail.addEventListener('click', thumbnailClick));

function thumbnailClick(e){
    // grab main image in the .tile class of the clicked image
    const mainImg = e.path[2].querySelector('.tile__img--main');
    // reset border
    thumbnails.forEach(thumbnail => thumbnail.style.border = null);
    thumbnails.forEach(thumbnail => thumbnail.style.opacity = "0.7");
    // replace main with clicked image
    mainImg.src = e.target.src;
    // add border to clicked thumbnail
    e.target.style.border = border;
    e.target.style.opacity = "1";
}

mainImgs.forEach(mainImg => mainImg.addEventListener('click',openModal));

function openModal(e){
    const mainImg = e.path[2].querySelector('.tile__img--main');
    const modalImg = e.path[2].querySelector('.modal__img');
    const modal = e.path[2].querySelector('.modal');
    const thumbnails = e.path[2].querySelectorAll('.tile__img');
    const modalThumbnailContainer = e.path[2].querySelector('.modal__thumbnails');

    modal.classList.toggle('modal--enabled');
    modalImg.src = mainImg.src;

    for(let i = 0; i<thumbnails.length; i++){
        const modalThumbnail = document.createElement('img');
        const imgSrc = thumbnails[i].src;
        modalThumbnail.classList.add("modal__thumbnail");
        modalThumbnail.src += imgSrc;
        modalThumbnailContainer.appendChild(modalThumbnail);
    }

    const modalThumbnail = e.path[2].querySelectorAll('.modal__thumbnail');
    modalThumbnail.forEach(thumbnail => thumbnail.addEventListener('click',modalClick));

    function modalClick(e){
        const mainImg = e.path[2].querySelector('.modal__img');

        for(let i=0; i<modalThumbnail.length; i++){
            modalThumbnail[i].style.border = null;
            modalThumbnail[i].style.opacity = "0.7";
        }

        mainImg.src = e.target.src;

        // add border to clicked thumbnail
        e.target.style.border = border;
        e.target.style.opacity = "1";
    }
}

const modalButtons = document.querySelectorAll('.modal__button');
modalButtons.forEach(button => button.addEventListener('click', closeModal));

function closeModal(e){
    const modal = e.path[4];
    const modalThumbnails = e.path[3].querySelectorAll('.modal__thumbnail');

    modal.classList.toggle('modal--enabled');

    for(let i = 0; i<modalThumbnails.length; i++){
        modalThumbnails[i].remove();
    }
}



