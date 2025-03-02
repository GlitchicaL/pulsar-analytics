import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="grid grid-cols-12 pt-6">
      <div className="col-[2/4] flex flex-wrap justify-start content-center gap-6">
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

      <ul className="col-[8/12] flex flex-wrap justify-end content-center gap-12">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/analytics">Analytics</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;