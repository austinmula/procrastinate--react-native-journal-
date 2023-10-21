const {View, Text} = require('react-native')
import {
  CalendarProvider,
  WeekCalendar,
  LocaleConfig,
  ExpandableCalendar,
} from 'react-native-calendars'
const ITEMS = [
  {
    title: '2023-10-1',
    data: [{hour: '12am', duration: '1h', title: 'First Yoga'}],
  },
  {
    title: '2023-10-10',
    data: [
      {hour: '4pm', duration: '1h', title: 'Pilates ABC'},
      {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'},
    ],
  },
  {
    title: '2023-9-12',
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'},
    ],
  },
]

let today = new Date()
const renderItem = () => {
  return <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
}

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <CalendarProvider date={today}>
        <ExpandableCalendar
          //   testID={testIDs.expandableCalendar.CONTAINER}
          // hideArrows
          calendarStyle={{
            padding: 0,
            //   backgroundColor: '#7798AB',
          }}
          headerStyle={
            {
              //   backgroundColor: '#7798AB',
            }
          }
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          // calendarStyle={styles.calendar}
          // headerStyle={styles.header} // for horizontal only
          // disableWeekScroll
          //   theme={theme.current}
          // disableAllTouchEventsForDisabledDays
          firstDay={1}
          //   markedDates={marked.current}
          // leftArrowImageSource={leftArrowIcon}
          // rightArrowImageSource={rightArrowIcon}
          // animateScroll
          // closeOnDayPress={false}

          style={{
            backgroundColor: 'red',
          }}
          theme={{
            textDayFontSize: 20,
            backgroundColor: '#f2f2f2',
            calendarBackground: '#f2f2f2',
            //   textDayHeaderFontSize: 20,
            textMonthFontSize: 32,
            arrowColor: 'orange',
            textMonthFontWeight: '100',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            monthTextColor: 'blue',
            indicatorColor: 'blue',

            //   backgroundColor: 'red',
            //   calendarBackground: '#f3f3f3',
            //   textDayFontWeight: '700',
            //   textSectionTitleColor: '#0D1B1E',
            //   selectedDayBackgroundColor: '#7798AB',
          }}
        />
        {/* <WeekCalendar
        theme={{
          backgroundColor: 'red',
          calendarBackground: '#f3f3f3',
          textDayFontWeight: '700',

          textSectionTitleColor: '#0D1B1E',
          selectedDayBackgroundColor: '#7798AB',
        }}
        calendarStyle={{padding: 30}}
        CellRendererComponent={renderItem}
        // CellRendererComponent={renderItem}
        // month={'october'}
        // style={{backgroundColor: '#333'}}
        showWeekNumbers
        allowShadow={false}
        firstDay={1}
      /> */}
      </CalendarProvider>
    </View>
  )
}

export default Home
