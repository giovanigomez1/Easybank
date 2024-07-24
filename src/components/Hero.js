import mockups from '../images/image-mockups.png'


function Hero() {
  return (
    <div className="hero">
      <div className="hero__desc">
        <div className="hero__desc--content">
          <h1>Next generation <span>digital banking</span></h1>

          <p>Take your financial life online. Your Easybank account 
            <span>will be a one-stop-shop for spending, saving,</span> 
            <span>budgeting, investing, and much more.</span>
          </p>

          <button className='btn'>Request Invite</button>
        </div>
      </div>
      <div className="hero__img">
        <img src={mockups} alt="" />
      </div>
    </div>
  )
}

export default Hero