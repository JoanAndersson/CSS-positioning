// inside navigation we can change how the nav will look for all websites
var navigation = `
<a href="../index.html">Homeee</a>
<a href="products.html">Products</a>
<a href="about.html">About us</a>
<a href="contact.html">Contact us</a>
`

// inside footer below we can change the look for teh global footer
var footer = `<p>© 2022 Group 15 </p></p>`

// nav-container and footer-container are the id:s we will use for the css
document.getElementById("nav-container").insertAdjacentHTML('afterbegin', navigation);
document.getElementById("footer-container").insertAdjacentHTML('afterbegin', footer);