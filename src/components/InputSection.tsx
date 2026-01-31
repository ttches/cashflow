type InputField = {
  label: string;
  name: string;
  placeholder?: string;
  suffix?: string;
};

type InputSectionProps = {
  fields: InputField[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
  rightContent?: Record<string, string>;
};

const InputSection = ({
  fields,
  values,
  onChange,
  rightContent,
}: InputSectionProps) => {
  return (
    <div className="bg-[#191831] rounded-xl border border-[#3D3554] p-6">
      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="block text-sm font-medium text-[#a196e4] mb-1"
            >
              {field.label}
            </label>
            <div className="relative">
              <input
                type="text"
                id={field.name}
                name={field.name}
                value={values[field.name] || ""}
                onChange={(e) => onChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                className="w-full px-3 py-2 bg-[#15152a] border border-[#3D3554] rounded-lg text-[#fad003] placeholder-[#6B6483] focus:ring-2 focus:ring-[#d971d5] focus:border-[#d971d5] outline-none transition-colors"
              />
              {(field.suffix || rightContent?.[field.name]) && (
                <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-sm">
                  {field.suffix && (
                    <span className="text-[#a196e4]">{field.suffix}</span>
                  )}
                  {rightContent?.[field.name] && (
                    <span className="text-[#a6ff90]">
                      {rightContent[field.name]}
                    </span>
                  )}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputSection;
