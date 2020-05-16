import {Link} from 'gatsby'
import {motion} from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({siteTitle, location}) => {
  let menuClasses = 'fixed z-50 top-0 w-full hover:bg-opacity-50 bg-opacity-0 bg-black transition-colors duration-200 h-16 md:h-20 flex items-center justify-center'

  const motionNav = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.125
      }
    }
  }

  const motionNavItem = {
    hidden: {
      opacity: 0,
      x: '10%'
    },
    show: {
      opacity: 1,
      x: '0'
    }
  }

  const nav = [
    {link: '/', text: 'Home', active: false},
    {link: '/about', text: 'About', active: false}
  ]

  return (
    <header className={menuClasses}>
      <div className='container flex items-center justify-between'>
        <Link to='/'>
          {siteTitle}
        </Link>
        {nav && (
          <nav className='md:w-11/12'>
            <motion.ul
              className='flex justify-end leading-none'
              variants={motionNav}
              initial='hidden'
              animate='show'>
              {nav.map((link, index) => (
                <motion.li key={index} variants={motionNavItem}>
                  <Link className={`text-sm md:text-base mr-4 md:mr-8 font-bold tracking-tight ${link.active ? 'text-red-500' : ''} hover:text-red-500`} to={link.link}>
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        )}
      </div>
    </header>

  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
