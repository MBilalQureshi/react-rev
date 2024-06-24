import React from 'react'
import Book from './Book'

function RenderingLists() {
    const bookList = [
        'book1',
        'book2',
        'book3',
    ]

    const books = [
        {
            title: "title1",
            author: "author1",
            pages: 111
        },
        {
            title: "title2",
            author: "author2",
            pages: 222
        },
        {
            title: "title3",
            author: "author3",
            pages: 333
        }
    ]

    return (
        <div>
            {/* 1 */}
            {bookList.map(book => <h2 key={book}>{book}</h2>)}
            <hr />
            


            {/* 2 */}
            {
                books.map(book =>{
                    return(
                    <div key={book.title}>
                        <h5>Title: {book.title}</h5>
                        <p>Authod: {book.author}</p>
                        <p>Number of pages: {book.pages}</p>
                    </div>
                    )
                })
            }
            <hr />



            {/* 3 */}
            {
                books.map(book => {
                    return (
                        <Book key = {book.title} book={book} />
                    )
                }
                )
            }
        </div>
    )
}

export default RenderingLists