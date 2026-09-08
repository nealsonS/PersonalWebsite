import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-cols-3 grid-rows-3 bg-white">
      <div className="grid-cols-3 grid-rows-1 flex justify-between" id="header">header</div>
        <div>top1</div>
        <div>top2</div>
        <div>top3</div>
        <div>top4</div>
      
      <div className="grid-cols-3 grid-rows-2">
        <p className="font-sans tracking-wide">NEALSON'S WEBSITE</p>
      </div>
    </div>
  );
}
