import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#095234] text-white">
      <div className=" flex flex-col md:flex-row justify-center items-start p-12">
        <div className="flex flex-col justify-center text-left w-[300px]">
          <span className="title text-white text-[calc(3vw+1rem)] my-4">
            Mentions
          </span>
          <Link className="my-2" href="/mentions-legales">
            Mentions Légales
          </Link>
          <Link className="my-2" href="/cgv">
            Conditions générales de ventes
          </Link>
          <Link className="my-2" href="/donnees-personnelles">
            Données personnelles
          </Link>
        </div>
        <Link href={"/"}>
          <Image
            src="/assets/images/TempleLogo.png"
            alt="logo"
            width={150}
            height={150}
            className="mx-16 my-10"
          />
        </Link>
        <div className="flex flex-col justify-center text-left w-[300px]">
          <span className="title text-[calc(3vw+1rem)] my-4">Contact</span>
          <Link className="my-2" href="mailto:robin@pluviaux.fr">
            Envoyer un E-Mail
          </Link>
          <Link className="my-2" href="/faq">
            Accéder à notre FAQ
          </Link>
        </div>
      </div>
      <span className="flex justify-center text-sm py-4 text-center">
        © 2023 | Le temple - Developped & Designed by Robin Pluviaux
      </span>
    </div>
  );
};

export default Footer;
