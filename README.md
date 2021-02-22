# Rectangles.js Framework 



#### Demo : 

<a href="https://plainpaddemo.netlify.app">https://plainpaddemo.netlify.app</a>

(The following demo is a copy of the front end UI of <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">this</a> project.)



#### Summary :

Rectangles is a strict design system that enforces *glitch-free*, *responsive* apps.

Rectangles layouts are *formulaic*. For two people to have identical layouts, they would need identical code.

Rectangles is built on *no JSX* React, making it easy for anyone to spin up immediately without NPM. 

(See this link to learn more about *no JSX* React.)
https://reactjs.org/docs/add-react-to-a-website.html



#### Hosting Advice :

React requires CORS, so you can't just click *index.html* and view it locally to see the demo.

You need to host the site via http:// or https://. 

GitHub Pages has trouble hosting Rectangles projects ( or any *no JSX* project) . Instead, use <a href = "https://www.netlify.com/">Netlify</a>.



#### Local Development Advice

To run a rectangles project locally, I recommend installing <a href="https://www.php.net/manual/en/install.php">PHP</a>. 

Open a terminal, navigate to the project folder, and run this command to host locally via http:// :

```
php -S localhost:8000
```

Then, go to localhost:8000 in your browser to view the project.



#### Overview (The Rectangles Standard In 12 Steps) : 

1. The index.html body has an <App/> component rendered into it. 
2. <App/> is comprised of rectangles.
3. The main rectangle (root rectangle) is a viewport sized Rectangle with className = "root".
4. The root rectangle is the only rectangle that has no free dimensions.
5. All non root rectangles have 1 free dimension that can be resized with the s={size} attribute.
6. All rectangles have a child float attribute that controls where children rectangles float. (t, l, b,or r)
7. If a rectangle has a parent with the t or b attribute, its width is the free dimension.
8. If a rectangle has a parent with the l or r attribute, its height is the free dimension.
9. Rectangles are defaulted with the t attribute if they don't have t, l, b or r.
10.  Amongst sibling rectangles, one of them is allowed to be telescopic.
11. Telescopic rectangles automatically size themselves so that the sum of all sibling rectangles' free dimension sizes equals their parent's corresponding dimension.
12. Rectangles have a variety of formatting attributes , and also have sub classes (see below).



#### Attributes special to the Rectangle(R) Component. 

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
| **h**          | Rectangle changes color on hover.                            |
| **c** = {bool} | Collapse the rectangle if bool hook is *true*, otherwise show. |
| **s** = {size} | Size of the rectangles free dimension. (Any valid css size format) |
| **ns**         | Prevent scrolling for the given rectangle.                   |
| **tel**        | Telescopic rectangles accommodate siblings to meet the full size of the parent. |



#### Helpful Additional Built-In Components

| Component         | Uses                                                         |
| ----------------- | ------------------------------------------------------------ |
| **Content(C)**    | Rectangle sub class with easy to position internal content.  |
| **Input(I)**      | Content sub class that is a Minimalist text entry field.     |
| **Table/Card(T)** | Content sub class that is a collapsible searchable sortable data table + data labels. Data entries can be viewed in Card format with search and sort functionality. |



#### Example :

See the file : *DemoApp.js*