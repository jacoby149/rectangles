# Rectangles.css — No NPM React Framework 

**Rectangles.js comes with minimal MVP.css styles.**



### Rectangles.js is a no NPM React component. 

(See this link to learn more about no NPM React.)
https://reactjs.org/docs/add-react-to-a-website.html



### Overview (The Rectangles Standard) : 

The index.html body has a viewport sized Rectangle rendered into it called App.

The website never scrolls, rather the rectangles inside of it scroll. 



#### Attributes special to the Rectangle Component. 

| Attributes      | Effect                                                       |
| :-------------- | ------------------------------------------------------------ |
| **t**           | Children float top in their parent.                          |
| **l**           | Children float left in their parent.                         |
| **r**           | Children float right in their parent.                        |
| **b**           | Children float bottom in their parent.                       |
| **c** = {bool}  | Collapse the rectangle if bool is *true*, otherwise show.    |
| **s** = {size}  | Size of the rectangles free dimension (Any valid css size)   |
| **ms** = {size} | Minimum size of the rectangles free dimension (Any valid css size) |
| **ns**          | No Scroll                                                    |
| **tel**         | Telescopic Rectangle that accommodates siblings to meet the size of the parent. |



# Example :

```jsx

/* Collapsable */
const [dash,setDash] = React.useState(true);
function toggleDash(){setDash(!dash)};

return {
    <R style={width:100%vw;height:100%vh;}> {/* App */}
      <R l s={50px}> {/* Top Pane */}
        <Logo /> {/* Logo */}
        <Collapse onClick = toggleDash />
        <R r s={100%}> {/* Top menu */}
          <Item1/>
          <Item2/>
          ...
        </R>
      </R>  

      <R h s={100%}> {/* Content Viewer */}

        <R t c={dash} s={300px}> {/*Dashboard Menu*/}
          <R t s={100px}> {/*Search Bar Space*/}
            <Bar1/>
            <Bar2/>
          </R>

          <R t v s={500px}> {/* Side Menu */}
            <ItemX/>
            <ItemY/>
            ...
          </R>

          <R t s={100%}> {/* Bottom Things */}
            <Bottomstuff1 />
            <Bottomstuff2 />
          </R>
        </R> {/* Dashboard Menu End */}

        <R t s={100%}>{/* Main app area */}
        ... (Fancy Inputs, Graphs, Whatever is the main app. ALL MADE OF RECTANGLES)
        </R>

      </R> {/* Content Viewer Close */}

    </R> {/* App close */}
}
```



<u>Potential Rectangle Subclasses</u>
Button Rectangle - Rectangle with custom hover color and a place for text/image.
Table Rectangle - Rectangle with a table in it, that can be converted into card stack format for mobile.
Text Input Rectangle - Rectangle that can have input text typed into it, minimalist text entry.