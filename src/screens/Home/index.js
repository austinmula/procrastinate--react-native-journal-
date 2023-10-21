const {View, Text} = require('react-native')
import {
  CalendarProvider,
  WeekCalendar,
  LocaleConfig,
} from 'react-native-calendars'
const ITEMS = [{title: '2023-10-23'}, {title: '2023-10-23'}]

let today = new Date()
const renderItem = () => {
  return <View style={{backgroundColor: 'blue', width: 50, height: 50}}></View>
}

const Home = () => {
  return (
    // <View style={{flex: 1, maxHeight: 200}}>
    <CalendarProvider  date={today}>
      <WeekCalendar 
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
      />
    </CalendarProvider>
    //   <Text>Homescreen</Text>
    // </View>
  )
}

export default Home
