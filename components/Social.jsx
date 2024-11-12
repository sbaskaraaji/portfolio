import { icons } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaYoutube, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/sbaskaraaji" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sajibaskara/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@sukmaajibaskara" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
