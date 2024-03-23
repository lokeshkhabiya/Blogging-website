import { useEffect, useState, useRef } from "react"
import EditorJS from "@editorjs/editorjs"

export default function TextEditorr() {
    const [isMounted, setIsMounted] = useState(false);
    const ref = useRef<EditorJS>();

    const initializeEditor = async() => {
        const EditorJS = (await import("@editorjs/editorjs")).default;
        const Header = (await import("@editorjs/header")).default;
        const List = (await import("@editorjs/list")).default;

        if (!ref.current) {
          const editor = new EditorJS({
            holder: "editorjs",
            tools: {
              header: Header,
              list: List,
            }
          });
          ref.current = editor
        }
      };

      useEffect(() => {
        if (typeof window != 'undefined') {
          setIsMounted(true);
        }
      }, [])

      useEffect(() => {
        const init = async () => {
          await initializeEditor();
        }

        if (isMounted) { 
          init();
          
          return  () => {
            if (ref.current) {
              ref.current.destroy();
            }
          }
        }
      }, [isMounted]);


  return (
      <div id="editorjs" className="bg-red-300 max-w-full min-h-screen"></div>
  )
}

