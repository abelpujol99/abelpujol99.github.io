export class Dropdown
{
    Open(dropdown)
    {
        this.dropdown = dropdown;
    }

    AddChildDropdown(childDropdwon)
    {
        this.childDropdwon = childDropdwon;
    }

    Close()
    {
        if(this.childDropdwon == null)
        {
            return;
        }

        this.childDropdwon.Close();

        this.childDropdwon = null;
    }
}