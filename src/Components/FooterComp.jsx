import { Footer } from "flowbite-react";
import { FaDribbble, FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";

const FooterComp = () => {
  return (
    <Footer bgDark>
    <div className="w-full px-3 lg:px-24 bg-gray-700 text-white">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-4 md:grid-cols-4">
        <div>
          <Footer.Title title="Books Orbit" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">About</Footer.Link>
       
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="help center" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Github</Footer.Link>
            <Footer.Link href="#">Linkedin</Footer.Link>
           
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <div>
          <Footer.Title title="legal" />
          <Footer.LinkGroup col>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
          </Footer.LinkGroup>
        </div>
       
      </div>
      <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by=" BookOrbit™" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={FaFacebook} />
          <Footer.Icon href="#" icon={FaInstagram} />
          <Footer.Icon href="#" icon={FaTwitter} />
          <Footer.Icon href="#" icon={FaGithub} />
          <Footer.Icon href="#" icon={FaDribbble} />
        </div>
      </div>
    </div>
  </Footer>
  )
}

export default FooterComp