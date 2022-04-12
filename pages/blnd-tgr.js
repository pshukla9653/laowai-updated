import BlindTigerRecipe from '../components/recipe'
import Link from 'next/link'

const BlindTiger = () => {


  return (
    <div className={'blindTiger'}>
      <div className={'blindTiger-left'}>
        <div className={'blindTiger-left-title'}>
          <img src={'/images/blnd-tgr.png'} width={'50%'}/>
        </div>
        <div className={'blindTiger-recipes'}>
          <BlindTigerRecipe title={'1. Single Malt Xiao Long Bao (4pc)'} price={'9$'} subtitle={'Local Chinatown Pork & Scotch infused Soup Dumplings'} discreption={'Shanghai'}/>
          <BlindTigerRecipe title={'2. Vegetable Shaomai (4pc) (V)'} price={'8$'} subtitle={'Egg plant, Shiitaki mushroom, Fermented Tofu; spinach dumpling wrapper'} discreption={'Inner Mongolia'}/>
          <BlindTigerRecipe title={'3. Bison Momos (3pc)'} price={'9.5$'} subtitle={'Two Rivers ground bison turmeric dumplings, Peppercorn soy, House-made sepen'} discreption={'Tibet'}/>
          <BlindTigerRecipe title={'4. Zhong Dumplings (4pc)'} price={'8.5$'} subtitle={'Pork dumplings, Sichuan chili oil, house-made aromatic soy'} discreption={'Sichuan'}/>
          <BlindTigerRecipe title={'5. Cumin Lamb Dumplings (3pc)'} price={'9$'} subtitle={'Cumin Lamb, Peppercorn soy'} discreption={'Xinjiang'}/>
          <BlindTigerRecipe title={'6. Tmrw Foods & Cabbage Jiaozi (4pc) (V)'} price={'7.5$'} subtitle={'Vancouver based alternative meat, Napa cabbage'} discreption={'Western style'}/>
        </div>
        <Link href='/'>
          <a className='blindTigerRecipe-top colorOrang bold'>
            7. Secret Recipe
          </a>
        </Link>
      </div>
      <div className={'blindTiger-right'}>
        <img src={'/images/contact/people_old2.jpg'} alt={'Blind Tiger'}/>
      </div>
    </div>
  )
}


export default BlindTiger
