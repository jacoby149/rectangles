# <img src="src/Rectangles.jpg" style="image-rendering:pixelated;" /> Rectangles.js Framework 



## Demo 1 :  <a href="rectangles/demos/rpc_browser_transpile">https://jacobhoffman.tk/rectangles/demos/rpc_browser_transpile</a>

(The following demo is a copy of the front end UI of <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">The PlainPad</a> project. All the code is in *App.js*) 

<br>



## Demo 2 :  <a href="rectangles/demos/plainpad_browser_transpile">https://jacobhoffman.tk/rectangles/demos/plainpad_browser_transpile</a>

(The following demo is a copy of the front end UI of <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">The PlainPad</a> project. All the code is in *App.js*) 

<br>



## Summary :

Rectangles is a front end design system that enforces *glitch-free*, *responsive* apps.

The Rectangles framework aims to decrease the number of ways to make the same layout in different ways by enforcing strict rules which rectangles objects follow.

<br>

## Ingredients :

Rectangles projects use Babel in browser transpiled react, so npm is not a requirement.

<br>

## Web Hosting Advice (Deployment):

React requires CORS. You can't just click *index.html* and view it locally to see the demo.

You need to host the site via http:// or https://. 

GitHub Pages can host Rectangles projects.

DNS proxying can prevent Rectangles apps from working, I've had some prior trouble with Cloud Flare

<br>

## Local Hosting Advice For New Web Developers :

If you are new to web development, I recommend installing python. 

To get started, download either of the Rectangles Demo Projects to your computer.

Open a terminal, navigate to the project folder, and run this command to host locally via http:// :

```
python -m http.server
```

Then, go to localhost:8000 in your browser to view the project. 

Use (Ctrl + Shift + R) to refresh the browser on code changes.

<br>

## Overview (The Rectangles Standard In 13 Steps) : 

1. Rectangles projects are written entirely within a React component called App.
2. All rectangles projects have an index.html. In the body there is an App component rendered into it.
3. All react components are loaded in at the bottom of the index.html file with the loadComp function.
4. App is comprised of rectangles.
5. The main rectangle (root rectangle) is a viewport sized Rectangle with className = "root".
6. The root rectangle is the only rectangle that has no free dimensions.
7. All non root rectangles have 1 free dimension that can be resized with the s={size} attribute.
8. All rectangles have a child float attribute that controls where children rectangles float. (t, l, b,or r)
9. If a rectangle has a parent with the t or b attribute, its width is the free dimension.
10. If a rectangle has a parent with the l or r attribute, its height is the free dimension.
11. Rectangles are defaulted with the t attribute if they don't have t, l, b or r.
12. Amongst sibling rectangles, one of them is allowed to be telescopic.
13. Telescopic rectangles automatically size themselves so that the sum of all sibling rectangles' free dimension sizes equals their parent's corresponding dimension.
14. Rectangles have a variety of formatting attributes , and also have sub classes (see below).

<br>

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

<br>

## Built-In Components

| Component       | Uses                                                         |
| --------------- | ------------------------------------------------------------ |
| **Content(C)**  | Rectangle sub class with easy to position internal content.  |
| **Input(T)**    | Content sub class that is a Minimalist text entry field.     |
| **Dataview(D)** | Content sub class that is a collapsible searchable sortable data table + data labels. Data entries can be viewed in Card format with search and sort functionality. |

| Content (C) Attribute             | Effect                                     |
| --------------------------------- | ------------------------------------------ |
| **ha** = {Left,Center,or Right}   | Horizontal Alignment in content rectangle. |
| **va** = {Top, Bottom, or Center} | Vertical alignment of content in rectangle |
| **p** = {tp rp bp lp}             | Change the padding                         |

