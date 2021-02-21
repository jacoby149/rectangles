# Rectangles Framework 



### * (For web dev beginners) CORS is required:

React requires CORS, so you cant just click *index.html* to see the demo.

file:// blocks cross origin requests, so you have to properly https:// host the folder.

To try the demo, install PHP or another https server.

**PHP instructions**

To install PHP on mac easily, run

```
brew install php
```

To run the server, run this command in the repository folder :

```
php -S localhost:8000
```

Now visit localhost:8000 in your browser.



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



<u>Helpful Built-In Additional Components</u>

| Component      | Uses                                                         |
| -------------- | ------------------------------------------------------------ |
| **Button**     | Custom Hover, on click functionality, text/images/icons      |
| **Logo**       | Easy to position Iconography.                                |
| **Text**       | Easy to position and format text.                            |
| **Input**      | Minimalist text entry field.                                 |
| **Table/Card** | Collapsible searchable sortable data table + data labels. Data entries can be viewed in Card format on mobile with search and sort functionality also. |
| **Rectangles** | Rectangles are just div elements, so place whatever content you would like in them :) |