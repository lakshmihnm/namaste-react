import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React Element</span>;

// React element
// createElement - creates an object->when we render this object on to the DOM then it becomes a HTML element
// const Title = () => 
//   React.createElement("div", { id: "title", className:"title" }, [
//     React.createElement('h1', {id: "child1", key:"1"},"H1 => React"),
//     React.createElement('h2', {id: "child2", key:"2"}, "H2 => React"),
//     React.createElement("h3", {id: "child3", key:"3"}, "H3 => React")
//   ]);

// JSX - it's HTML like syntax but it's not html inside react
// const Jsxheading =() => <h1>{elem}Create Element using JSX</h1>;

// const NestedHeadings = () => <div className="title"><h1 key="1">JSX h1 </h1><h2 key="2">JSX h2 </h2><h3 key="3">JSX h3 </h3></div>

// React components -
// class based component - old way of writing code - js classes
// functional component - new - js functions - which return some jsx code
// React functional component
// JSX- handles all cross scripting attacks
// const HeadingComponent = () => (
//   <div>
//     <Title />
//     {/* component composition */}
//     <NestedHeadings /> 
//     <h1>React functional component</h1>
//     <h2>React functional component</h2>
//     <h3>React functional component</h3>
//   </div>
// );

const HeaderComponent = () => {
  return (
    <div className="container">
      <div className="logo">
        📓
        <input type="text" placeholder="Search" />
      </div>
      <div className="user">
        ☺︎
      </div>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
