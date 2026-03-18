import * as DomUtilities from "../utilities/DOMUtilities.js";
import {Dropdown} from './Dropdown.js'

export class Subcategory extends Dropdown
{
    constructor(subcategory)
    {
        super(subcategory);
    }

    Open(dropdown)
    {
        super.Open(dropdown);
        this.dropdown.style.width = "100%";
        DomUtilities.DisplayNone(this.dropdown.querySelector('.card-dropdown-banner'));

        let subcategoryFrame = this.dropdown.querySelector('.subcategory-frame');
        DomUtilities.DisplayFlex(subcategoryFrame);
        let subcategoryDropdwonContent = subcategoryFrame.querySelector('.category-dropdown-content');
        DomUtilities.DisplayFlex(subcategoryDropdwonContent);
        subcategoryDropdwonContent.style.margin = "0";

        DomUtilities.RemoveCursorPointer(this.dropdown);
    }

    Close()
    {
        super.Close();

        if(this.dropdown == null)
        {
            return;
        }

        DomUtilities.AddCursorPointer(this.dropdown);
        this.dropdown.style.width = "";
        DomUtilities.DisplayFlex(this.dropdown.querySelector('.card-dropdown-banner'));

        let subcategoryFrame = this.dropdown.querySelector('.subcategory-frame');
        DomUtilities.DisplayNone(subcategoryFrame);
        
        let subcategoryDropdwonContent = subcategoryFrame.querySelector('.category-dropdown-content');
        DomUtilities.DisplayNone(subcategoryDropdwonContent);
        subcategoryDropdwonContent.style.margin = "1rem 0";
        
        this.dropdown = null;
    }
}