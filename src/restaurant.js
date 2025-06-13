// restaurant.js

const createRestaurantHomepage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Create and append image element
    const image = document.createElement('img');
    image.src = 'https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/16:9/w_1600,c_limit/Savage-2019-top-50-busy-restaurant.jpg'
    image.height = '500';
    pageContent.appendChild(image);

    //Create and append headline element
    const headline = document.createElement('h1')
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    //Create and append copy element
    const copy = document.createElement('p');
    copy.textContent = 'We serve the best food in town. come and taste it';
    pageContent.appendChild(copy)
    content.appendChild(pageContent);
}
export default createRestaurantHomepage;