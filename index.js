const listContent = "<h1>Add a New Book</h1> \n \
<br></br> \n \
<table class='center'> \n \
    <tr> \n \
        <th class='book-name'>Book Name</th> \n \
        <th class='author-name'>Author Name</th> \n \
        <th class='action'>Action</th> \n \
    </tr> \n \
    <tr> \n \
        <td class='instance-book'>Les miserables</td> \n \
        <td class='instance-author'>Victor Hugo</td> \n \
        <td><button type='button'>Remove</button></td> \n \
    </tr> \n \
    <tr> \n \
        <td class='instance-book'>Notre Dame de Paris</td> \n \
        <td class='instance-author'>Simon de bauvoir</td> \n \
        <td><button type='button'>Remove</button></td> \n \
    </tr> \n \
</table>"


const addContent="<h1>Add a New Book</h1> \n \
<br></br>\n \
<form>\n \
    <input type='text' id='tile' name='title' placeholder='Title' required><br> \n \
    <input type='text' id='author' name='author' placeholder='Author' required> \n \
    <input type='add' value='Add'>\n \
</form>"

const contactContent="<h1>Contact Information</h1> \n \
<br></br> \n \
<p class='free'>Feel free to ask any question</p> \n \
<br></br> \n \
<ul>\n \
    <li class='phone'>Phone Number:+212 694729439</li> \n \
    <br></br>\n \
    <li class='email'>Email Address: amouradi2002@gmail.com</li>\n \
    <br></br>\n \
    <li class='address'><Address>1287 Fremont St, Morocco</Address></li>\n \
</ul> \n \
"

const middlePart = document.getElementById("middle-part")
const displayListBtn = document.getElementById("display-list")
const displayAddBtn  = document.getElementById("display-add")
const diplayContactBtn = document.getElementById("diplay-contact")

displayListBtn.addEventListener('click' , (event) => {
    middlePart.innerHTML = listContent
})

displayAddBtn.addEventListener('click', (event) => {
    middlePart.innerHTML=addContent
})

diplayContactBtn.addEventListener('click',(event)=>{
    middlePart.innerHTML=contactContent
})
