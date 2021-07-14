import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

function ArticleItem({article}) {
  return (
    <>
      <Link href={`/article/${article.id}`}>
        <a className={articleStyles.card}>
            <img className={articleStyles.img} alt="monster" src={`https://robohash.org/${article.id}?set=set2&size=180x180`} />
            <p style={{fontWeight: 'bold', fontSize: '0.8rem'}}>Artikel {article.id}</p>
            <h3>{article.title} &rarr;</h3>
            <p id="text">{article.body}</p>
        </a>
      </Link>
    </>
    
  )
}

export default ArticleItem
