type InputField = {
  label: string
  name: string
  placeholder?: string
  suffix?: string
}

type InputSectionProps = {
  title: string
  fields: InputField[]
  values: Record<string, string>
  onChange: (name: string, value: string) => void
}

const InputSection = ({ title, fields, values, onChange }: InputSectionProps) => {
  return (
    <div className="bg-[#2D2B55] rounded-xl border border-[#3B3B6E] p-6">
      <h2 className="text-lg font-semibold text-[#A599E9] mb-4">{title}</h2>
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-[#A599E9] mb-1"
            >
              {field.label}
            </label>
            <div className="relative">
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={values[field.name] || ''}
                onChange={(e) => onChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                className="w-full px-3 py-2 bg-[#1E1E3F] border border-[#3B3B6E] rounded-lg text-[#FAD000] placeholder-[#6E6E9E] focus:ring-2 focus:ring-[#B362FF] focus:border-[#B362FF] outline-none transition-colors"
              />
              {field.suffix && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A599E9] text-sm">
                  {field.suffix}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InputSection
