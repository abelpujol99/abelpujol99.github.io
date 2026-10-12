export function DisplayFlex(element)
{
    element.style.display = "flex";
}

export function DisplayNone(element)
{
    element.style.display = "none";
}

export function UpdateOpacity(element, newOpacity)
{
    element.style.opacity = newOpacity;
}

export function UpdateTransformY(element, newTransformY)
{
    element.style.transform = "translateY(" + newTransformY + "px)";
}

export function RemoveTransform(element)
{
    element.style.transform = "none";
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