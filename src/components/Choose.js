function Choose({children}) {
  return (
    <div className="choose">
      <div className="choose__content container">

        <div className="choose__content--title">
          <h2>Why choose Easybank?</h2>
          <p>We leverage Open Banking to turn your bank account into your financial hub. 
            <span> Control your finances like never before.</span>
          </p>
        </div>
        <div className="choose__content--features">
          {children}
        </div>
      </div>
    </div>
  )
}



export default Choose