function Article({articleImg, autor, title, text}) {
  return (
    <div className="article">
      <div className="article__img">
        <img src={articleImg} alt="" />
      </div>
      <div className="article__data">
        <div className="article__data--autor">
          <p>By {autor}</p>
        </div>
        <div className="article__data--title">
          <h4>{title}</h4>
        </div>
        <div className="article__data--text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}


export default Article