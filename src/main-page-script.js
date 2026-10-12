import * as DomUtilities from "./utilities/DOMUtilities.js";

let imageZoomDiv;
let imageZoomContainerDiv;

const dropdownsClickedInOrder = [];

function AttachClickHandler()
{    
    document.querySelectorAll('.clonable').forEach(clonable => clonable.addEventListener('click', (event) => {

        DomUtilities.DisplayFlex(imageZoomDiv);

        const clone = clonable.cloneNode(true);

        clone.removeAttribute("id");

        clone.removeAttribute("class");

        clone.setAttribute('id', 'zoomed-media');

        clone.classList.remove('clonable');

        imageZoomContainerDiv.appendChild(clone);

        event.stopPropagation();

    }));

    imageZoomDiv.querySelector('#image-zoom-cross').addEventListener('click', (event) => {

        DomUtilities.DisplayNone(imageZoomDiv);

        document.getElementById('zoomed-media').remove();

        event.stopPropagation();
    });
}

function CardBannerHoverHandler()
{
    document.querySelectorAll(".card-banner").forEach(cardBanner => cardBanner.addEventListener("mouseover", (event) => {

        const cardBannerDescriptionBackground = cardBanner.querySelector(".card-banner-description-background");

        if(cardBannerDescriptionBackground != null)
        {
            DomUtilities.UpdateOpacity(cardBannerDescriptionBackground, "0.8");
        }

        const cardBannerDescription = cardBanner.querySelector(".card-banner-description");

        if(cardBannerDescription != null)
        {
            DomUtilities.DisplayFlex(cardBannerDescription);
        }

        event.stopPropagation();

    }));

    document.querySelectorAll(".card-banner").forEach(cardBanner => cardBanner.addEventListener("mouseout", (event) => {

        const cardBannerDescriptionBackground = cardBanner.querySelector(".card-banner-description-background");

        if(cardBannerDescriptionBackground != null)
        {
            DomUtilities.UpdateOpacity(cardBannerDescriptionBackground, "0");
        }

        const cardBannerDescription = cardBanner.querySelector(".card-banner-description");

        if(cardBannerDescription != null)
        {
            DomUtilities.DisplayNone(cardBannerDescription);
        }

        event.stopPropagation();

    }));
}

function CardBannerLinks()
{
    document.querySelector("#farlands-tiny-harvest").addEventListener("click", (event) => {
        window.location.href = "pages/farlands:-tiny-harvest.html";
    });

    document.querySelector("#pathfinding-pounce-palace").addEventListener("click", (event) => {
        window.location.href = "pages/pathfinding-pounce-palace.html";
    });

    document.querySelector("#online-chess").addEventListener("click", (event) => {
        window.location.href = "pages/online-chess.html";
    });

    document.querySelector("#enemies-pounce-palace").addEventListener("click", (event) => {
        window.location.href = "pages/enemies-pounce-palace.html";
    });

    document.querySelector("#ability-maker-pounce-palace").addEventListener("click", (event) => {
        window.location.href = "pages/ability-maker-pounce-palace.html";
    });

    document.querySelector("#code-patterns").addEventListener("click", (event) => {
        window.location.href = "pages/patterns.html";
    });
}

function OnDocumentLoaded()
{
    imageZoomDiv = document.getElementById('image-zoom');

    imageZoomContainerDiv = document.getElementById('image-zoom-container');

    AttachClickHandler();

    CardBannerHoverHandler();

    CardBannerLinks();
}

document.addEventListener('DOMContentLoaded', OnDocumentLoaded);