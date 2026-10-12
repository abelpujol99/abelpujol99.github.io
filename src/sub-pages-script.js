import * as DomUtilities from "./utilities/DOMUtilities.js";

let imageZoomDiv;
let imageZoomContainerDiv;

const dropdownsClickedInOrder = [];

function AttachClickHandler()
{    
    document.querySelectorAll('.clonable').forEach(clonable => clonable.addEventListener('click', (event) => {

        DomUtilities.DisplayFlex(imageZoomDiv);

        const clone = clonable.cloneNode(true);

        clone.removeAttribute("id");

        clone.removeAttribute("class");

        clone.setAttribute('id', 'zoomed-media');

        clone.classList.remove('clonable');

        imageZoomContainerDiv.appendChild(clone);

        event.stopPropagation();

    }));

    imageZoomDiv.querySelector('#image-zoom-cross').addEventListener('click', (event) => {

        DomUtilities.DisplayNone(imageZoomDiv);

        document.getElementById('zoomed-media').remove();

        event.stopPropagation();
    });
}

function BackButtonLink()
{
    document.querySelector(".back-button").addEventListener("click", (event) => {
        console.log("Hello");

        window.location.href = "../index.html";

        event.stopPropagation();
    });
}

function OnDocumentLoaded()
{
    imageZoomDiv = document.getElementById('image-zoom');

    imageZoomContainerDiv = document.getElementById('image-zoom-container');

    //AttachClickHandler();

    BackButtonLink();
}

document.addEventListener('DOMContentLoaded', OnDocumentLoaded);