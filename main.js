/* Page content*/
const  homePageContent = `
<h1>welcome</h1>

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima incidunt sapiente itaque consequatur, laborum nam molestiae error vitae! Quia modi labore nostrum. Harum dicta perspiciatis temporibus rerum, eveniet cum officia.
<p id="My-id">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, repellendus. Enim iusto delectus esse! Impedit unde perferendis at ducimus explicabo, necessitatibus quaerat vitae, nesciunt minus corrupti architecto consectetur sapiente! Vel.</p>
<p class="my-class">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem asperiores laudantium soluta veritatis nam ipsa consectetur corporis ullam eius vero. Doloribus veritatis ipsam expedita ex voluptatum sit rerum, ullam repellat!</p>
<p class="two classes"></p>`;

const aboutPageContent = `
<h1> about me </h1>
<p> Here can you write about yourself</p>

`;

const hobbiesPageContent = `

<h1>My Hobbies </h1>
<p> Here can you write about yours hobbies</p>
`;
const contactPageContent = `

<h1> Contact</h1>
<p>contact me</p>`;

/*Functions*/
// Grab elements
const maincontent = document.querySelector("#main-content");
const navLinks = document.querySelectorAll("nav a");

// Add event lisners to all elements in navlinks

navLinks.forEach(link => {
link.addEventListener("click", event => {
event.preventDefault(); //prevent Page reload
const page = link.dataset.page; // Get the string from data-page attribute
setActiveNavLink(link); // Move the "active" class
updatePageContent(page); // Render New page
});
});

// Set the "active" class on the page we are currently on
 //function setActiveNavLink(link) {
  //  for(nav of navLinks) {
   //     nav.classList.remove("active");
   // }
   // link.classList.add("active");
//}
//Way 2,function
function setActiveNavLink(link) {
    navLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
}

// Update page content
function updatePageContent(page){
    switch(page) {
        case "home":
            maincontent.innerHTML = homePageContent;
            break;
        case "about":
            maincontent.innerHTML = aboutPageContent;
            break;
        case "hobbys":
            maincontent.innerHTML = hobbiesPageContent;
            break;
        case "contact":
            maincontent.innerHTML=contactPageContent;
            break;
        default:
            maincontent.innerHTML = homePageContent;
            break;

    }

}
// Since we have an empty div and need some default content
// We run this function once without a property to get the default case of the switch 
updatePageContent("home");