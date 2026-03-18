import { Category } from "./classes/Category.js";
import { Subcategory } from "./classes/Subcategory.js";
import { Card } from "./classes/Card.js";

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
}

function OnDocumentLoaded()
{
    AttachClickHandler();
}

document.addEventListener('DOMContentLoaded', OnDocumentLoaded);