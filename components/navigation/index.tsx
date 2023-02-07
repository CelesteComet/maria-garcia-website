import { slide as Menu } from 'react-burger-menu'
import { Oxygen } from '@next/font/google'
import Image from 'next/image'

const oxy = Oxygen({
  weight: '400',
})
export default function Navigation(): JSX.Element {
  const navTextStyle = `p-4 text-white block md:inline-block uppercase ${oxy.className}`
  var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '18px',
      top: '18px',
    },
    bmBurgerBars: {
      background:
        'white',
      height: '2px',
      border:
        '2px solid white',
    },
    bmBurgerBarsHover: {
      background:
        '#a90000',
    },
    bmCrossButton: {
      height: '24px',
      width: '24px',
    },
    bmCross: {
      background:
        'white',
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
    },
    bmMenu: {
      background:
        'black',
      padding:
        '2.5em 1.5em 0',
      fontSize: '1.15em',
    },
    bmMorphShape: {
      fill: 'white',
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em',
    },
    bmItem: {
      display:
        'inline-block',
    },
    bmOverlay: {
      background:
        'rgba(0, 0, 0, 0.3)',
    },
  }

  const headerItems = [
    { name: 'home', link: '/' },
    { name: 'selling', link: '/selling' },
    { name: 'buying', link: '/buying' },
    { name: 'contact', link: '#footer' },
  ];

  const headerItemRender =
    headerItems.map(
      (
        headerItem
      ) => {
        return (
          <a
            key={
              headerItem.name
            }
            className={
              navTextStyle
            }
            href={`${headerItem.link}`}
          >
            {
              headerItem.name
            }
          </a>
        )
      }
    )


  return (
    <>
      <div className="md:hidden">
        <div className="md:hidden bg-black fixed w-full z-10">
            <a href="/">
              <Image
                width="112"
                height="112"
                className="w-28"
                src="/logo.png"
                alt={`${process.env.name} Logo`}
              />
            </a>            
        <Menu
          className="md:hidden mb-8"
          right
          styles={styles}
        >
          <ul className="flex flex-col md:flex-row">
            {headerItemRender}
          </ul>
        </Menu>
        </div>
      </div>
      <nav className="bg-transparent md:flex">
        <div className="flex flex-col hidden md:flex md:flex-row items-center justify-between p-8 bg-black text-white w-full">
          <a href="/">
            <Image
              width="112"
              height="112"
              className="w-28"
              src="/logo.png"
              alt={`${process.env.name} Logo`}
            />
          </a>
          <ul className="flex flex-col md:block md:flex-row">
            {headerItemRender}
          </ul>
        </div>
      </nav>
    </>
  )
}
