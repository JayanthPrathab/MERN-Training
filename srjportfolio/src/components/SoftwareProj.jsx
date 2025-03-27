import InfiniteMenu from "./Infinitemenu";
const SoftwareProj=()=>{
    const items = [
        {
          image: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://portfoliobuilder-iota.vercel.app/",
          title: "BlinkFolio",
          description: "An ineractive UI that generates instant portfolios instantly with the user data, saving their precious time",
        },
        {
          image: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "https://google.com/",
          title: "My portfolio",
          description: "An Attractive web page that best describes me",
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
    return(
        <div className="main1">
            Software Projects
            <div style={{ height: "600px", position: "relative" }}>
                <InfiniteMenu items={items} />
            </div>
        </div>
    );
}
export default SoftwareProj