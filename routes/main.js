function _init() {
    _renderPages();
}

const routes = [
    {
        path: "/",
        sectionId: "home"
    },
    {
        path: "/about-us",
        sectionId: "about-us"
    },
    {
        path: "/blog",
        sectionId: "blog"
    },
    {
        path: "/contact-us",
        sectionId: "contact-us"
    }
];

function _renderPages() {
    var hash = window.location.hash.substring(1);

    if (!hash) {
        window.location.hash = "/"; return;
    };

    const pageSection = document.querySelectorAll('.page-section');
    pageSection.forEach(item => {
        item.style.display = "none";
    });

    const pageSectionId = routes.filter((route) => { return route.path === hash })[0]?.sectionId;

    if (!pageSectionId) return;

    document.getElementById(pageSectionId).style.display = "inherit";
}

window.addEventListener('hashchange', _renderPages);

_init();