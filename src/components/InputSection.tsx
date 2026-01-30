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
    <div className="bg-[#1E1A2E] rounded-xl border border-[#3D3554] p-6">
      <h2 className="text-lg font-semibold text-[#E8E2F4] mb-4">{title}</h2>
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-[#A9A1C1] mb-1"
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
                className="w-full px-3 py-2 bg-[#171421] border border-[#3D3554] rounded-lg text-[#E5C07B] placeholder-[#6B6483] focus:ring-2 focus:ring-[#C792EA] focus:border-[#C792EA] outline-none transition-colors"
              />
              {field.suffix && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#A9A1C1] text-sm">
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
