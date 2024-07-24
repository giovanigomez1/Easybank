function Articles({children}) {
  return (
    <div className="articles">
      <div className="articles__content container">
        <div className="articles__content--title">
          <h2>Latest Articles</h2>
        </div>
        <div className="articles__content--list">
          {children}
        </div>
      </div>
    </div>
  )
}


export default Articles