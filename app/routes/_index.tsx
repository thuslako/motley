import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Motley mix" }, { name: "description", content: "Tidal music powered playlist generator" }];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Motley</h1>
    </div>
  );
}
