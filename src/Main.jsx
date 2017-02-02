import {UI, Button} from "UI";
import {StyleSet} from "Style";
import {styleRule} from "decorators/Style";


class MinesweeperStyleSet extends StyleSet {
    cellSize = "3em";

    @styleRule
    cell = {
        width: this.cellSize,
        height: this.cellSize,
        border: "1px solid",
    };
}


class MinesweeperCell extends Button {

    extraNodeAttributes(attr) {
        attr.addClass(MinesweeperStyleSet.getInstance().cell);
    }

    setOptions(options) {
        super.setOptions(options);
        this.isRevealed = options.isRevealed;
        this.isBomb = options.isBomb;
        this.neighbouringBombs = options.neighbouringBombs;
    }

    getFaIcon() {
        if (this.isBomb && this.isRevealed) {
            return "bomb";
        } else {
            return "";
        }
    }

    getLabel() {
        if (!this.isRevealed) {
            return "?";
        } else if (this.isBomb) {
            return "";
        } else if (this.neighbouringBombs == 0) {
            return "."
        } else {
            return this.neighbouringBombs.toString();
        }
    }

    reveal() {
        this.isRevealed = true;
        this.redraw();
    }
}

class SmileyButton extends Button {

    onMount() {
        this.addNodeListener("mousedown", () => {
            this.options.oldFaIcon = this.getFaIcon();
            this.setFaIcon("meh-o");
        });

        this.addNodeListener("mouseup", () => {
            this.setFaIcon(this.options.oldFaIcon);
            delete this.options.oldFaIcon;
        });
    }

}

class MinesweeperGame extends UI.Element {
    constructor(options) {
        super(options);
        this.lines = options.lines;
        this.columns = options.columns;

        this.matrixState = new Array(this.lines);
        for (let i = 0; i < this.lines; i += 1) {
            this.matrixState[i] = new Array(this.columns);
        }

        this.generateNewState();
    }

    render() {
        //group them into rows
        let cellRows = [];
        for (let i = 0; i < this.lines; i += 1) {
            let cellRow = [];
            for (let j = 0; j < this.columns; j += 1) {
                cellRow.push(<MinesweeperCell 
                    ref={"matrix-" + i + "-" + j}
                    isBomb={this.matrixState[i][j].isBomb}
                    isRevealed={this.matrixState[i][j].isRevealed}
                    neighbouringBombs={this.matrixState[i][j].neighbouringBombs}
                    onClick={() => this.clickedOn(i, j)}
                    />);
            }
            cellRows.push(<div> {cellRow} </div>);
        }
        return [
            cellRows,
            <SmileyButton faIcon="smile-o" 
                ref="smileyButton"/>
        ];
    }

    pointIsInMatrix(i, j) {
        return i >= 0 && i < this.lines &&
               j >= 0 && j < this.columns;
    }

    cellAt(i, j) {
        return this["matrix-" + i + "-" + j];
    }

    getNeighbours(i, j) {
        let ret = [];

        const deltaI = [-1, 0, 1];
        const deltaJ = [-1, 0, 1];

        for (const di of deltaI) {
            for (const dj of deltaJ) {
                const newI = i + di;
                const newJ = j + dj;

                // Do not include the current cell
                if ((newI != i || newJ != j) && this.pointIsInMatrix(newI, newJ)) {
                    ret.push([newI, newJ])
                }
            }
        }

        return ret;
    }

    forEachNeighbourOf(i, j, fun) {
        for (const [neighbourX, neighbourY] of this.getNeighbours(i, j)) {
            fun(neighbourX, neighbourY);
        }
    }

    generateNewState() {
        const forEachCellState = (fun) => {
            for (let i = 0; i < this.lines; i += 1) {
                for (let j = 0; j < this.columns; j += 1) {
                    fun(i, j);
                }
            }
        };

        const getNeighbouringBombs = (i, j) => {
            let ret = 0;
            this.forEachNeighbourOf(i, j, (nx, ny) => {
                ret += this.matrixState[nx][ny].isBomb;
            });
            return ret;
        };

        forEachCellState((i, j) => {
            this.matrixState[i][j] = {
                isBomb: Math.random() < 0.1,
                isRevealed: false
            }
        });

        forEachCellState((i, j) => {
            this.matrixState[i][j].neighbouringBombs = getNeighbouringBombs(i, j);
        });
    }

    newGame() {
        this.generateNewState();
        this.redraw();
    }

    reveal(i, j) {
        if (this.matrixState[i][j].isRevealed) {
            return;
        }

        this.matrixState[i][j].isRevealed = true;
        this.cellAt(i, j).reveal();

        if (this.matrixState[i][j].neighbouringBombs === 0) {
            this.forEachNeighbourOf(i, j, (nx, ny) => this.reveal(nx, ny));
        }
    }

    clickedOn(i, j) {
        this.reveal(i, j);
        if (this.matrixState[i][j].isBomb) {
            this.onBombClicked();
        }
    }

    onBombClicked() {
        this.smileyButton.setFaIcon("frown-o");
        for (let i = 0; i < this.lines; i += 1) {
            for (let j = 0; j < this.columns; j += 1) {
                this.reveal(i, j);
            }
        }
    }
}


class DemoMainElement extends UI.Element {

    render() {
        return [
            <h1> Welcome to this Minesweeper demo </h1>,

            <Button label="New game" onClick = {() => this.game.newGame()}/>,

            <MinesweeperGame ref="game" lines={10} columns={10} />
        ];
    }

}

class Widget extends UI.Element {
    render() {
        return <Button ref="theButton" 
            onClick={() => this.onTheButtonClicked()}> Click me! </Button>;
    }
    onTheButtonClicked() {
        console.log("The button was clicked!");
    }
}


let demoMainElement = DemoMainElement.create(document.body);
