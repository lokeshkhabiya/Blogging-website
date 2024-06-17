// importing tools 
import Embed from "@editorjs/embed";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import InlineCode from "@editorjs/inline-code";
import Code from "@editorjs/code";


export const tools = {
    embed: Embed,
    list: {
       class: List,
       inlineToolbar: true
    },
    image: Image,
    header: {
        class: Header,
        config: {
            placeholder: "Type heading...",
            levels: [2, 3],
            defaultLevel: 2
        }
    },
    quote: Quote,
    marker: Marker,
    inlineCode: InlineCode,
    code: Code
}