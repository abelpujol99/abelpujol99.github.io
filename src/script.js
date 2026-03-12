let categoryExpanded = null;

let closingCategory = false;

function OpenCategory()
{
    categoryExpanded.querySelector('.category-dropdown-content').style.display = 'flex';
}

function CloseCategory()
{
    if(categoryExpanded == null)
    {
        return;
    }

    categoryExpanded.querySelector('.category-dropdown-content').style.display = 'none';
    setTimeout(() => closingCategory = false, 10);
}

function AddCursorPointer()
{
    if(categoryExpanded == null)
    {
        return;
    }

    categoryExpanded.style.cursor = "pointer";
}

function RemoveCursorPointer()
{
    categoryExpanded.style.cursor = "default";
}

function AttachClickHandler()
{    
    document.querySelectorAll('.category-dropdown').forEach(categoryDropdown => categoryDropdown.addEventListener('mousedown', (event) => {
        
        if(closingCategory)
        {
            return;
        }

        CloseCategory();
        AddCursorPointer();

        categoryExpanded = categoryDropdown;
        OpenCategory();
        RemoveCursorPointer();
    }));

    document.querySelectorAll('.close').forEach(close => close.addEventListener('mousedown', (event) => {

        closingCategory = true;
        CloseCategory();
        AddCursorPointer();
    }));
}

document.addEventListener('DOMContentLoaded', AttachClickHandler);