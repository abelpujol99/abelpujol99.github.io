import * as DomUtilities from "../utilities/DOMUtilities.js";
import {Dropdown} from './Dropdown.js'

export class Card extends Dropdown
{
    Open(dropdown)
    {
        super.Open(dropdown);
        this.dropdown.style.width = "100%";
        DomUtilities.DisplayNone(this.dropdown.querySelector('.card-dropdown-banner'));
        DomUtilities.DisplayFlex(this.dropdown.querySelector('.card-dropdown-content'));
        DomUtilities.RemoveCursorPointer(this.dropdown);
    }

    Close()
    {
        if(this.dropdown == null)
        {
            return;
        }

        DomUtilities.AddCursorPointer(this.dropdown);
        this.dropdown.style.width = "";
        DomUtilities.DisplayFlex(this.dropdown.querySelector('.card-dropdown-banner'));
        DomUtilities.DisplayNone(this.dropdown.querySelector('.card-dropdown-content'));

        this.dropdown = null;
    }
}