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

export function UpdateTransformX(element, newTransformX)
{
    element.style.transform = "translateX(" + newTransformX + ")";
}

export function UpdateTransformY(element, newTransformY)
{
    element.style.transform = "translateY(" + newTransformY + ")";
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

export function ChangeImage(element, newImagePath)
{
    element.src = newImagePath;
}