import Meta from '../components/Meta'
import AboutStyles from '../styles/about.module.css'

const about = () => {
  return (
    <div className={AboutStyles.container}>
      <Meta title='About' />
      <h1 className={AboutStyles.title}>About Artikel <span>Aldi</span></h1>
      <p>Artikel Aldi merupakan kumpulan artikel terbaru yang berisikan data yang diambil dari API (https://jsonplaceholder.typicode.com/posts/)</p>
      <p>Gambar yang digunakan merupakan gambar yang diambil dari API (https://robohash.org/)</p>
    </div>
  )
}

export default about
