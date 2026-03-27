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

function AddDropdownToStack(dropdownExpanded)
{
    dropdownsClickedInOrder[dropdownsClickedInOrder.length - 1].AddChildDropdown(dropdownExpanded);
    dropdownsClickedInOrder[dropdownsClickedInOrder.length] = dropdownExpanded;
}

function RemoveDropdownFromStack(dropdownClosed)
{
    if(dropdownClosed.GetDropdown() == null)
    {
        return;
    }

    let match;

    do{

        match = dropdownClosed === dropdownsClickedInOrder[dropdownsClickedInOrder.length - 1];

        dropdownClosed.Close();
        dropdownsClickedInOrder.pop();

    }while(!match);
}

function AttachClickHandler()
{    
    document.querySelectorAll('.category-dropdown').forEach(categoryDropdown => categoryDropdown.addEventListener('click', (event) => {
        
        if(categoryDropdown == categoryExpanded.GetDropdown())
        {
            return;
        }

        RemoveDropdownFromStack(categoryExpanded);
        categoryExpanded.Close();
        categoryExpanded.Open(categoryDropdown);
        dropdownsClickedInOrder[dropdownsClickedInOrder.length] = categoryExpanded;
        event.stopPropagation();
    }));

    document.querySelectorAll('#category-cross').forEach(close => close.addEventListener('click', (event) => {

        RemoveDropdownFromStack(categoryExpanded);
        event.stopPropagation();
    }));

    document.querySelectorAll('.subcategory-dropdown').forEach(subcategoryDropdown => subcategoryDropdown.addEventListener('click', (event) => {

        if(subcategoryExpanded.GetDropdown() != null)
        {
            RemoveDropdownFromStack(subcategoryExpanded);
        }

        subcategoryExpanded.Close();
        subcategoryExpanded.Open(subcategoryDropdown);
        AddDropdownToStack(subcategoryExpanded);
        event.stopPropagation();
    }));

    document.querySelectorAll('#subcategory-cross').forEach(close => close.addEventListener('click', (event) => {

        RemoveDropdownFromStack(subcategoryExpanded);
        event.stopPropagation();
    }));

    document.querySelectorAll('.card-dropdown').forEach(cardDropdown => cardDropdown.addEventListener('click', (event) => {

        if(cardExpanded.GetDropdown() != null)
        {
            RemoveDropdownFromStack(cardExpanded);
        }

        cardExpanded.Close();
        cardExpanded.Open(cardDropdown);
        AddDropdownToStack(cardExpanded);
        event.stopPropagation();
    }));


    document.querySelectorAll('#card-cross').forEach(close => close.addEventListener('click', (event) => {

        RemoveDropdownFromStack(cardExpanded);
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