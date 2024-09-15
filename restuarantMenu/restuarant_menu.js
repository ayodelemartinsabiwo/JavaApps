// Initialize arrays with the menu items
const breakfastMenu = ['Pancakes- $22.4', 'Eggs Benedict- $40.3', 'Oatmeal- $12.09', 'Frittata- $45.98'];
const mainCourseMenu = ['Steak- $41.38', 'Pasta- $4.02', 'Burger', 'Salmon- $34.2'];
const dessertMenu = ['Cake- $49.59', 'Ice Cream- $4.02', 'Pudding- $9.32', 'Fruit Salad- $434.02'];

// use for loop and two array methods: map method and forEach method to
// traverse through these arrays and display the menu items on the HTML page.
// converts breakfast menu array items into HTML strings using map() and
// an arrow function to structure each item's HTML format.

// a string concatenation method has been used to join the generated HTML
// strings into one cohesive string using join ('') to prepare for insertion.

const breakfastMenuItemsHtml = breakfastMenu.map((item, index) =>
    `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHtml;

// The above concatenated HTML is dynamically updated within the specific HTML element
// identified by breakfastMenuItems ID with the concatenated HTML string,
// dynamically populating the webpage with the breakfast menu items in
// formatted paragraphs <p> tags

// traverse mainCourseMenu array using forEach array method.
let mainCourseMenuItem = ''; //accumulate HTML strings generated for each main course menu item.

// forEach method loops through each element in the mainCourseMenu array.
mainCourseMenu.forEach((item, index) => {
    mainCourseMenuItem += `<p>Item ${index + 1}: ${item}</p>`;
        });
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItem;



//Iterate dessertMenu array using for loop iteration.
let dessertItem = ''

for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
        }
    document.getElementById('dessertMenuItems').innerHTML = dessertItem;

//Adding styles to "p" tags
let para = document.getElementsByTagName('p');

    for (let i = 0; i < para.length; i++) {
        para[i].style.backgroundColor = 'lightblue'
        para[i].style.padding = '6px'
        para[i].style.borderRadius = '5px'
        para[i].style.width = '14rem'


        para[i].onmouseover = function() {
            this.style.scale = '1.03'
            this.style.transition = "0.5s"
        }

        para[i].onmouseout = function() {
            this.style.scale = '1'
            this.style.transition = '0.5s'
        }

    }
