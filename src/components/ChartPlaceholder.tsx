type ChartPlaceholderProps = {
  title: string
}

const ChartPlaceholder = ({ title }: ChartPlaceholderProps) => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#E8E2F4] mb-4">{title}</h3>
      <div className="h-full flex items-center justify-center border-2 border-dashed border-[#3D3554] rounded-lg">
        <span className="text-[#6B6483]">Chart will render here</span>
      </div>
    </div>
  )
}

export default ChartPlaceholder
