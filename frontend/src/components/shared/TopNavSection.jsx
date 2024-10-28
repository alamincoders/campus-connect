import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNavSection = () => {
  return (
    <div className="text-white py-4 bg-secondary_main max-h-[78px] overflow-hidden hidden lg:block relative z-0">
      <div className="top_header" />
      <div className="container_fluid">
        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex gap-2 items-center font-medium">
            <h4>Follow us:-</h4>
            <Link to="#">
              <FaFacebookF />
            </Link>{" "}
            <Link to="#">
              <FaInstagram />{" "}
            </Link>{" "}
            <Link to="#">
              <FaTwitter />{" "}
            </Link>{" "}
            <Link to="#">
              <FaYoutube />{" "}
            </Link>
          </div>
          <div className="flex items-center divide-x-[1px] divide-white/30 ">
            <div className="inline-flex gap-2 items-center mr-3">
              <img
                src="/phone-call.png"
                alt="phone"
                className="max-w-9"
              />
              <div>
                <h5 className="text-white/90 text-xs">Call Now !</h5>
                <Link
                  target="_blank"
                  className="font-medium"
                  to="tel:+91 1234 567 890"
                >
                  +91 1234 567 890
                </Link>
              </div>
            </div>{" "}
            <div className="inline-flex gap-2 items-center pl-3">
              <img
                src="/mailing.png"
                alt="phone"
                className="max-w-9"
              />
              <div>
                <h5 className="text-white/90 text-xs">Email Now !</h5>
                <Link
                  target="_blank"
                  className="font-medium"
                  to="mailto:info@yourdomain.com"
                >
                  info@yourdomain.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavSection;
