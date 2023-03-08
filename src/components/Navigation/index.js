import styles from './style.module.scss'

const Navigation = () => (
  <nav className={styles['navigation']}>
    <div className={styles['navigation__container']}>
      <div className={styles['navigation__items']}>
        <img
          className={styles['navigation__items--logo']}
          src="https://uploads-ssl.webflow.com/5cf12d0aeca6753441cb765c/5d53c2122c90f608891f3e31_Logo%20SVG.svg"
          alt="pixyle logo"
        />
        <button className={styles['navigation__items--button']}>
          Try our App for Free
        </button>
      </div>
    </div>
  </nav>
)

export default Navigation
