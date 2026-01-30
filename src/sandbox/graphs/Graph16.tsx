import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph16 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#A599E9] mb-2">16 - High Contrast</h3>
      <p className="text-sm text-[#6E6E9E] mb-2">Strong color contrast, prominent lines</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData]}
          margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          curve="catmullRom"
          enableArea={false}
          pointSize={10}
          pointColor="#1E1E3F"
          pointBorderWidth={3}
          pointBorderColor={{ from: 'serieColor' }}
          lineWidth={4}
          useMesh={true}
          enableSlices="x"
          enableGridX={false}
          enableGridY={false}
          theme={{
            background: '#1E1E3F',
            text: { fill: '#A599E9' },
            axis: {
              ticks: { text: { fill: '#A599E9' } },
              legend: { text: { fill: '#A599E9' } },
              domain: { line: { stroke: '#3B3B6E', strokeWidth: 2 } },
            },
            crosshair: { line: { stroke: '#FAD000', strokeWidth: 2 } },
            tooltip: { container: { background: '#2D2B55', color: '#FAD000' } },
          }}
          colors={['#FAD000', '#3AD900']}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#FAD000',
              symbolSize: 14,
              symbolShape: 'circle',
            },
          ]}
          axisBottom={{
            tickSize: 0,
            tickPadding: 10,
            legend: 'Year',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 0,
            tickPadding: 10,
            legend: 'Amount ($)',
            legendOffset: -50,
            legendPosition: 'middle',
            format: (v) => `${Number(v) / 1000}k`,
          }}
        />
      </div>
    </div>
  )
}

export default Graph16
