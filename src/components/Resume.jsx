import { Document, Page } from "react-pdf";
// import pdfjsLib from 'pdfjs-dist';
const Resume = ({file}) => {
    return ( 
        <Document file={file}>
            <Page pageNumber={1}/>
        </Document>
     );
}
 
export default Resume;