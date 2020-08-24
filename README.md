# TextGrid


## What is TextGrid?

**TextGrid** is a small personal project which aligns a set of given words in a crossword-style network.


## Why?

This project first started as **MyNavgrid** back in 2014, when I wanted to create a personal website showcasing my abilities, however I wanted to create something unique and unlike any other personal / portfolio sites across the web.


## How does it work?

Currently it requires the given words to have a direction (horizontal / vertical) and a starting point from where the words should be written. When a word is clicked, the text content related to it is displayed in the content container on the page:

```
// A sample entry in a list of word items
{
  id: "simple",
  contentHtml: "<p>simple content</p>",
  isHorizontal: true,
  start: {
    top: 0,
    left: 3
  }
}

// id = the text string
// contentHtml = the HTML that should be injected to the content container
// isHorizontal = should the text string be displayed horizontally or vertically
// start = from which "grid cell" should the text string be written
```

A couple dimensions are also required in order for the positioning of the `start`ing position and the following characters to be processed:

```
textGrid.cell.width = 25;
textGrid.cell.height = 35;
```

With the `cell` and `start` properties defined, the position of the words can be calculated. In the above example, the starting position will be `start.top * textGrid.cell.height (0 * 35 = 0)` pixels from the top and `start.left * textGrid.cell.width (3 * 25 = 75)` pixels from the left of the related container. The system then creates styles to structure the TextGrid on the page, with some required css styles already provided in a file.


## Any future plans?

A system I've wanted to add to this since the initial creation was to create some kind of algorithm that is able to intelligently put a given list of words together without the provision of any arguments or parameters, displaying a crossword-style networking of words dynamically.
