export function DisplayFlex(element)
{
    element.style.display = "flex";
}

export function DisplayNone(element)
{
    element.style.display = "none";
}

export function AddCursorPointer(element)
{
    if(element == null)
    {
        return;
    }

    element.style.cursor = "pointer";
}

export function RemoveCursorPointer(element)
{
    element.style.cursor = "default";
}