import React, { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";





// using jodiEditor for the rich text editor
import JoditEditor from "jodit-react";

//  function RichTEditor() {
//     const [body, setbody] = useState('')
//     const handleBody = (e)=>{
//         console.log(e);
//         setbody(e);
//     }
//     const modules = {
//         toolbar:[
//             [{header:'1'},{header:'2'}, {header:[3,4,5,6]}, {font:[]}],
//             [{size:[]}],
//             ["bold","italic","underline","strile","blockquote"],
//             [{list:'ordered'} , {list:'bullet'}],
//             ["link"],
//             ['clean'],
//             ["code-block"],
//         ]
//     }

//     const formats = [
//         "header",
//         "font",
//         "size",
//         "bold",
//         "italic",
//         "underline",
//         "strike",
//         "blockquote",
//         'list',
//         "bullet",
//         "link",
//         "code-block",
//     ]
//   return (
//     <div className='RichTEditor'>
//         <h2>Text Editor</h2>
//         <ReactQuill
//         placeholder='Write your text here'
//         modules={modules}
//         formats={formats}
//         onChange={handleBody}
//         value={body}
//         />
//     </div>
//   )
// }


const config = {
    buttons:["bold" , "italic" , "underline", "link", "unlink", "draft" , ],
}
function RichTEditor() {
  const [value, setvalue] = useState("");
  const editor = useRef(null);
  function editHandle(e) {
    setvalue(e);
  }
  return (
      <div>
    <div>
      <JoditEditor ref={editor} onChange={editHandle} config={config} value={value}
       />
    </div>
    <div>
        {value} 
    </div>
    </div>
  );
}

export default RichTEditor;
