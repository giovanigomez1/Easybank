function Feature({icon, title, description}) {
  return (
    <div className="feature">
      <div className="feature__icon">
        <img src={icon} alt="" />
      </div>
      <div className="feature__content">
        <h4 className="feature__content--title">
          {title}
        </h4>
        <p className="feature__content--desc">
          {description}
        </p>
      </div>
    </div>
  )
}


export default Feature