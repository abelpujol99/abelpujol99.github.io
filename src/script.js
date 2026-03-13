let categoryExpanded = null;
let subcategoryExpanded = null;

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
    DisplayFlex(categoryExpanded.querySelector('.category-dropdown-content'));
    RemoveCursorPointer(categoryExpanded);
}

function OpenSubcategory()
{
    DisplayNone(subcategoryExpanded.querySelector('.subcategory-dropdown-banner'));
    DisplayFlex(subcategoryExpanded.querySelector('.subcategory-dropdown-content'));
    RemoveCursorPointer(subcategoryExpanded);
}

function CloseCategory()
{
    if(categoryExpanded == null)
    {
        return;
    }
    
    AddCursorPointer(categoryExpanded);
    DisplayNone(categoryExpanded.querySelector('.category-dropdown-content'));
    categoryExpanded = null;
    CloseSubcategory();
    setTimeout(() => closingCategory = false, 10);
}

function CloseSubcategory()
{
    if(subcategoryExpanded == null)
    {
        return;
    }

    AddCursorPointer(subcategoryExpanded);
    DisplayFlex(subcategoryExpanded.querySelector('.subcategory-dropdown-banner'));
    DisplayNone(subcategoryExpanded.querySelector('.subcategory-dropdown-content'))
    subcategoryExpanded = null;
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

    document.querySelectorAll('.close-category').forEach(close => close.addEventListener('click', (event) => {

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


    document.querySelectorAll('.close-subcategory').forEach(close => close.addEventListener('click', (event) => {

        closingCategory = true;
        CloseSubcategory();
    }));
}

function OnDocumentLoaded()
{
    AttachClickHandler();
}

document.addEventListener('DOMContentLoaded', OnDocumentLoaded);