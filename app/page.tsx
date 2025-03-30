import Image from "next/image";

const apps = [
  {
    name: "Uniswap V3",
    image: "./projects/uniswap.svg",
    released: true,
  },
  {
    name: "Aave",
    image: "./projects/aave.svg",
    released: false,
  },
  {
    name: "Polygon",
    image: "./projects/polygon.svg",
    released: false,
  },
]

export default function Home() {
  return (
    <div className="grid grid-cols-12 place-content-between min-h-screen font-[family-name:var(--font-mukta)]">
      <div className="col-[2/12] place-content-center flex items-center flex-wrap gap-6 py-24 lg:gap-24">
        <div className="flex items-center gap-12">
          <Image src={"./logo.svg"} alt="Pulsar Analytics logo" width={125} height={125} />
          <div>
            <h1 className="text-2xl font-anta py-2 md:text-4xl">Pulsar Analytics</h1>
            <p className="text-lg md:text-xl">Analytics for your favorite defi applications!</p>
          </div>
        </div>

        <button className="bg-blue py-4 px-6 rounded-md text-lg font-anta cursor-pointer md:text-xl md:py-4 md:px-12">
          Enter App
        </button>
      </div>

      <div className="col-[2/12] place-content-center flex flex-col gap-12 py-24">
        <div className="place-self-center text-center">
          <h2 className="text-3xl font-anta py-2">Data for Everyone</h2>
          <p className="text-lg">Whether you are a trader, developer, or data analyst.</p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-12 sm:flex-nowrap">
          {apps.map((app, index) => (
            <div key={index} className="rounded-lg cursor-pointer relative">
              {!app.released && (
                <div className="bg-red absolute top-0 w-full rounded-t-lg text-center py-0.5 text-xs md:text-base">
                  Coming Soon!
                </div>
              )}
              <Image src={app.image} alt={`${app.name} logo`} width={200} height={200} className="rounded-t-lg w-[100px] md:w-[200px]" />
              <p className="bg-[#050E23] p-2 text-center rounded-b-lg">{app.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="col-[1/13] place-content-center flex flex-wrap bg-[#050E23] gap-6 py-4 lg:gap-48">
        <div className="place-self-center">
          <h3 className="text-xl font-anta py-2">Stay Up To Date</h3>
          <p className="text-md">Sign up for our newsletter:</p>
        </div>

        <form className="flex justify-center items-center">
          <input type="email" className="bg-black-pearl p-2 rounded-l-lg font-anta lg:p-4" />
          <input type="submit" value="Subscribe" className="bg-white text-black-pearl p-2 rounded-lg cursor-pointer font-anta text-sm lg:p-4 lg:text-base" />
        </form>
      </div>
    </div>
  );
}
