const Book = (props) => {
  const { img, title, author, number } = props
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  // const getSingleBook = () => {
  //     getBook(id)
  // }
  return (
    <article className="book">
      <img src={img} alt="front" />
      <h2>{title}</h2>
      {/* <button onClick={() => getBook(id)}>click</button> */}
      <h4 style={inlineHeadingStyles}>{author}</h4>
      <span className="number">#{number + 1}</span>
    </article>
  )
}

export default Book;