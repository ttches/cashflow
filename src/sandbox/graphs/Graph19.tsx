import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph19 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#A599E9] mb-2">19 - Dual Axis Ready</h3>
      <p className="text-sm text-[#6E6E9E] mb-2">Right axis enabled, comparison style</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData]}
          margin={{ top: 20, right: 60, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          curve="monotoneX"
          enableArea={false}
          pointSize={8}
          pointColor="#2D2B55"
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          lineWidth={2}
          useMesh={true}
          enableSlices="x"
          theme={{
            background: '#2D2B55',
            text: { fill: '#A599E9' },
            grid: { line: { stroke: '#3B3B6E' } },
            axis: {
              ticks: { text: { fill: '#A599E9' } },
              legend: { text: { fill: '#A599E9' } },
            },
            crosshair: { line: { stroke: '#B362FF' } },
            tooltip: { container: { background: '#1E1E3F', color: '#A599E9' } },
          }}
          colors={['#FF2C70', '#3AD900']}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            legend: 'Loan ($)',
            legendOffset: -50,
            legendPosition: 'middle',
            format: (v) => `${Number(v) / 1000}k`,
          }}
          axisRight={{
            tickSize: 5,
            tickPadding: 5,
            legend: 'Investment ($)',
            legendOffset: 50,
            legendPosition: 'middle',
            format: (v) => `${Number(v) / 1000}k`,
          }}
        />
      </div>
    </div>
  )
}

export default Graph19
