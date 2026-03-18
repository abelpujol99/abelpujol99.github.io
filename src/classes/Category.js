import * as DomUtilities from "../utilities/DOMUtilities.js";
import {Dropdown} from './Dropdown.js'

export class Category extends Dropdown
{
    constructor(category)
    {
        super(category);
    }

    Open(dropdown)
    {
        super.Open(dropdown);
        this.dropdown.style.marginBottom = "0";
        DomUtilities.DisplayFlex(this.dropdown.querySelector('.category-dropdown-content'));
        DomUtilities.RemoveCursorPointer(this.dropdown);
    }

    GetDropdown()
    {
        return this.dropdown;
    }

    Close()
    {
        super.Close();

        if(this.dropdown == null)
        {
            return;
        }

        DomUtilities.AddCursorPointer(this.dropdown);
        this.dropdown.style.marginBottom = "1rem";
        DomUtilities.DisplayNone(this.dropdown.querySelector('.category-dropdown-content'));
        
        this.dropdown = null;
    }
}