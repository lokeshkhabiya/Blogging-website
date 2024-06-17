import { useEffect } from "react"
import { Appbar } from "../components/Appbar"
import EditorJS, { OutputData } from "@editorjs/editorjs"
import { tools } from "../utils/Tools"


const Publish = () => {

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const editor = new EditorJS({
      holder: 'texteditor',
      data: "" as unknown as OutputData,
      tools: tools,
      placeholder: "let's write an awesome blog...",
    })
  }, [])

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode == 13) e.preventDefault() 
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const input = e.target;
    
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
  }

  return (
    <>
      <Appbar /> 
      <div className="flex flex-col  justify-center items-center m-auto p-6 max-w-screen-md">
        <textarea name="" id=""
          placeholder="Blog title"
          className="text-4xl mt-10 font-medium w-full h-20 outline-none resize-none leading-tight placeholder:opacity-40"
          onKeyDown={handleTitleKeyDown}
          onChange={handleTitleChange}
        ></textarea>

        <hr className="flex w-full my-4"/>
        
        <div
          id="texteditor"
          className="flex flex-col w-full"
        >

        </div>

      </div>
    </>
  )
}

export default Publish