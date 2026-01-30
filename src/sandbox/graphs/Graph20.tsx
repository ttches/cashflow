import { ResponsiveLine } from '@nivo/line'
import { loanChartData, investmentValueData, netWorthData } from '../data'

const Graph20 = () => {
  return (
    <div className="h-80">
      <h3 className="text-lg font-semibold text-[#A599E9] mb-2">20 - Triple Line</h3>
      <p className="text-sm text-[#6E6E9E] mb-2">Three datasets: loan, investment, and net worth</p>
      <div className="h-64">
        <ResponsiveLine
          data={[loanChartData, investmentValueData, netWorthData]}
          margin={{ top: 20, right: 120, bottom: 50, left: 60 }}
          xScale={{ type: 'linear', min: 0, max: 'auto' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
          curve="catmullRom"
          enableArea={false}
          pointSize={6}
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
          colors={['#FF2C70', '#3AD900', '#FAD000']}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              translateX: 110,
              itemWidth: 100,
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

export default Graph20
