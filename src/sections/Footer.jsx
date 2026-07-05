import {socialImgs} from "../constantes/index.js";

const Footer = () => {
    return (
       <footer className="footer">
           <div className="footer-container">
               <div className="flex items-center flex-col justify-center md:items-start">
                   <a href="/"> Visit my blog</a>
               </div>
               <div className="socials">
                   {socialImgs.map((img)=>(
                       <a className="icon" href={img.url}
                       terget="_blank" key={img.url}>
<img src={img.imgPath} />
                       </a>
                   ))}
               </div>
               <div className="flex flex-col justify-center">
                   <p className="text-center md:text-end">
                       Ⓒ {new Date().getFullYear()} Abdelkader Amine Lazereg Chalabi | All Rights Reserved
                   </p>
               </div>
           </div>
       </footer>
    )
}
export default Footer
