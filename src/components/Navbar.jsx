import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [activeTopLevelPage, setActiveTopLevelPage] = useState(null)
  const [contactButtonActive, setContactButtonActive] = useState(false)

  const location = useLocation()
  
  // Navigation data - exact from original HTML
  const primaryNavigation = [
    {
      link: {
        text: "Build Smarter",
        url: "/build-smarter"
      },
      description: "By pre-constructing our homes offsite, we save valuable resources"
    },
    {
      link: {
        text: "Sustainability",
        url: "/sustainability"
      },
      description: "We can lower the carbon footprint of home construction by 80%"
    },
    {
      link: {
        text: "About",
        url: "/about"
      },
      description: "Kingshaus has been developing quality homes for over 75 years"
    }
  ]

  const primaryNavigationButton = {
    link: {
      text: "Contact",
      url: "/contact"
    },
    description: "Contact Kingshaus"
  }

  // Handle mobile menu toggle
  const toggleNavOpen = () => {
    setNavOpen(!navOpen)
    
    // Prevent body scroll when nav is open
    if (!navOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  // Handle desktop hover navigation
  const toggleNavOpenDesktop = () => {
    const isDesktop = window.innerWidth >= 1024
    if (isDesktop) {
      setNavOpen(true)
    }
  }

  // Handle contact button hover
  const handleHoverContact = (event) => {
    if (event.type === 'mouseenter') {
      setContactButtonActive(true)
      setActiveTopLevelPage(null)
    } else if (event.type === 'mouseleave') {
      setContactButtonActive(false)
    }
  }

  // Handle navigation item hover/click - EXACT COPY FROM ORIGINAL JAVASCRIPT
  const handleActiveTopLevelPage = (event, index) => {
    const canHover = window.matchMedia('(hover: hover)').matches
    
    if (event.type === 'mouseover' && canHover) {
      setActiveTopLevelPage(index)
      setContactButtonActive(false)
    } else if (event.type === 'mouseleave' && canHover) {
      setActiveTopLevelPage(null)
    } else if (event.type === 'click') {
      setActiveTopLevelPage(index)
    }
  }

  // Close navigation
  const closeNav = () => {
    const isDesktop = window.innerWidth >= 1024
    const isTouch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    
    if (isDesktop && !isTouch) {
      setNavOpen(false)
      setTimeout(() => {
        setActiveTopLevelPage(0)
      }, 400)
    } else {
      setNavOpen(false)
      document.body.classList.remove('no-scroll')
      setActiveTopLevelPage(null)
    }
  }

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header')
      if (header) {
        const scrollY = window.scrollY
        if (scrollY > 32) {
          header.setAttribute('data-scrolled', 'true')
        } else {
          header.setAttribute('data-scrolled', 'false')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" aria-current="page" className={`header__logo-link ${location.pathname === '/' ? 'active' : ''} nuxt-link-active`}>
          <picture className="header__logo-holder">
            <img src="/images/logos/kingshaus-white.svg" alt="Kingshaus logo" className="header__logo" />
          </picture>
        </Link>
      </div>
      <nav 
        tabIndex="-1" 
        className={`nav ${navOpen ? 'nav--open' : ''}`}
        onMouseEnter={toggleNavOpenDesktop}
        onMouseLeave={() => {
          const isDesktop = window.innerWidth >= 1024
          if (isDesktop) {
            setNavOpen(false)
          }
        }}
      >
        <button 
          aria-label="Open nav" 
          aria-expanded="false" 
          type="button" 
          className="nav__button nav__button--open"
          onClick={(e) => {
            e.preventDefault()
            toggleNavOpen()
          }}
        >
          <span className="nav__hamburger-line"></span>
          <span className="nav__hamburger-line"></span>
        </button>
        
        <button 
          aria-label="Close nav" 
          aria-expanded="true" 
          type="button" 
          className="nav__button nav__button--close"
          onClick={(e) => {
            e.preventDefault()
            toggleNavOpen()
          }}
        >
          <span className="nav__hamburger-line"></span>
          <span className="nav__hamburger-line"></span>
        </button>
        
        <div className="nav__list">
          {primaryNavigation.map((item, index) => (
            <div 
              key={`link-${index}`}
              className="nav__link-holder"
              onMouseEnter={(e) => handleActiveTopLevelPage(e, index)}
              onMouseLeave={(e) => handleActiveTopLevelPage(e, index)}
            >
              <Link 
                to={item.link.url} 
                className={`nav__link ${index === activeTopLevelPage ? 'nav__link--active' : ''}`}
                onClick={closeNav}
              >
                <span className="nav__page-name">{item.link.text}</span>
                <div className="text-block nav__page-description nav__page-description--mobile">
                  {item.description}
                </div>
              </Link>
            </div>
          ))}
          
          <div 
            className="nav__contact-button-holder"
            onMouseEnter={handleHoverContact}
            onMouseLeave={handleHoverContact}
          >
            <Link to={primaryNavigationButton.link.url} className="button button--solid-green" data-v-7ef03004>
              <span className="button__text" data-v-7ef03004>{primaryNavigationButton.link.text}</span>
            </Link>
          </div>

          {/* Desktop descriptions - EXACT COPY FROM ORIGINAL HTML */}
          {primaryNavigation.map((item, index) => (
            <div 
              key={`description-${index}`}
              className={`nav__page-description nav__page-description--desktop ${index === activeTopLevelPage ? 'nav__page-description--active' : ''}`}
            >
              <div className="nav__content-holder">
                <div className="nav__content">
                  <div className="text-block nav__text">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Contact button description - EXACT COPY FROM ORIGINAL HTML */}
          <div className={`nav__page-description nav__page-description--desktop ${contactButtonActive ? 'nav__page-description--active' : ''}`}>
            <div className="nav__content-holder">
              <div className="nav__content">
                <div className="text-block nav__text">
                  {primaryNavigationButton.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
