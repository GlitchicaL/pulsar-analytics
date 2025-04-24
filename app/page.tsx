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
    <div className="grid grid-cols-12 place-content-between font-[family-name:var(--font-mukta)]">
      <div className="section items-center flex-col flex-wrap sm:flex-row lg:gap-24">
        <div className="flex items-center gap-12">
          <Image src={"./logo.svg"} alt="Pulsar Analytics logo" width={125} height={125} className="hidden sm:block" />
          <div className="text-center sm:text-left">
            <h1>Pulsar Analytics</h1>
            <p className="text-lg md:text-xl">Analytics for your favorite defi applications!</p>
          </div>
        </div>

        <button className="button button-lg">
          Enter App
        </button>
      </div>

      <div className="section flex-col">
        <div className="place-self-center text-center">
          <h2>Data for Everyone</h2>
          <p className="text-lg">Whether you are a trader, developer, or data analyst.</p>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-12 sm:flex-nowrap">
          {apps.map((app, index) => (
            <div key={index} className="card">
              {!app.released && (
                <div className="card-disclaimer">
                  Coming Soon!
                </div>
              )}
              <Image src={app.image} alt={`${app.name} logo`} width={200} height={200} className="card-image" />
              <p className="card-text">{app.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="col-[1/13] place-content-center flex flex-wrap bg-black-pearl-light gap-6 py-4 px-2 sm:gap-12 md:gap-24 lg:gap-48">
        <div className="place-self-center">
          <h3>Stay Up To Date</h3>
          <p className="text-md">Sign up for our newsletter:</p>
        </div>

        <form className="flex justify-center items-center">
          <input type="email" placeholder="Email" className="bg-black-pearl py-2 px-4 rounded-l-lg font-anta" data-lpignore="true" autoComplete="off" />
          <input type="submit" value="Subscribe" className="button button-sm bg-white hover:bg-grass text-black-pearl" />
        </form>
      </div>
    </div>
  );
}
