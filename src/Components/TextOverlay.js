
import React, { useRef , useState} from "react";
import DragResizeContainer from "react-drag-resize";
import "./TextOverlay.css" // Adjust the import path for your CSS if needed

function TextResizer() {
  // Create Refs for the draggable and resizable elements
  const dragResizeRef = useRef(null);

  const [textList, setTextList] = useState([]);
  const [currentText, setCurrentText] = useState('');

  const handleAddText = () => {
    setTextList([...textList, { text: currentText, width: 100, height: 50, x: 0, y: 0 }]);
    setCurrentText('');
  };

  const layout = [
    { key: "test", x: 0, y: 100, width: 200, height: 100, zIndex: 1 }
  ];

  const canResizable = (isResize) => {
    return {
      top: isResize,
      right: isResize,
      bottom: isResize,
      left: isResize,
      topRight: isResize,
      bottomRight: isResize,
      bottomLeft: isResize,
      topLeft: isResize
    };
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={currentText}
          placeholder="Enter your text"
          onChange={(e) => setCurrentText(e.target.value)}
          className="input-box"
        />
        <button onClick={handleAddText} className="add-text-button">
          Add Text
        </button>
      </div>
      {textList.map((textObj, index) => (
      <DragResizeContainer
        ref={dragResizeRef} // Attach the Ref to the DragResizeContainer
        className="resize-container"
        resizeProps={{
          minWidth: 10,
          minHeight: 10,
          enable: canResizable(true)
        }}
        layout={layout}
        dragProps={{ disabled: false }}
        onLayoutChange={(e) => console.log(e)}
      >
        {layout.map((single) => {
          return (
            <div key={single.key} className="child-container size-auto border">
               {textObj.text}
            </div>
          );
        })}
      </DragResizeContainer>
      ))}
    </div>
  );
}

export default TextResizer;

