const listContent = "<h1>List of Books</h1> \n \
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


const middlePart = document.getElementById("middle-part")
middlePart.innerHTML=listContent
const displayListBtn = document.getElementById("display-list")
const displayAddBtn  = document.getElementById("display-add")
const diplayContactBtn = document.getElementById("diplay-contact")

const listLink = document.getElementById("list-link") 
const addLink = document.getElementById("add-link") 
const contactLink = document.getElementById("contact-link") 



displayListBtn.addEventListener('click' , (event) => {
    middlePart.innerHTML = listContent
    listLink.classList.add("active")
    addLink.classList.remove("active")
    contactLink.classList.remove("active")
})

displayAddBtn.addEventListener('click', (event) => {
    middlePart.innerHTML=addContent
    listLink.classList.remove("active")
    addLink.classList.add("active")
    contactLink.classList.remove("active")
})

const h1 = document.createElement('h1')
h1.textContent = 'Contact Information'
const contactPara = document.createElement('p')
contactPara.textContent= 'Feel free to ask any question'
contactPara.className='free'
const Ucredential=document.createElement('ul')
const PLcredential=document.createElement('li')
const ELcredential=document.createElement('li')
const ALcredential=document.createElement('li')
const Address=document.createElement('address')
PLcredential.textContent='Phone Number:+212 694729439'
PLcredential.className='phone'
ELcredential.textContent='Email Address: amouradi2002@gmail.com'
ELcredential.className='email'
Address.textContent='1287 Fremont St, Morocco'
ALcredential.className='address'

Ucredential.appendChild(PLcredential)
Ucredential.appendChild(ELcredential) //append li inside ul
Ucredential.appendChild(ALcredential)
//append the address to li
ALcredential.appendChild(Address)

diplayContactBtn.addEventListener('click',(event)=>{
    middlePart.innerHTML = '' //remove the previous content
    middlePart.appendChild(h1) 
    middlePart.appendChild(contactPara)
    //append ul to middle part
    middlePart.appendChild(Ucredential)
    listLink.classList.remove("active")
    addLink.classList.remove("active")
    contactLink.classList.add("active")
})

