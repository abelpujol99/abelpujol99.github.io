import * as DomUtilities from "./utilities/DOMUtilities.js";
import { Category } from "./classes/Category.js";
import { Subcategory } from "./classes/Subcategory.js";
import { Card } from "./classes/Card.js";

let imageZoomDiv;
let imageZoomContainerDiv;

const categoryExpanded = new Category();
const subcategoryExpanded = new Subcategory();
const cardExpanded = new Card();

const dropdownsClickedInOrder = [];

function AttachClickHandler()
{    
    document.querySelectorAll('.category-dropdown').forEach(categoryDropdown => categoryDropdown.addEventListener('click', (event) => {
        
        if(categoryDropdown == categoryExpanded.GetDropdown())
        {
            return;
        }

        categoryExpanded.Close();
        categoryExpanded.Open(categoryDropdown);
        dropdownsClickedInOrder[dropdownsClickedInOrder.length] = categoryExpanded;
        event.stopPropagation();
    }));

    document.querySelectorAll('#category-cross').forEach(close => close.addEventListener('click', (event) => {

        categoryExpanded.Close();
        dropdownsClickedInOrder.pop();
        event.stopPropagation();
    }));

    document.querySelectorAll('.subcategory-dropdown').forEach(subcategoryDropdown => subcategoryDropdown.addEventListener('click', (event) => {

        subcategoryExpanded.Close();
        subcategoryExpanded.Open(subcategoryDropdown);
        dropdownsClickedInOrder[dropdownsClickedInOrder.length - 1].AddChildDropdown(subcategoryExpanded);
        dropdownsClickedInOrder[dropdownsClickedInOrder.length] = subcategoryExpanded;
        event.stopPropagation();
    }));

    document.querySelectorAll('#subcategory-cross').forEach(close => close.addEventListener('click', (event) => {

        subcategoryExpanded.Close();
        dropdownsClickedInOrder.pop();
        event.stopPropagation();
    }));

    document.querySelectorAll('.card-dropdown').forEach(cardDropdown => cardDropdown.addEventListener('click', (event) => {

        cardExpanded.Close();
        cardExpanded.Open(cardDropdown);
        dropdownsClickedInOrder[dropdownsClickedInOrder.length - 1].AddChildDropdown(cardExpanded);
        dropdownsClickedInOrder[dropdownsClickedInOrder.length] = cardExpanded;
        event.stopPropagation();
    }));


    document.querySelectorAll('#card-cross').forEach(close => close.addEventListener('click', (event) => {

        cardExpanded.Close();
        dropdownsClickedInOrder.pop();
        event.stopPropagation();
    }));

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

function OnDocumentLoaded()
{
    imageZoomDiv = document.getElementById('image-zoom');

    imageZoomContainerDiv = document.getElementById('image-zoom-container');

    AttachClickHandler();
}

document.addEventListener('DOMContentLoaded', OnDocumentLoaded);