import { IoIosArrowDown } from "react-icons/io"; 



export const Select = ({title, options}) => {
  return (
    <div className="relative">
      <select defaultValue={""} className="w-24 appearance-none border border-gray-300 p-4">
        <option value="" disabled hidden>{title}</option>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
      <div className="flex items-center justify-center absolute inset-y-0 right-0 pr-3">
      <IoIosArrowDown />
    
      </div>
    </div>
  )
}

