const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');


    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    const items = [
        { name: 'Pomodoro', imgSrc: 'https://assets.bonappetit.com/photos/5b9009799915d52d4edc0f73/2:3/w_2222,h_3333,c_limit/basically-pasta-pomodoro-1.jpg' },
        { name: 'Bolognesa', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8E8nL9UmPXxZ86LW8LHc_8tLULESCeGFjXw&s' },
        { name: 'Alfredo', imgSrc: 'https://www.allrecipes.com/thmb/9aWCdbfttLcsW2dFQWwVQBGJM3E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-236973-CreamyAlfredoSauce-0238-4x3-1-01e7091f47ae452d991abe32cbed5921.jpg' }
    ];

    items.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.textContent = item.name;

        const image = document.createElement('img');
        image.src = item.imgSrc;
        image.height = 200;
        image.width = 200;

        menuItem.appendChild(document.createElement('br')); // optional line break
        menuItem.appendChild(image);

        menuList.appendChild(menuItem);
    });

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

export default createMenuPage;
