import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData } from '../data'

const Graph18 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#A599E9] mb-2">18 - Retro Terminal</h3>
      <p className="text-sm text-[#6E6E9E] mb-2">Green on dark, monochrome feel</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData]}
          margin={{ top: 20, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 0, max: 'auto' }}
          curve="linear"
          enableArea={false}
          pointSize={6}
          pointColor="#1E1E3F"
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          lineWidth={2}
          useMesh={true}
          enableSlices="x"
          theme={{
            background: '#1E1E3F',
            text: { fill: '#3AD900' },
            grid: { line: { stroke: '#3AD900', strokeOpacity: 0.2 } },
            axis: {
              ticks: { text: { fill: '#3AD900' } },
              legend: { text: { fill: '#3AD900' } },
              domain: { line: { stroke: '#3AD900', strokeOpacity: 0.5 } },
            },
            crosshair: { line: { stroke: '#3AD900' } },
            tooltip: { container: { background: '#1E1E3F', color: '#3AD900', border: '1px solid #3AD900' } },
          }}
          colors={['#3AD900', '#9EFFFF']}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 100,
              itemWidth: 80,
              itemHeight: 20,
              itemTextColor: '#3AD900',
              symbolSize: 12,
              symbolShape: 'square',
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

export default Graph18
