var navigation = `
<a href="../index.html">Homeee</a>
<a href="products.html">Products</a>
<a href="about.html">About us</a>
<a href="contact.html">Contact us</a>
`
var footer = `<p>© 2022 Group 15 </p></p>`

document.getElementById("nav-container").insertAdjacentHTML('afterbegin', navigation);
document.getElementById("footer-container").insertAdjacentHTML('afterbegin', footer);