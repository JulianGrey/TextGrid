import "./styles.scss";

interface ICell {
  width: number;
  height: number;
}

interface IStartPosition {
  top: number;
  left: number;
}

interface IWord {
  id: string;
  contentHtml: string;
  isHorizontal: boolean;
  start: IStartPosition;
}

class TextGrid {
  cell: ICell = {
    width: 0,
    height: 0
  };
  wordList: Array<IWord> = [];

  elementClicked(element): void {
    const contentContainer = document.getElementById("text-content");
    const elClassName: string = element.target.className.split(" ")[0].split("-")[0];
    const word: IWord = this.wordList.filter(word => word.id.toLowerCase() === elClassName)[0];

    if (document.querySelector(".grid-link.selected")) {
      document.querySelector(".grid-link.selected").classList.remove("selected");
    }
    document.querySelector(`.${ elClassName }`).classList.add("selected");
    contentContainer.innerHTML = word.contentHtml;
  }

  createTextGrid(): void {
    let elementString: string = "";
    let styleString: string = "";

    this.wordList.forEach((word: IWord) => {
      const prefix: string = word.isHorizontal ? "h" : "v";

      elementString += `<a href="javascript:;" class="${ word.id } grid-link ${ prefix }Word">`;
      styleString += `.${ word.id } { top: ${ this.cell.height * word.start.top }px; left: ${ this.cell.width * word.start.left }px; }`

      const textArray: Array<string> = word.id.split('');
      textArray.forEach((character: string, index: number) => {
        elementString += `<span class="${ word.id }-char char${ index + 1 }">${ character.toUpperCase() }</span>`;
      });
      elementString += "</a>";
    });

    styleString += `.text-grid-wrapper__container__grid .grid-link span { width: ${ this.cell.width }px; height: ${ this.cell.height }px; }; }`;

    document.getElementById("text-grid").innerHTML += elementString;
    document.getElementsByTagName("style")[0].innerHTML += styleString;
    document.querySelector("body").addEventListener("click", this.elementClicked.bind(this), false);
  }
}

const textGrid = new TextGrid;
textGrid.cell.width = 25;
textGrid.cell.height = 35;
textGrid.wordList = [
  {
    id: "simple",
    contentHtml: "<p>simple content</p>",
    isHorizontal: true,
    start: {
      top: 0,
      left: 3
    }
  },
  {
    id: "portfolio",
    contentHtml: "<p>portfolio content</p>",
    isHorizontal: true,
    start: {
      top: 2,
      left: 1
    }
  },
  {
    id: "responsive",
    contentHtml: "<p>responsive content</p>",
    isHorizontal: true,
    start: {
      top: 4,
      left: 4
    }
  },
  {
    id: "creative",
    contentHtml: "<p>creative content</p>",
    isHorizontal: true,
    start: {
      top: 6,
      left: 4
    }
  },
  {
    id: "about",
    contentHtml: "<p>about content</p>",
    isHorizontal: true,
    start: {
      top: 7,
      left: 0
    }
  },
  {
    id: "interactive",
    contentHtml: "<p>interactive content</p>",
    isHorizontal: false,
    start: {
      top: 0,
      left: 4
    }
  },
  {
    id: "contact",
    contentHtml: "<p>contact content</p>",
    isHorizontal: false,
    start: {
      top: 3,
      left: 0
    }
  }
];
textGrid.createTextGrid();
