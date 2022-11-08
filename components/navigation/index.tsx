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
        'black',
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
    'selling',
    'buying',
    'contact',
  ]

  return (
    <>
      <div className="md:hidden">
        <Menu
          className="md:hidden"
          right
          styles={styles}
        >
          <ul className="flex flex-col md:flex-row">
            {headerItems.map(
              (
                headerItem
              ) => {
                return (
                  <a
                    key={
                      headerItem
                    }
                    className={
                      navTextStyle
                    }
                    href={`/${headerItem}`}
                  >
                    {
                      headerItem
                    }
                  </a>
                )
              }
            )}
          </ul>
        </Menu>
      </div>
      <nav className="bg-black md:flex">
        <div className="flex flex-col hidden md:flex md:flex-row items-center justify-between p-8 bg-black text-white w-full">
          <Image
            width="112"
            height="112"
            className="w-28"
            src="/logo.png"
            alt="Alice Wu Logo"
          />
          <ul className="flex flex-col md:block md:flex-row">
            {headerItems.map(
              (
                headerItem
              ) => {
                return (
                  <a
                    key={
                      headerItem
                    }
                    className={
                      navTextStyle
                    }
                    href={`/${headerItem}`}
                  >
                    {
                      headerItem
                    }
                  </a>
                )
              }
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}
