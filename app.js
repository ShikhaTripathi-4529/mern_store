/**
 * <div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div>
*/



const parent = React.createElement('div',{
    id: "parent"
},[React.createElement("div",{ id: "child"},[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")
]),React.createElement("div",{ id: "child" },[
    React.createElement("h1",{},"I'm h1 tag"),
    React.createElement("h2",{},"I'm h2 tag")])
])

// code get repeated, so JSX comes into picture

// const heading = React.createElement('h1',{
//     id: "heading",
//     xyz: "abc"
// },'hello world from React!');

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);