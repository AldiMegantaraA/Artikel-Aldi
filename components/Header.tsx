import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Artikel <span>Aldi</span>
      </h1>
      <p className={headerStyles.description}>
        Kumpulan artikel terbaru dari Aldi
      </p>
    </div>
  )
}

export default Header
