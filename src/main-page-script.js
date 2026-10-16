import * as DomUtilities from "./utilities/DOMUtilities.js";

let topbar;

let isHambugerMenuOpen = false;

let hamburgerMenu;
let hamburgerMenuImage;

let downArrow;

let imageZoomDiv;
let imageZoomContainerDiv;

let publicationsDiv;
let multithreadingDiv;
let networkDiv;
let aiDiv;
let toolingDiv;
let wipDiv;
let myCodeDiv;
let aboutMeDiv;

const dropdownsClickedInOrder = [];

function RetrieveElements()
{
    topbar = document.getElementById("topbar");

    hamburgerMenu = document.getElementById("hamburger-menu")
    hamburgerMenuImage = document.getElementById("hamburger-menu-image");

    downArrow = document.getElementById("down-arrow");

    imageZoomDiv = document.getElementById('image-zoom');

    imageZoomContainerDiv = document.getElementById('image-zoom-container');

    publicationsDiv = document.getElementById("publications");
    multithreadingDiv = document.getElementById("multithreading");
    networkDiv = document.getElementById("network");
    aiDiv = document.getElementById("ai");
    toolingDiv = document.getElementById("tooling");
    wipDiv = document.getElementById("wip");
    myCodeDiv = document.getElementById("my-code");
    aboutMeDiv = document.getElementById("about-me");
}

function OpenHamburgerMenu()
{
    isHambugerMenuOpen = true;
    DomUtilities.ChangeImage(hamburgerMenuImage, "resources/images/cross.png");
    DomUtilities.UpdateTransformX(hamburgerMenu, "0%");
}

function CloseHamburgerMenu()
{
    isHambugerMenuOpen = false;
    DomUtilities.ChangeImage(hamburgerMenuImage, "resources/images/hamburger-menu.png");
    DomUtilities.UpdateTransformX(hamburgerMenu, "-100%");
}

function ScrollToElement(element)
{
    const topbarHeight = topbar.getBoundingClientRect().height;

    const spacing = parseFloat(getComputedStyle(element).fontSize);

    const top = element.getBoundingClientRect().top + window.scrollY - topbarHeight - spacing;

    window.scrollTo({
        top: top,
        behavior: "smooth"
    });
}

function TopbarClickHandler()
{
    document.querySelector("#publications-index").addEventListener("click", (event) => {
        ScrollToElement(publicationsDiv);
    });

    document.querySelector("#multithreading-index").addEventListener("click", (event) => {
        ScrollToElement(multithreadingDiv);
    });

    document.querySelector("#network-index").addEventListener("click", (event) => {
        ScrollToElement(networkDiv);
    });

    document.querySelector("#ai-index").addEventListener("click", (event) => {
        ScrollToElement(aiDiv);
    });

    document.querySelector("#tooling-index").addEventListener("click", (event) => {
        ScrollToElement(toolingDiv);
    });

    document.querySelector("#wip-index").addEventListener("click", (event) => {
        ScrollToElement(wipDiv);
    });

    document.querySelector("#my-code-index").addEventListener("click", (event) => {
        ScrollToElement(myCodeDiv);
    });

    document.querySelector("#about-me-index").addEventListener("click", (event) => {
        ScrollToElement(aboutMeDiv);
    });
}

function HamburgerMenuClickHandler()
{
    document.querySelector("#hamburger-menu-image").addEventListener("click", (event) => {

        if(!isHambugerMenuOpen)
        {
            OpenHamburgerMenu();
            return;
        }

        CloseHamburgerMenu();
    });

    document.querySelector("#publications-hamburger-index").addEventListener("click", (event) => {
        ScrollToElement(publicationsDiv);
        CloseHamburgerMenu();
    });

    document.querySelector("#multithreading-hamburger-index").addEventListener("click", (event) => {
        ScrollToElement(multithreadingDiv);
        CloseHamburgerMenu();
    });

    document.querySelector("#network-hamburger-index").addEventListener("click", (event) => {
        ScrollToElement(networkDiv);
        CloseHamburgerMenu();
    });

    document.querySelector("#ai-hamburger-index").addEventListener("click", (event) => {
        ScrollToElement(aiDiv);
        CloseHamburgerMenu();
    });

    document.querySelector("#tooling-hamburger-index").addEventListener("click", (event) => {
        ScrollToElement(toolingDiv);
        CloseHamburgerMenu();
    });

    document.querySelector("#wip-hamburger-index").addEventListener("click", (event) => {
        ScrollToElement(wipDiv);
        CloseHamburgerMenu();
    });

    document.querySelector("#my-code-hamburger-index").addEventListener("click", (event) => {
        ScrollToElement(myCodeDiv);
        CloseHamburgerMenu();
    });

    document.querySelector("#about-me-hamburger-index").addEventListener("click", (event) => {
        ScrollToElement(aboutMeDiv);
        CloseHamburgerMenu();
    });
}

function ScrollHandler()
{
    window.addEventListener("scroll", (event) => {

        if(window.scrollY !== 0)
        {
            DomUtilities.UpdateOpacity(downArrow, "0");
            return;
        }

        DomUtilities.UpdateOpacity(downArrow, "1");

    });
}

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
            DomUtilities.UpdateOpacity(cardBannerDescription, "1");
            DomUtilities.RemoveTransform(cardBannerDescription);
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
            DomUtilities.UpdateOpacity(cardBannerDescription, "0");
            DomUtilities.UpdateTransformY(cardBannerDescription, "80px");
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
    RetrieveElements();

    TopbarClickHandler();

    HamburgerMenuClickHandler();

    ScrollHandler();

    AttachClickHandler();

    CardBannerHoverHandler();

    CardBannerLinks();
}

document.addEventListener('DOMContentLoaded', OnDocumentLoaded);