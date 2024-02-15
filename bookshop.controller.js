'use strict'

function onInit(){
    renderBooks()


}

function renderBooks() {
    const books = getBooks()
    const strHTMLs = books.map(book => `
    <tr>
    <td>${book.title}</td>
    <td>${book.price}</td>
    <td>
        <button class="readBtn">Read</button>
        <button class="updateBtn">Update</button>
        <button class="deleteBtn">Delete</button>
    </td>`)


    const elTable = document.querySelector('tbody')
    elTable.innerHTML = strHTMLs.join('')

}