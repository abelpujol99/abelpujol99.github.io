let categoryExpanded = null;
let subcategoryExpanded = null;
let cardExpanded = null;

let closingCategory = false;

function DisplayFlex(element)
{
    element.style.display = "flex";
}

function DisplayNone(element)
{
    element.style.display = "none";
}

function OpenCategory()
{
    categoryExpanded.style.marginBottom = "0";
    DisplayFlex(categoryExpanded.querySelector('.category-dropdown-content'));
    RemoveCursorPointer(categoryExpanded);
}

function CloseCategory()
{
    if(categoryExpanded == null)
    {
        return;
    }
    
    AddCursorPointer(categoryExpanded);
    categoryExpanded.style.marginBottom = "1rem";
    DisplayNone(categoryExpanded.querySelector('.category-dropdown-content'));
    categoryExpanded = null;
    CloseSubcategory();
    setTimeout(() => closingCategory = false, 10);
}

function OpenSubcategory()
{
    subcategoryExpanded.style.width = "100%";
    DisplayNone(subcategoryExpanded.querySelector('.card-dropdown-banner'));

    let subcategoryFrame = subcategoryExpanded.querySelector('.subcategory-frame');
    DisplayFlex(subcategoryFrame);
    let subcategoryDropdwonContent = subcategoryFrame.querySelector('.category-dropdown-content');
    DisplayFlex(subcategoryDropdwonContent);
    subcategoryDropdwonContent.style.margin = "0";

    RemoveCursorPointer(subcategoryExpanded);
}

function CloseSubcategory()
{
    if(subcategoryExpanded == null)
    {
        return;
    }

    AddCursorPointer(subcategoryExpanded);
    subcategoryExpanded.style.width = "";
    DisplayFlex(subcategoryExpanded.querySelector('.card-dropdown-banner'));

    let subcategoryFrame = subcategoryExpanded.querySelector('.subcategory-frame');
    DisplayNone(subcategoryFrame);
    let subcategoryDropdwonContent = subcategoryFrame.querySelector('.category-dropdown-content');
    DisplayNone(subcategoryDropdwonContent);
    subcategoryDropdwonContent.style.margin = "1rem 0";
    subcategoryExpanded = null;
    CloseCard();
    setTimeout(() => closingCategory = false, 10);
}

function OpenCard()
{
    cardExpanded.style.width = "100%";
    DisplayNone(cardExpanded.querySelector('.card-dropdown-banner'));
    DisplayFlex(cardExpanded.querySelector('.card-dropdown-content'));
    RemoveCursorPointer(cardExpanded);
}

function CloseCard()
{
    if(cardExpanded == null)
    {
        return;
    }

    AddCursorPointer(cardExpanded);
    cardExpanded.style.width = "";
    DisplayFlex(cardExpanded.querySelector('.card-dropdown-banner'));
    DisplayNone(cardExpanded.querySelector('.card-dropdown-content'))
    cardExpanded = null;
    setTimeout(() => closingCategory = false, 10);
}

function AddCursorPointer(element)
{
    if(element == null)
    {
        return;
    }

    element.style.cursor = "pointer";
}

function RemoveCursorPointer(element)
{
    element.style.cursor = "default";
}

function AttachClickHandler()
{    
    document.querySelectorAll('.category-dropdown').forEach(categoryDropdown => categoryDropdown.addEventListener('click', (event) => {
        
        if(closingCategory || categoryDropdown == categoryExpanded)
        {
            return;
        }

        CloseCategory();
        categoryExpanded = categoryDropdown;
        OpenCategory();
    }));

    document.querySelectorAll('#category-cross').forEach(close => close.addEventListener('click', (event) => {

        closingCategory = true;
        CloseCategory();
    }));

    document.querySelectorAll('.subcategory-dropdown').forEach(subcategoryDropdown => subcategoryDropdown.addEventListener('click', (event) => {
        
        if(closingCategory || subcategoryDropdown == subcategoryExpanded)
        {
            return;
        }

        CloseSubcategory();
        subcategoryExpanded = subcategoryDropdown;
        OpenSubcategory();
    }));

    document.querySelectorAll('#subcategory-cross').forEach(close => close.addEventListener('click', (event) => {

        closingCategory = true;
        CloseSubcategory();
    }));

    document.querySelectorAll('.card-dropdown').forEach(cardDropdown => cardDropdown.addEventListener('click', (event) => {

        if(closingCategory || cardDropdown == cardExpanded)
        {
            return;
        }

        CloseCard();
        cardExpanded = cardDropdown;
        OpenCard();
    }));


    document.querySelectorAll('#card-cross').forEach(close => close.addEventListener('click', (event) => {

        closingCategory = true;
        CloseCard();
    }));
}

function OnDocumentLoaded()
{
    AttachClickHandler();
}

document.addEventListener('DOMContentLoaded', OnDocumentLoaded);