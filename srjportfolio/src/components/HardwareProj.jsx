import "../css/hardware.css";
import InfiniteMenu from "./Infinitemenu";
const HardwareProj = () => {
  const items = [
    {
      image: "https://images.unsplash.com/photo-1597006354775-2955b15ec026?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://google.com/",
      title: "SheShield",
      description: "AI powered support device(bracelet) that saves women at difficult times using the hardware and trained ML model",
    },
    {
      image: "https://images.unsplash.com/photo-1737311957107-4691c75e766b?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "https://google.com/",
      title: "SmartBin",
      description: "A smart assistant that automates waste disposal at right times to make a clean society",
    },
    {
      image: "https://picsum.photos/500/500?grayscale",
      link: "https://google.com/",
      title: "Item 3",
      description: "This is pretty cool, right?",
    },
    {
      image: "https://picsum.photos/600/600?grayscale",
      link: "https://google.com/",
      title: "Item 4",
      description: "This is pretty cool, right?",
    },
  ];
  return (
    <div className="main1">
      Hardware Projects
      <div style={{ height: "600px", position: "relative" }}>
        <InfiniteMenu items={items} />
      </div>
    </div>
  );
};
export default HardwareProj;
