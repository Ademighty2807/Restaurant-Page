import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";


const createTabs = () => {
    const content = document.querySelector('#content');

    // Create the three divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');

    //Set ids for the divs
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    //Set classes  for the divs
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //Set text content for the tabs
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    //Append the divs to the content div
    content.appendChild(div1);
    content.appendChild(div2);
    content.appendChild(div3);

    // Utility to update active tab styling
    const setActiveTab = (activeTab) => {
        [div1, div2, div3].forEach(div => {
            div.classList.remove('active-tab');
        });
        activeTab.classList.add('active-tab');
    };

    /*
    // Utility to update active tab styling
    const setActiveTab = (activeTab) => {
        [div1, div2, div3].forEach(div => {
            div.classList.remove('active-tab');
        });
        activeTab.classList.add('active-tab');
    };

    div1.addEventListener('click', () => {
        clearContent();
        setActiveTab(div1);
        createRestaurantHomePage();
    });

    div2.addEventListener('click', () => {
        clearContent();
        setActiveTab(div2);
        createMenuPage();
    });

    div3.addEventListener('click', () => {
        clearContent();
        setActiveTab(div3);
        createContactPage();
    });

    // Set Home as the default active tab on load
    setActiveTab(div1);
    createRestaurantHomePage();
    */


    div1.addEventListener('click', () => {
        clearContent();
        setActiveTab(div1);
        createRestaurantHomePage()
    })
    div2.addEventListener('click', () => {
        clearContent();
        setActiveTab(div2);
        createMenuPage()
    })
    div3.addEventListener('click', () => {
        clearContent();
        setActiveTab(div3);
        createContactPage()
    })
}
function clearContent () {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent)
    }

}    
export default createTabs;

