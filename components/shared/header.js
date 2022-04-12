import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <>
      <header className={'header'}>
        <div className={'header-detail'}>
          <img src={'/images/header-detail.png'} alt={'detail'}/>
        </div>
        <>
          <div className="mob-outer">
            <Link href={'/'}>
              <a href={'/'}>
                <img src={'/images/logo.png'} className={'header-logo'} alt={'Laowai'}/>
              </a>
            </Link>
            <Link href={'#'}>
              <a href={'#'} className="mob-toggler" onClick={handleClick}>
                <span>text</span>
                <span>text</span>
                <span>text</span>
              </a>
            </Link>
          </div>
        </>
        <div className={`header-main hidemenu ${active ?"" :"hiddens"}`} >
          <Link href={'/'}>
            <a href={'/'} onClick={handleClick}>
              <img src={'/images/logo.png'} className={'header-logo'} alt={'Laowai'}/>
            </a>
          </Link>
          <Link href={'/gallery'}>
            <a href={'/gallery'} className={'bold'} onClick={handleClick}>
              Gallery
            </a>
          </Link>
          <Link href={'/contact'}>
            <a href={'/contact'} className={'bold'} onClick={handleClick}>
              Contact
            </a>
          </Link>
          <Link href={'/blnd-tgr'}>
            <a href={'/blnd-tgr'} className={'bold'} onClick={handleClick}>
              <img className={'header-blnd'} src={'/images/blnd-tgr.png'} alt={'Blnd Tgr'}/>
            </a>
          </Link>
        </div>
      </header>
      <div className='overlay-detail'>
        <img src={'/images/header-detail.png'} alt={'detail'}/>
      </div>
    </>
  )
}


export default Header
