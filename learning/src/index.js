import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {books} from './books';
import Book from './Book';

// function Greeting() {
//   return React.createElement('h2', {}, 'hello world')
// }

// function Greeting() {
//     return (
//         <div>
//             <Person/>
//             <Message />
//         </div>
//     )
// }

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//     return <p>this is my message</p>
// }

// export default Greeting;

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />)
// const names = ['john', 'peter', 'susan']
// const newNames = names.map((name) => {
//   console.log(name)
//   return <h1>{name}</h1>
// })

function BookList() {
     
    // const getBook = (id) => {
    //     const book = books.find((book) => book.id === id)
    //     console.log(book);
    // }

  return (
    <>  
        <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
            return <Book key={book.id} {...book} number={index}/>
        })}

        </section>
    </>
  )
}



root.render(<BookList/>)


// const EventExamples = () => {
    // const handleFormInput = (e) => {
    //     console.log('handle form input value', e.target.value);
    //     console.log('handle form name', e.target.name);

    // };
    // const handleButtonClick = () => {
    //     alert('handle button click')
    // }
    // const handleFormSubmission = (e) => {
    //     e.preventDefault();
    //     console.log('Form submitted');
    // }
    // return (
    //   <section>
        // {/* <form onSubmit={handleFormSubmission}>
        //   <h2>Typical Form</h2>
        //   <input
        //     type="text"
        //     name="example"
        //     onChange={handleFormInput}
        //     style={{ margin: '1rem 0' }}
        //   />
        //   <button type="submit">submit</button>
        // </form>
        // <div>
        //   <button type='button' onClick={handleButtonClick}>click</button>
        // </div> */}
    //         <form>
    //             <input type="text" name="product" id="" onChange={(e) => console.log(e.target.value)} style={{margin: '1rem 0'}}/>
    //             <button type="submit">submit</button>
    //         </form>
    //     </section>
    //     )
    // };

// const btn = document.getElementById('btn')
// btn.addEventListener('click', function (e) {
    
// })