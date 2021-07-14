import { server } from '../../../config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Meta from '../../../components/Meta'
import styles from '../../../styles/Layout.module.css'
import PrintPdf from '../../../components/PrintPdf';
import React from 'react';
import { IoIosArrowBack } from "react-icons/io";



function article({article}) {
  const ref = React.useRef();

  return (
    <>
      <div className={styles.btnPrint}>
        <PrintPdf html={ref}/>
      </div>
      <div className={styles.detailItem} id="content" ref={ref}>
          <Meta title={article.title} description={article.excerpt} />
          <img alt="monster" id="image" className={styles.img} src={`https://robohash.org/${article.id}?set=set2&size=180x180`} />
          <h1>{article.title}</h1>
          <p style={{fontWeight: 'bold', fontSize: '0.8rem'}}>Artikel {article.id}</p>
          <p id="text">{article.body}</p>
          <br />
      </div>
          <Link href='/'><button className={styles.btn}><IoIosArrowBack/> Go Back</button></Link>
    </>
  )
}

// export const getStaticProps = async (context) => {
//   const res = await fetch(`${server}/api/articles/${context.params.id}`)

//   const article = await res.json()

//   return {
//     props: {
//       article,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  )

  const article = await res.json()

  return {
    props: {
      article,
    },
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

  const articles = await res.json()

  const ids = articles.map((article) => article.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default article
