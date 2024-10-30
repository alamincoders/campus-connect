import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Reusable Footer Column Component
const FooterColumn = ({ title, children }) => (
  <div>
    <h3 className="footer-heading">{title}</h3>
    <div>{children}</div>
  </div>
);

// Social Icons Component
const FooterSocialIcons = ({ icons }) => (
  <div className="flex space-x-2.5 items-center">
    {icons.map((Icon, index) => (
      <div
        key={index}
        className="footer_social_icon"
      >
        <Icon />
      </div>
    ))}
  </div>
);

// Links List Component
const FooterLinks = ({ links }) => (
  <ul className="space-y-2.5">
    {links.map((link, index) => (
      <li key={index}>
        <Link
          className="footer_quick_links"
          to={link.path}
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

// Contact Info Component
const FooterContact = ({ contacts }) => (
  <div>
    {contacts.map((contact, index) => (
      <div
        key={index}
        className="flex items-start gap-2 mb-4"
      >
        <div className="footer_social_icon_contact">
          <contact.icon />
        </div>
        <div className="flex flex-col">
          {contact.type === "link" ? (
            contact.values.map((value, i) => (
              <Link
                key={i}
                to={value.link}
              >
                {value.label}
              </Link>
            ))
          ) : (
            <address>
              {contact.values[0].label} <br />
              {contact.values[1].label}
            </address>
          )}
        </div>
      </div>
    ))}
  </div>
);

// Main Footer Section
const FooterSection = () => {
  const socialIcons = [FaFacebookF, FaInstagram, FaTwitter];
  const quickLinks = [
    { label: "About Us", path: "/about-us" },
    { label: "Colleges", path: "/colleges" },
    { label: "Research Papers", path: "/research-papers" },
    { label: "Admission", path: "/admission" },
    { label: "Contact Us", path: "/contact" },
  ];
  const contacts = [
    {
      icon: FaPhone,
      type: "link",
      values: [
        { label: "+880 123 456 789", link: "tel:+880123456789" },
        { label: "+1 (444) 000-8888", link: "tel:+14440008888" },
      ],
    },
    {
      icon: FaRegEnvelope,
      type: "link",
      values: [
        { label: "info@your_domain.com", link: "mailto:info@your_domain.com" },
        { label: "help@your_domain.com", link: "mailto:help@your_domain.com" },
      ],
    },
    {
      icon: FaMapMarkerAlt,
      type: "address",
      values: [
        { label: "1247/Plot No. 39, 15th Phase," },
        { label: "LHB Colony, Kanpur" },
      ],
    },
  ];

  return (
    <footer className="bg-secondary_main-950 text-white py-16 lg:py-[90px] relative">
      <div className="container_fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 lg:gap-8">
          {/* About Us Section */}
          <FooterColumn title="About Us">
            <p className="mb-4 text-[#b2c0d8] text-[15px] font-roboto">
              Suspendisse non sem ante. Cras pretium gravida leo a convallis.
              Nam malesuada interdum metus.
            </p>
            <FooterSocialIcons icons={socialIcons} />
          </FooterColumn>

          {/* Quick Links Section */}
          <FooterColumn title="Quick Links">
            <FooterLinks links={quickLinks} />
          </FooterColumn>

          {/* Latest Event Section */}
          <FooterColumn title="Latest Event">
            <div className="space-y-4">
              <div className="flex items-center gap-4 lg:gap-6">
                <img
                  src="/event1.png"
                  alt="event"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col gap-1">
                  <Link
                    className="text-[#b2c0d8] text-[15px] font-roboto"
                    to="/"
                  >
                    Nothing impossible, requires hard work
                  </Link>
                  <span className="text-primary_main text-[15px] font-medium">
                    7 March, 2025
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 lg:gap-6">
                <img
                  src="/event2.png"
                  alt="event"
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col gap-1">
                  <Link
                    className="text-[#b2c0d8] text-[15px] font-roboto"
                    to="/"
                  >
                    Nothing impossible, requires hard work
                  </Link>
                  <span className="text-primary_main text-[15px] font-medium">
                    18 March, 2025
                  </span>
                </div>
              </div>
            </div>
          </FooterColumn>

          {/* Contact Us Section */}
          <FooterColumn title="Contact Us">
            <FooterContact contacts={contacts} />
          </FooterColumn>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
