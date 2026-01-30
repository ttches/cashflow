import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph07 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#A599E9] mb-2">07 - Points Emphasis</h3>
      <p className="text-sm text-[#6E6E9E] mb-2">Large points, thin connecting lines</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData]}
          margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          curve="cardinal"
          enableArea={false}
          pointSize={12}
          pointColor={{ from: 'color' }}
          pointBorderWidth={2}
          pointBorderColor="#2D2B55"
          lineWidth={1}
          useMesh={true}
          enableSlices="x"
          enableGridX={true}
          enableGridY={false}
          theme={{
            background: '#2D2B55',
            text: { fill: '#A599E9' },
            grid: { line: { stroke: '#3B3B6E', strokeDasharray: '4 4' } },
            axis: {
              ticks: { text: { fill: '#A599E9' } },
              legend: { text: { fill: '#A599E9' } },
            },
            crosshair: { line: { stroke: '#B362FF' } },
            tooltip: { container: { background: '#1E1E3F', color: '#A599E9' } },
          }}
          colors={['#FAD000', '#3AD900']}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#A599E9',
              symbolSize: 12,
              symbolShape: 'circle',
            },
          ]}
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

export default Graph07
