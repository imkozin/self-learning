import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

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
const names = ['john', 'peter', 'susan']
const newNames = names.map((name) => {
  console.log(name)
  return <h1>{name}</h1>
})

function BookList() {
//     const books = [
//         {
//       author: 'Jordan Moore',
//       title: 'Elon Musk',
//       img: 'https://images-na.ssl-images-amazon.com/images/I/814mI0-rkxL._AC_UL900_SR900,600_.jpg',
//         },
//         {
//       author: 'James Clear',
//       title: 'Atomic Habits',
//       img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
//         }
// ]



    // const title = 'Elon Musk'
    // const author = 'Jordan Moore'
    // const img =
    //   'https://images-na.ssl-images-amazon.com/images/I/814mI0-rkxL._AC_UL900_SR900,600_.jpg'
  return (
    <section className="booklist">
        {names.map((name) => {
            return <h1>{name}</h1>
        })}

    </section>
  )
}

const Book = (props) => {
    const {img, title, author} = props;
    const inlineHeadingStyles = {
      color: '#617d98',
      fontSize: '0.75rem',
      marginTop: '0.5rem',
    }
    return (
      <article className="book">
        <img
          src={img}
          alt="front"
          />
        <h2>{title}</h2>
        <h4 style={inlineHeadingStyles}>{author}</h4>
      </article>
    )}


root.render(<BookList/>)