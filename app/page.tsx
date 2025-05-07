import Image from "next/image";

import Card from "@/app/components/Card";
import apps from "@/app/apps.json";

export default function Home() {
  return (
    <div className="grid grid-cols-12 place-content-between font-[family-name:var(--font-mukta)]">
      <div className="section items-center flex-col flex-wrap sm:flex-row lg:gap-24">
        <div className="flex items-center gap-12">
          <Image src={"./logo.svg"} alt="Pulsar Analytics logo" width={125} height={125} className="hidden sm:block" />
          <div className="text-center sm:text-left">
            <h1>Pulsar Analytics</h1>
            <p className="text-lg md:text-xl">Analytics for your favorite defi applications!</p>
          </div>
        </div>

        <a href="/apps" className="button button-lg">
          Enter App
        </a>
      </div>

      <div className="section flex-col">
        <div className="place-self-center text-center">
          <h2>Data for Everyone</h2>
          <p className="text-lg">Whether you are a trader, developer, or data analyst.</p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-12 sm:flex-nowrap">
          {apps.map((app, index) => (
            <Card key={index} app={app} />
          ))}
        </div>
      </div>

      <div className="col-[1/13] place-content-center flex flex-wrap bg-black-pearl-light gap-6 py-4 px-2 sm:gap-12 md:gap-24 lg:gap-48">
        <div className="place-self-center">
          <h3>Stay Up To Date</h3>
          <p className="text-md">Sign up for our newsletter:</p>
        </div>

        <form className="flex flex-wrap justify-center items-center">
          <input type="email" placeholder="Email" className="bg-black-pearl py-2 px-4 rounded-l-lg font-anta" data-lpignore="true" autoComplete="off" />
          <input type="submit" value="Subscribe" className="button button-sm rounded-l-none bg-white hover:bg-grass text-black-pearl" />
        </form>
      </div>
    </div>
  );
}
