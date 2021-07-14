import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Article.module.css'
import Header from './Header'
import React, { useRef } from 'react'
import { PDFExport } from '@progress/kendo-react-pdf'
import {FiDownload} from 'react-icons/fi'
import ScrolltoTop from './ScrolltoTop'

const ArticleList = ({ articles }) => {
  const pdfExportComponent = useRef(null);
  // const ref = React.useRef();
  const  handleExportWithComponent  = (event) => {
      pdfExportComponent.current.save();
  }
  return (
    <>
      <button onClick={handleExportWithComponent} className={articleStyles.btnDownload}>Download Laporan Artikel &nbsp; <FiDownload/></button>
      <PDFExport fileName='Laporan Artikel Aldi' ref={pdfExportComponent}  paperSize="A4">
      <Header />
        <div className={articleStyles.grid}>
          {articles.map((article) => (
            <ArticleItem article={article} />
          ))}
        </div>
      </PDFExport>
      <ScrolltoTop/>
    </>
  )
}

export default ArticleList
