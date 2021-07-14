import React from "react";
import { jsPDF,HTMLOptionImage } from "jspdf";
import articleStyles from '../styles/Article.module.css'
import { BiPrinter } from "react-icons/bi";

type props = {

  html?: React.MutableRefObject<HTMLDivElement>;

};

const PrintPdf: React.FC<props> = ({ html }) => {
  const generatePdf = () => {
      var doc = new jsPDF('p', 'mm', 'a4');
      let split=doc.splitTextToSize(document.getElementById("text").innerText,200);
      let image = document.getElementById("image").getAttribute('src');
      doc.text(document.querySelector("#content > h1").innerHTML,15,10);
      doc.addImage(image,70,7,60,60);
      doc.text(split,5,75);
      doc.output("dataurlnewwindow"); 

  };

  return (

    <div>
      <button onClick={generatePdf} className={articleStyles.btnDownload}>
        Print Artikel &nbsp;<BiPrinter/>
      </button>
    </div>

  );
};

export default PrintPdf;