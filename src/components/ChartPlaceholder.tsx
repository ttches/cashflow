type ChartPlaceholderProps = {
  title: string
}

const ChartPlaceholder = ({ title }: ChartPlaceholderProps) => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#A599E9] mb-4">{title}</h3>
      <div className="h-full flex items-center justify-center border-2 border-dashed border-[#3B3B6E] rounded-lg">
        <span className="text-[#6E6E9E]">Chart will render here</span>
      </div>
    </div>
  )
}

export default ChartPlaceholder
