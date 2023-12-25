import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me ...</h1>

      <div className="contact1">
        <div className="communation">
          <div className="icon">
            <div className="icon1">
              <MdOutlineMarkEmailRead />
            </div>
            <h2>Email</h2>
          </div>
          <div className="email">
            <a href="mailto:osmannuri.turhan01@gmail.com">
              <div>osmannuri.turhan01@gmail.com</div>
            </a>
          </div>
        </div>

        <div className="communation">
          <div className="icon">
            <div className="icon1">
              <MdOutlinePhoneAndroid />
            </div>
            <h2>Phone</h2>
          </div>
          <div className="phone">
            <a href="tel:+40 (571) 360-1234">
              <div>+90 539 637 5071</div>
            </a>
          </div>
        </div>

        <div className="communation">
          <div>
            <div className="icon">
              <div className="icon1">
                <MdOutlineLocationOn />
              </div>
              <h2>Location</h2>
            </div>
          </div>
          <div className="adres">
            <div>Erzurum/Palandöken</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
