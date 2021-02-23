# <img src="rectangles/Rectangles.jpg" style="image-rendering:pixelated;"></img> Rectangles.js Framework 



## Demo :  <a href="https://plainpaddemo.netlify.app">https://plainpaddemo.netlify.app</a>

(The following demo is a copy of the front end UI of <a href = "https://alextselegidis.com/try/plainpad-standalone/#/notes">this</a> project. All the code is in *App.js*) 



## Summary :

Rectangles is a front end design system that enforces *glitch-free*, *responsive* apps.

Rectangles layouts are *formulaic*, meaning identical layouts imply Identical code.



## Ingredients :

Rectangles is built on *no JSX* React, so npm is not a requirement.

(See this link to learn more about *no JSX* React.)
https://reactjs.org/docs/add-react-to-a-website.html



## Web Hosting Advice (Deployment):

React requires CORS. You can't just click *index.html* and view it locally to see the demo.

You need to host the site via http:// or https://. 

GitHub Pages has trouble hosting Rectangles projects ( Or any *no JSX* project) . Use <a href = "https://www.netlify.com/">Netlify</a>.



## Local Hosting Advice For New Web Developers :

If you are new to web development, I recommend installing <a href="https://www.php.net/manual/en/install.php">PHP</a>. 

I don't write apps in PHP. I use PHP's server utility to locally host my static web projects.

Open a terminal, navigate to your project folder, and run this command to host locally via http:// :

```
php -S localhost:8000
```

Then, go to localhost:8000 in your browser to view the project. 

Use (Ctrl + Shift + R) to refresh the browser on code changes.



## Overview (The Rectangles Standard In 13 Steps) : 

1. Rectangles projects are written entirely in an App.js file within a React component called App.
2. The index.html body has an App component rendered into it.
3. App is comprised of rectangles.
4. The main rectangle (root rectangle) is a viewport sized Rectangle with className = "root".
5. The root rectangle is the only rectangle that has no free dimensions.
6. All non root rectangles have 1 free dimension that can be resized with the s={size} attribute.
7. All rectangles have a child float attribute that controls where children rectangles float. (t, l, b,or r)
8. If a rectangle has a parent with the t or b attribute, its width is the free dimension.
9. If a rectangle has a parent with the l or r attribute, its height is the free dimension.
10. Rectangles are defaulted with the t attribute if they don't have t, l, b or r.
11.  Amongst sibling rectangles, one of them is allowed to be telescopic.
12. Telescopic rectangles automatically size themselves so that the sum of all sibling rectangles' free dimension sizes equals their parent's corresponding dimension.
13. Rectangles have a variety of formatting attributes , and also have sub classes (see below).



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
| **mc**                 | Collapse on mobile                                           |
| **msc**                | Don't show on a sideways phone.                              |
| **tel**                | Telescopic rectangles accommodate siblings to meet the full size of the parent. |
| **theme** = {cssClass} | A css class assigned to the given rectangle and inherited by all children. |



## Built-In Components

| Component         | Uses                                                         |
| ----------------- | ------------------------------------------------------------ |
| **Content(C)**    | Rectangle sub class with easy to position internal content.  |
| **Input(I)**      | Content sub class that is a Minimalist text entry field.     |
| **Table/Card(T)** | Content sub class that is a collapsible searchable sortable data table + data labels. Data entries can be viewed in Card format with search and sort functionality. |


