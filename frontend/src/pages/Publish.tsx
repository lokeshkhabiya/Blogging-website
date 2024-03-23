import { Appbar } from "../components/Appbar"

export const Publish = () => {
  return (
    <div>
      <Appbar /> 
      <div className="flex justify-center">
        <div className="max-w-screen-lg w-full">
          <label className="block mt-10 mb-2 text-sm font-medium text-gray-900">Title</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Title..." />
          <TextEditor />
        </div>
      </div>
    </div>
  )
}

export function TextEditor() {
  return <div>
    <label className="block mt-4 mb-2 text-sm font-medium text-gray-900">Content</label>
    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write your thoughts here..."></textarea>
  </div>
}