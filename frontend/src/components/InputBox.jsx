
export function InputBox({label, placeholder, onChange}) {
    return <div>
      <div className="text-sm text-gray-700 font-medium text-left py-2">
        {label}
      </div>
      <input onChange={onChange} placeholder={placeholder} className="w-full  px-3 py-1 border rounded border-slate-200" />
      
    </div>
}