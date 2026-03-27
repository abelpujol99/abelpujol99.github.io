export class Dropdown
{
    Open(dropdown)
    {
        this.dropdown = dropdown;
    }

    AddChildDropdown(childDropdwon)
    {
        this.childDropdown = childDropdwon;
    }

    GetDropdown()
    {
        return this.dropdown;
    }

    Close()
    {
        if(this.childDropdown == null)
        {
            return;
        }

        this.childDropdown.Close();

        this.childDropdown = null;
    }
}