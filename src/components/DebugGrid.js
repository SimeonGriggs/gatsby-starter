import PropTypes from 'prop-types'
import React, {useState, useEffect} from 'react'

const DebugGrid = () => {
  let [gridIsVisible, setGridIsVisible] = useState(false)

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'g') {
        setGridIsVisible(!gridIsVisible)
      }
    })
  })

  return (
    <section className={`fixed inset-0 pointer-events-none ${gridIsVisible ? `opacity-75` : `opacity-0`}`}>
      <div className='container mx-auto flex h-full'>
        <div className='w-4 md:w-1/12 border-l border-pink-500 text-center flex items-center justify-center text-3xl text-pink-500'>
          <div className='hidden md:block'>1/12</div>
        </div>
        <div className='flex-1 flex'>
          <div className='border-l border-pink-500 text-center flex items-center justify-center text-3xl text-pink-500 w-1/3 lg:w-1/5'>
            <div className='lg:hidden'>1/3</div>
            <div className='hidden lg:block'>1/5</div>
          </div>
          <div className='border-l border-pink-500 text-center flex items-center justify-center text-3xl text-pink-500 w-1/3 lg:w-1/5'>
            <div className='lg:hidden'>2/3</div>
            <div className='hidden lg:block'>2/5</div>
          </div>
          <div className='border-l border-r lg:border-r-0 border-pink-500 text-center flex items-center justify-center text-3xl text-pink-500 w-1/3 lg:w-1/5'>
            <div className='lg:hidden'>3/3</div>
            <div className='hidden lg:block'>3/5</div>
          </div>
          <div className='hidden lg:flex border-l border-pink-500 text-center items-center justify-center text-3xl text-pink-500  lg:w-1/5'>
            <div className='hidden lg:block'>4/5</div>
          </div>
          <div className='hidden lg:flex border-l border-r border-pink-500 text-center items-center justify-center text-3xl text-pink-500 lg:w-1/5'>
            <div className='hidden lg:block'>5/5</div>
          </div>
        </div>
        <div className='w-4 md:w-1/12 border-r border-pink-500 text-center flex items-center justify-center text-3xl text-pink-500'>
          <div className='hidden md:block'>1/12</div>
        </div>
      </div>
    </section>
  )
}

DebugGrid.propTypes = {
//   siteTitle: PropTypes.string
}

DebugGrid.defaultProps = {
//   siteTitle: ``
}

export default DebugGrid
