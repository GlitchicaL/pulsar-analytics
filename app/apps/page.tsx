import Card from "@/app/components/Card";
import apps from "@/app/apps.json";

export default function Home() {
  return (
    <div className="grid grid-cols-12 place-content-between font-[family-name:var(--font-mukta)]">
      <div className="section flex-col items-center pb-12">
        <h1>Select an App</h1>
        <p>
          See an app missing?
          {" "}
          <a href="/feedback">Contact Us!</a>
        </p>
      </div>

      <div className="section pt-0">
        <div className="flex items-center flex-wrap gap-12 sm:flex-nowrap">
          {apps.map((app, index) => (
            <Card key={index} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
}
