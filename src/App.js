import { Fragment } from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Choose from './components/Choose';
import Feature from './components/Feature';
import onlineIcon from './images/icon-online.svg'
import budgetingIcon from './images/icon-budgeting.svg'
import onboardingIcon from './images/icon-onboarding.svg'
import apiIcon from './images/icon-api.svg'
import Articles from './components/Articles';
import Article from './components/Article';
import imgCurrency from './images/image-currency.jpg'
import imgRestaurant from './images/image-restaurant.jpg'
import imgPlane from './images/image-plane.jpg'
import imgConfetti from './images/image-confetti.jpg'
import Footer from './components/Footer';

function App() {
  return ( 
    <Fragment>
      <Navbar/>
      <Hero/>
      <Choose>
        <Feature 
          icon={onlineIcon}
          title={'Online Banking'}
          description={'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'}
        />
        <Feature 
          icon={budgetingIcon}
          title={'Simple Budgeting'}
          description={'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'}
        />
        <Feature 
          icon={onboardingIcon}
          title={'Fast Onboarding'}
          description={'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'}
        />
        <Feature 
          icon={apiIcon}
          title={'Open API'}
          description={'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'}
        />
      </Choose>
      <Articles>
        <Article 
          articleImg={imgCurrency}
          autor={'Claire Robinson'} 
          title={'Receive money in any currency with no fees'} 
          text={'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'}
        />
        <Article 
          articleImg={imgRestaurant}
          autor={'Wilson Hutton'} 
          title={'Treat yourself without worrying about money'} 
          text={'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'}
        />
        <Article 
          articleImg={imgPlane}
          autor={'Wilson Hutton'} 
          title={'Take your Easybank card wherever you go'} 
          text={'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'}
        />
        <Article 
          articleImg={imgConfetti}
          autor={'Claire Robinson'} 
          title={'Our invite-only Beta accounts are now live!'} 
          text={'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'}
        />
      </Articles>
      <Footer />


    </Fragment>
  )
}


export default App