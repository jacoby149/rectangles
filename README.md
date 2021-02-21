# Rectangles Framework 



### Rectangles.js is a no NPM React component. 

(See this link to learn more about no NPM React.)
https://reactjs.org/docs/add-react-to-a-website.html



### Overview (The Rectangles Standard) : 

The index.html body has a viewport sized Rectangle rendered into it called App.

The website never scrolls, rather the rectangles inside of it scroll. 



#### Attributes special to the Rectangle Component. 

| Attributes     | Effect                                                       |
| :------------- | ------------------------------------------------------------ |
| **t**          | Children float top in their parent.                          |
| **l**          | Children float left in their parent.                         |
| **r**          | Children float right in their parent.                        |
| **b**          | Children float bottom in their parent.                       |
| **bt**         | Border top.                                                  |
| **bb**         | Border bottom.                                               |
| **br**         | Border right.                                                |
| **bl**         | Border left.                                                 |
| **c** = {bool} | Collapse the rectangle if bool hook is *true*, otherwise show. |
| **s** = {size} | Size of the rectangles free dimension. (Any valid css size format) |
| **ns**         | Prevent scrolling for the given rectangle.                   |
| **tel**        | Telescopic rectangles accommodate siblings to meet the full size of the parent. |



# Example :

```jsx

/* this is pseudo codey, a real example is coming soon. */
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
**Button**  - Rectangle with custom hover color,on click, and a place for text/image.
**Table** - Rectangle with a table in it, that can be converted into card stack format for mobile.
**Text** - A rectangle that can have input text typed into it, minimalist text entry.