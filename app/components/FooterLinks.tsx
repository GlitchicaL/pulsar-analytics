import Link from "next/link";

interface FooterLinksProps {
  title: string,
  links: {
    href: string,
    title: string,
  }[],
}

function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <p className="text-lg font-medium pb-2">{title}</p>
      <ul className="">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-sm font-thin">{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;