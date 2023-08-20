
const Footer = () => {

    const footerLinks = (element)=>{

        const allLinks = document.querySelectorAll(".footerLinks");
        switch (element) {
            case 0: 
                allLinks.forEach((item, index)=> index === 0 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
            case 1: 
                allLinks.forEach((item, index)=> index === 1 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
            case 2: 
                allLinks.forEach((item, index)=> index === 2 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
            case 3: 
                allLinks.forEach((item, index)=> index === 3 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
            case 4: 
                allLinks.forEach((item, index)=> index === 4 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
            case 5: 
                allLinks.forEach((item, index)=> index === 5 ? item.style.opacity = 1 : item.style.opacity = 0.2);
                break;
        
            default:
                allLinks.forEach((item, index)=> item.style.opacity = 1);
                break;
        }
    }

    const linksbackToNormal = ()=>{
        const allLinks = document.querySelectorAll(".footerLinks");
        allLinks.forEach((item, index)=> item.style.opacity = 1);
    }
  return (
    <>
    <div className="footer">

        <h1>Let's
            <br />
            #connectOnCutting?
        </h1>

        <aside onMouseLeave={linksbackToNormal}>
            <a href="/" className="footerLinks" onMouseOver={()=> footerLinks(0)} data-cursorpointermini={true}>
                Home
            </a>
            <a href="/story" className="footerLinks" onMouseOver={()=> footerLinks(1)} data-cursorpointermini={true}>
                Story
            </a>
            <a href="/media" className="footerLinks" onMouseOver={()=> footerLinks(2)} data-cursorpointermini={true} >
                Media
            </a>
            <a href="/franchise" className="footerLinks" onMouseOver={()=> footerLinks(3)} data-cursorpointermini={true}>
                Franchise
            </a>
            <a href="/events" className="footerLinks" onMouseOver={()=> footerLinks(4)} data-cursorpointermini={true}>
                Events
            </a>
            <a href="/chaiwalacares" className="footerLinks" onMouseOver={()=> footerLinks(5)} data-cursorpointermini={true}>
                Chai wala Cares
            </a>
        </aside>

        <div>
            <h5>Email</h5>
            <a href="mailto: Info@mbachaiwala.com">Info@mbachaiwala.com</a>
            <a href="mailto: franchise@mbachaiwala.com">franchise@mbachaiwala.com</a>
        </div>
        <div>
            <h5>Phone</h5>
            <a href="tel: +91722905222">+91722905222</a>
        </div>

        <p> &copy; COPYRIGHT 2023 MBA CHAIWALA. MADE BY</p>
    </div>
    <div className="footer-div"></div>
    </>
  )
}

export default Footer
