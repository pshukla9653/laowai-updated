import Plate from '../components/plate'
import Head from 'next/head'

const ContactPage = () => {


  return (
    <>
      <Head>
        <title>Laowai | Contact</title>
      </Head>
      <div className={'contactPage'}>
        <div className={'contactPage-left'}>
          <h1 className={'display'}>
            Contact
          </h1>
          <p className={'h5'}>
            No small group reservations. <br/>
            First come first served.
          </p>
          <img className={'contactPage-map'} src={'/images/contact/map.png'} alt={'Map'}/>
          <div className={'contactPage-pair h5 bold'}>
            <div>Chinatown Vancouver</div>
           
          </div>
        </div>
        <div className={'contactPage-right'}>
          <Plate className={'contactPage-plate'} image={'/images/contact/people.jpg'} alt={'People'}/>
        </div>
      </div>
    </>
  )
}

export default ContactPage
