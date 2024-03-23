import { Appbar } from "../components/Appbar"
import TextEditorr from "../components/TextEditorr"

export const Publish = () => {
  return (
    <div>
      <Appbar /> 
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full">
          <label className="block mt-10 mb-2 text-sm font-medium text-gray-900">Title</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title..." />
          <TextEditor />
          <button type="button" className="mt-4 mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Publish</button>
        </div>
      </div>
    </div>
  )
}

export function TextEditor() {
  return <div>
    <label className="block mt-4 mb-2 text-sm font-medium text-gray-900">Content</label>
    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      <TextEditorr /> 
    </div>
  </div>
}