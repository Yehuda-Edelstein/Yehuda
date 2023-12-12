import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import icon from "./../../assets/icon.png";
import branches from "./../../assets/branches.json";
import quotes from "./../../assets/quotes.json";
import "./Terminal.scss";

function Terminal({ dirs, cwd, closed, setClosed }) {
  const [close, setClose] = useState(closed);
  const [branch, setBranch] = useState(getRandomBranch());
  // get current date
  const d = new Date();
  const commands = {
    cd: {
      cmd: "cd",
      output: null,
      def: "change into new directory (cd .. if you need help!) ",
    },
    clear: { cmd: "clear/cls", output: null, def: "clears terminal" },
    help: {
      cmd: "help",
      output: null,
      def: "shows list of available commands",
    },
    pwd: {
      cmd: "pwd",
      output: cwd,
      def: "outputs current working directory",
    },
    ls: {
      cmd: "ls",
      output: null,
      def: "lists contents of current working directory",
    },
  };
  const [commandLine, setCommandLine] = useState([
    {
      id: uuid(),
      type: "time",
      text: `Last login: ${d.toDateString()} ${d
        .toLocaleTimeString()
        .replace(
          /\s[AP]M$/,
          ""
        )} on ttys001. Type 'help' for a full list of commands. This package was created by the (${branch}) himself:`,
    },
    { id: uuid(), type: "input" },
  ]);
  const [previousCommands, setPreviousCommands] = useState([]);
  const [caretPosition, setCaretPosition] = useState(0);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [commandLine]);

  useEffect(() => {
    if (!closed) {
      inputRef.current?.focus();
    }
  }, [closed]);

  const handleSubmit = (event, id) => {
    setCurrentCommandIndex(0);
    const input = event.target.innerText;
    if (!input.trim()) {
      // check if input is empty
      const current = [...commandLine];
      const i = current.find((obj) => obj.id === id);
      i.type = "submitted";
      i.text = "";
      const nInput = { id: uuid(), type: "input" };
      current.push(nInput);
      return current;
    }
    // add previous command to array
    const prev = [...previousCommands];
    prev.push(input);
    setPreviousCommands(prev);
    if (input.startsWith("cd")) {
      const cmd = input.split(" ");
      const dir = cmd[1];
      if (dir === ".." && cwd !== "/yehuda") {
        window.location.href = "/";
        setClose(true);
      }
      if (dirs?.includes(dir)) {
        window.location.href = `/${dir}/`;
        setClose(true);
      } else {
        // change current line type
        const current = [...commandLine];
        const i = current.find((obj) => obj.id === id);
        i.type = "submitted";
        i.text = input.replace(/&nbsp;/g, " ");
        // generate output
        const nOutput = {
          id: uuid(),
          type: "output",
          text:
            dirs?.includes(dir) || dir === ".."
              ? null
              : `-bash: cd: ${dir}: No such file or directory
  `,
        };
        const nInput = { id: uuid(), type: "input" };
        current.push(nOutput, nInput);
        // reset caret margins
        setCaretPosition(0);
        return current;
      }
    }
    const cmd = input.trim().split(" ")[0];
    // check commands
    if (cmd === "clear" || cmd === "cls") {
      event.preventDefault();
      const arr = [{ id: uuid(), type: "first-input" }];
      setCaretPosition(0);
      event.target.innerText = "";
      return arr;
    } else if (cmd === "help") {
      // change current line type
      const current = [...commandLine];
      const i = current.find((obj) => obj.id === id);
      i.type = "submitted";
      i.text = input.replace(/&nbsp;/g, " ");
      // generate output
      const nOutput = {
        id: uuid(),
        type: "list-output",
        text: [
          "Welcome to the help menu!",
          "Here is a list of available commands and their descriptions:",
          "",
          ...Object.keys(commands).map(
            (key) => `${commands[key].cmd}: ${commands[key].def}`
          ),
        ],
      };
      const nInput = { id: uuid(), type: "input" };
      current.push(nOutput, nInput);
      // reset caret margins
      setCaretPosition(0);
      return current;
    } else if (cmd === "ls") {
      // change current line type
      const current = [...commandLine];
      const i = current.find((obj) => obj.id === id);
      i.type = "submitted";
      i.text = input.replace(/&nbsp;/g, " ");
      // generate output
      const nOutput = {
        id: uuid(),
        type: "list-output",
        text: dirs,
      };
      const nInput = { id: uuid(), type: "input" };
      current.push(nOutput, nInput);
      // reset caret margins
      setCaretPosition(0);
      return current;
    } else {
      // change current line type
      const current = [...commandLine];
      const i = current.find((obj) => obj.id === id);
      i.type = "submitted";
      i.text = input.replace(/&nbsp;/g, " ");
      // generate output
      const nOutput = {
        id: uuid(),
        type: "output",
        text:
          cmd in commands
            ? commands[cmd].output
            : `-bash: ${cmd}: command not found`,
      };
      const nInput = { id: uuid(), type: "input" };
      current.push(nOutput, nInput);
      // reset caret margins
      setCaretPosition(0);
      return current;
    }
  };

  // handle key down events
  const handleKeyDown = (event, id) => {
    let input = event.target;
    if (event.keyCode === 32) {
      // add spaces when spacebar is held down
      setCaretPosition(caretPosition + 1);
    } else if (event.keyCode === 38) {
      // up arrow
      event.preventDefault();
      if (currentCommandIndex < previousCommands.length) {
        setCurrentCommandIndex(currentCommandIndex + 1);
      } else if (currentCommandIndex === previousCommands.length) {
        return; // exit early if already at the last command
      }
      const index = previousCommands.length - currentCommandIndex;
      input.innerText = index > 0 ? previousCommands[index - 1] : "";
      setEndOfContenteditable(input);
      setCaretPosition(input.innerText.length);
    } else if (event.keyCode === 40) {
      // down arrow
      event.preventDefault();
      if (currentCommandIndex > 0) {
        setCurrentCommandIndex(currentCommandIndex - 1);
        const index = previousCommands.length - currentCommandIndex;
        input.innerText = previousCommands[index] || "";
        setEndOfContenteditable(input);
        setCaretPosition(input.innerText.length);
      } else {
        setCurrentCommandIndex(0);
        input.innerText = "";
        setCaretPosition(0);
      }
    } else if (event.keyCode === 13) {
      // Enter key pressed
      event.preventDefault();
      setCommandLine(handleSubmit(event, id));
    } else if (event.keyCode === 9 && input.innerText.startsWith("cd")) {
      event.preventDefault();
      const i = input.innerText.split(" ")[1];
      const matchedDirs = dirs.filter((dir) => dir.startsWith(i));
      if (matchedDirs.length === 1) {
        const newCmd = `cd ${matchedDirs[0]}`;
        input.innerText = newCmd;
        // Move the actual caret
        setEndOfContenteditable(input);
        setCaretPosition(newCmd.length);
      }
    } else if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
    } else if (
      event.shiftKey &&
      (event.keyCode === 37 || event.keyCode === 39)
    ) {
      event.preventDefault();
      return;
    } else if (
      (event.keyCode === 37 || event.keyCode === 8) &&
      caretPosition > 0
    ) {
      if (event.metaKey) {
        setCaretPosition(0);
      } else {
        setCaretPosition(caretPosition - 1);
      }
    } else if (
      event.keyCode === 39 &&
      caretPosition < event.target.innerText.length
    ) {
      if (event.metaKey) {
        setCaretPosition(event.target.innerText.length);
      } else {
        setCaretPosition(caretPosition + 1);
      }
    } else if (event.key.length === 1 && !event.repeat) {
      setCaretPosition(caretPosition + 1);
    }
  };

  function setEndOfContenteditable(contentEditableElement) {
    var range, selection;
    if (document.createRange) {
      //Firefox, Chrome, Opera, Safari, IE 9+
      range = document.createRange(); //Create a range (a range is a like the selection but invisible)
      range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
      range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
      selection = window.getSelection(); //get the selection object (allows you to change selection)
      selection.removeAllRanges(); //remove any selections already made
      selection.addRange(range); //make the range you have just created the visible selection
    } else if (document.selection) {
      //IE 8 and lower
      range = document.body.createTextRange(); //Create a range (a range is a like the selection but invisible)
      range.moveToElementText(contentEditableElement); //Select the entire contents of the element with the range
      range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
      range.select(); //Select the range (make it the visible selection
    }
  }

  function getRandomBranch() {
    const index = Math.floor(Math.random() * branches.length);
    return branches[index];
  }

  return (
    <div className={!closed ? "wrapper" : ""}>
      {!close ? (
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-buttons-container">
              <span
                className="terminal-button terminal-button-red"
                onClick={() => {
                  setClose(true);
                  setClosed(true);
                }}
              />
              <span className="terminal-button terminal-button-yellow" />
              <span className="terminal-button terminal-button-green" />
            </div>
          </div>
          <div className="terminal-body">
            {commandLine?.map((line, i) => {
              switch (line.type) {
                case "time":
                  return (
                    <div className="time" key={i}>
                      <span className="terminal-time">
                        {line.text}{" "}
                        <a
                          href="https://www.npmjs.com/package/rbash"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          https://www.npmjs.com/package/rbash
                        </a>
                      </span>
                    </div>
                  );
                case "first-input":
                  return (
                    <div key={i} cclassName="first-input">
                      <span>
                        ~{cwd} ({branch})
                      </span>
                      <form>
                        <span className="money">$</span>
                        <div
                          contentEditable
                          className="terminal-input"
                          onBlur={({ target }) => target.focus()}
                          autoFocus
                          ref={inputRef}
                          onKeyDown={(ev) => {
                            handleKeyDown(ev, line.id);
                          }}
                          spellCheck="false"
                        ></div>
                        <span
                          className="text-caret"
                          style={{ left: `${caretPosition}ch` }}
                        ></span>
                      </form>
                    </div>
                  );
                case "input":
                  return (
                    <div key={i} className="input">
                      <span>
                        ~{cwd} ({branch})
                      </span>
                      <form>
                        <span className="money">$</span>
                        <div
                          contentEditable
                          className="terminal-input"
                          onBlur={({ target }) => target.focus()}
                          autoFocus
                          ref={inputRef}
                          onKeyDown={(ev) => {
                            handleKeyDown(ev, line.id);
                          }}
                          spellCheck="false"
                        ></div>
                        <span
                          className="text-caret"
                          style={{ left: `${caretPosition}ch` }}
                        ></span>
                      </form>
                    </div>
                  );
                case "submitted":
                  return (
                    <div
                      key={i}
                      className={i === 0 ? "first-submitted" : "submitted"}
                    >
                      <span>
                        ~{cwd} ({branch})
                      </span>
                      <form>
                        <span className="money">$</span>
                        <div className="terminal-input">{line.text}</div>
                      </form>
                    </div>
                  );
                case "output":
                  return (
                    <div key={i} className="output">
                      {line.text}
                    </div>
                  );
                case "list-output":
                  return (
                    <div className="list" key={i}>
                      {line.text?.map((text, j) => (
                        <div
                          key={j}
                          className="list-item"
                          style={{ minHeight: "12.5px" }}
                        >
                          {text}
                        </div>
                      ))}
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      ) : (
        <div
          className="icon"
          onClick={() => {
            setClose(false);
            setClosed(false);
            setCaretPosition(0);
          }}
        >
          <img src={icon} alt="" />
        </div>
      )}
    </div>
  );
}

export default Terminal;
