import Image from "next/image";
import Link from "next/link";

// Components
import FooterLinks from "@/app/components/FooterLinks";

const sections = [
  {
    title: "Product",
    id: 0,
    links: [
      { title: "Pricing", href: "/" },
      { title: "Uniswap V2", href: "/" },
      { title: "Uniswap V3", href: "/" },
    ]
  },
  {
    title: "Resources",
    id: 1,
    links: [
      { title: "Documentation", href: "/" },
      { title: "API Keys", href: "/" },
      { title: "Guides", href: "/" },
      { title: "Blogs", href: "/" },
    ]
  },
  {
    title: "Company",
    id: 3,
    links: [
      { title: "About", href: "/" },
      { title: "Careers", href: "/" },
      { title: "Events", href: "/" },
      { title: "Contact", href: "/" },
    ]
  },
];

function Footer() {
  return (
    <footer className="grid grid-cols-12 bg-mirage">
      <div className="row-1 col-[2/12] md:col-[4/10] pt-6 pb-6 flex flex-wrap justify-center lg:justify-between">
        <div className="hidden lg:flex flex-wrap justify-start content-center gap-3">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={50}
            height={50}
          />
          <p className="my-auto">
            Pulsar Analytics
          </p>
        </div>
        <ul className="flex flex-wrap justify-center content-center gap-6">
          <li>
            <Link href="/">
              <Image
                src="/socials/twitter.svg"
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href="/analytics">
              <Image
                src="/socials/discord.svg"
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <Image
                src="/socials/telegram.svg"
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href="/resources">
              <Image
                src="/socials/github.svg"
                alt="Logo"
                width={50}
                height={50}
              />
            </Link>
          </li>
        </ul>
      </div>

      <hr className="row-2 col-[2/12] md:col-[4/10]" />

      <div className="row-3 col-[2/12] md:col-[4/10] pt-6 pb-6 flex flex-wrap justify-between gap-6">
        {sections.map((section) => (
          <FooterLinks key={section.id} title={section.title} links={section.links} />
        ))}
      </div>

      <hr className="row-4 col-[2/12] md:col-[4/10]" />

      <div className="row-5 col-[2/12] md:col-[4/10] pt-6 pb-6 flex flex-wrap justify-between items-center">
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/" className="text-xs opacity-50 hover:opacity-100 transition-opacity">Terms of Service</Link>
          </li>
        </ul>

        <p className="text-xs opacity-50">Pulsar Analytics &copy; 2025</p>
      </div>
    </footer>
  );
}

export default Footer;