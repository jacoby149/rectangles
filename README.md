# <img src="src/Rectangles.jpg" style="image-rendering:pixelated;" /> Rectangles.js Framework 



## Node Package

**rectangles-npm** : https://www.npmjs.com/package/rectangles-npm



## Demo 1 :

### <a href="https://jacobhoffman.tk/rectangles/demos/rpc_static">https://jacobhoffman.tk/rectangles/demos/rpc_static</a>

(The following demo is inpired by the UI of <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">The PlainPad</a> project) 

<br>

## Demo 2 :  

### <a href="https://jacobhoffman.tk/rectangles/demos/plainpad_static">https://jacobhoffman.tk/rectangles/demos/plainpad_static</a>

(The following demo is a copy of the UI of <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">The PlainPad</a> project) 

<br>

## Demo 3 :  

### <a href="https://jacobhoffman.tk/rectangles/demos/plainpad_npm">https://jacobhoffman.tk/rectangles/demos/plainpad_npm</a>

(The following demo is a copy of the UI of <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">The PlainPad</a> project) 

<br>

## Summary :

Rectangles is a system for designing responsive layouts for front ends. it enforces *glitch-free*, *responsive* apps.

The Rectangles framework aims to decrease the number of ways to make the same layout in by enforcing strict constraints / design rules. 

For two people to make the same front end layout in rectangles, it is likely that they wrote the same exact code.

<br>

## Ingredients :

Rectangles provides the ingredients to run apps as Babel in browser transpiled react, so npm is not a requirement.

<br>

## Local Hosting Advice For New Developers :

If you are new to web development, I recommend installing python. 

To get started, navigate to the "plainpad_static" demo

Run the static webserver server built inside of python to host locally via http:// :

```bash
cd demos/plainpad_browser_transpile
python -m http.server
```

Then, go to localhost:8000 in your browser to view the project. 

Use (Ctrl + Shift + R) to refresh the browser on code changes.



## Static Rectangles vs. npm built Rectangles 

**npm built (via. npx create-react-app) [demos/plainpad-npm]** : 

1. JSX components are imported the standard way as is done in a react project.

*VS.*

**static [demos/plainpad-static]** : 

1. Rectangles.css is attached to the index.html file as a link tag.
2. loadComp.js is attached to the index.html as a script tag. 
3. JSX components are loaded in at the bottom of the index.html file with the loadComp function.

 

## Explaining Rectangles

#### The root rectangle

The main rectangle (root rectangle) is a viewport sized Rectangle with the root attribute. There should be only one root rectangle, The root rectangle is the only rectangle that has no free dimensions.

#### relationships of rectangles

rectangles can have 1 parent [meaning they are the child of that parent] 

rectangles can have multiple siblings.

rectangles can have at most one telescopic sibling.



## Example [dummy demo]

https://jacobhoffman.tk/rectangles/demos/dummy_static

```jsx
/* index.js */
import { pass, R, C, T, startRectangles } from 'Rectangles.js'
function App() {
    return (
        <R bb bt bl br root t theme={"dark"}>
            {/*root*/}
            <R bb l s={"70px"} theme={"brick"}>
                {/* A */}
                <R br s={"40px"}>
                <b> B </b>
                </R>
                <R br tel>
                <b> C </b>
                </R> 
                <R s={"60px"}>
                <b> D </b>
                </R>
            </R>
            <R>
            <b> E </b>
            </R> 
        </R>
    )
}
ReactDOM.render(<R><App /></R>, document.getElementById("root"));
startRectangles(document.getElementById("root")); // rectangles must be started after the render!
```

##### root

* In the above example, A and E are children of the root rectangle. 

* A and E are siblings.

##### A

* in the above example, B, C, and D are children of A.

* B, C, and D are siblings.

* C is a telescopic sibling.

#### **parent rectangle influence on children**

1. child rectangles automatically **inherits the theme** of the parent rectangle.
2. child rectangles float in the direction of their parent's float attribute {t,l,b or r}
3. children inherit the size of the parent rectangles locking dimension.
4. if the float is **t** or **b**, the locking dimension is **width**
5. if the float is **l** or **r**, the locking dimension is **height**
6. the telescopic sibling fills the space in the free dimension that its other siblings fail to occupy.

##### root

* in the above example root has a float of **t**, which means its locking dimension is **width**.

* A and E inherit width from the root rectangle, and **float to the top**.

* A and E inherit the **dark** theme from root.

##### A

* in the above example A has a float of **l**, which means its locking dimension is **height**.
* in the above example B, C and D inherit the height of A which is {"70px"}
* B, C, and D inherit the **dark** theme from A.

##### C

* C is the telescopic sibling of B and D.

* since the locking dimension is height, the free dimension is width

* C stretches to fills the width of parent A that B and D fail to occupy

  

## Attributes special to the Rectangle(R) Component. 

| Attributes             | Effect                                                       |
| :--------------------- | ------------------------------------------------------------ |
| **root**               | The root attribute is given to the Rectangle that everything is nested inside of within in the App component. The root rectangle always fills the whole viewport. |
| **t**                  | Children float top in their parent.                          |
| **l**                  | Children float left in their parent.                         |
| **r**                  | Children float right in their parent.                        |
| **b**                  | Children float bottom in their parent.                       |
| **bt**                 | Border top.                                                  |
| **bb**                 | Border bottom.                                               |
| **br**                 | Border right.                                                |
| **bl**                 | Border left.                                                 |
| **h**                  | Rectangle changes color on hover.                            |
| **c** = {bool}         | Collapse the rectangle if bool hook is *true*, otherwise show. |
| **s** = {size}         | Size of the rectangles free dimension. (Any valid css size format) |
| **ns**                 | Prevent scrolling for the given rectangle.                   |
| **mc**                 | Collapse on mobile.                                          |
| **msc**                | Collapse on landscape mobile.                                |
| **nottel**             | set to rectangles with a set size. (default)                 |
| **tel**                | Telescopic rectangles accommodate siblings to meet the full size of the parent. |
| **theme** = {cssClass} | A css class assigned to the given rectangle and inherited by all children. |



## Built-In Components

| Component      | Uses                                                        |
| -------------- | ----------------------------------------------------------- |
| **Content(C)** | Rectangle sub class with easy to position internal content. |
| **Input(T)**   | Content sub class that is a Minimalist text entry field.    |

| Content (C) Attributes            | Effect                                     |
| --------------------------------- | ------------------------------------------ |
| **ha** = {Left,Center,or Right}   | Horizontal Alignment in content rectangle. |
| **va** = {Top, Bottom, or Center} | Vertical alignment of content in rectangle |
| **p** = {tp rp bp lp}             | Change the padding                         |

