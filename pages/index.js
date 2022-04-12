import Head from 'next/head'
import Plate from '../components/plate'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Laowai | Home</title>
      </Head>
      <div className={'homePage'}>
        <img className={'homePage-background'} src={'/images/home/background.png'} alt={'background'} />
        <div className={'homePage-plates'}>
          <Plate className={'homePage-largePlate'} image={'/images/home/booth.jpeg'} alt={'Booth'}/>
          <Plate className={'homePage-smallPlate'} image={'/images/home/menu.jpg'} alt={'Menu'} />
          <img className={'homePage-smokeSprite1'} src={'/images/smoke/sprite-1.png'} alt={'smoke sprite 1'} />
          <img className={'homePage-smokeSprite2'} src={'/images/smoke/sprite-2.png'} alt={'smoke sprite 2'}/>
        </div>
        <Link href='/menu'>
          <a className='display bold homePage-menu'>
            MENU
          </a>
        </Link>
      </div>
    </>
  )
}
