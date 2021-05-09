import axios from "axios";

const key = "f603a8741d2b6516ab2d8898a417d61e";
const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=imperial&q=`;

const getData = (city) => {
  return axios
    .get(`${url}${city}`)
    .then((res) => {
      // result.data
      const forecast = res.data;
      const forecastList = forecast.list;
      // getting list
      const fiveDayForecast = forecastList.reduce((total, item) => {
        //item.dt_txt returns time
        // console.log(item, 'item');
        const day = item.dt_txt.split(" ")[0];
        const time = item.dt_txt.split(" ")[1];

        const dayIcon = (iconNumber) => {
          var string = iconNumber;
          var newString = string.replace("n", "d");
          return newString;
        };

        // getting day 2019-05-16
        if (total.hasOwnProperty(day)) {
          total[day].time.push(time);
          total[day].temps.push(item.main.temp);
          total[day].pressure.push(item.main.pressure);
          total[day].sea_level.push(item.main.sea_level);
          total[day].grnd_level.push(item.main.grnd_level);
          total[day].humidity.push(item.main.humidity);
          total[day].min = Math.round(Math.min(...total[day].temps));
          total[day].max = Math.round(Math.max(...total[day].temps));
          total[day].average = Math.round(
            total[day].temps.reduce((total, item) => total + item, 0) /
              total[day].temps.length
          );
          total[day].descHour.push(item.weather[0].description);
        } else {
          total[day] = {
            day: day,
            time: [time],
            temps: [item.main.temp],
            min: Math.round(item.main.temp),
            max: Math.round(item.main.temp),
            pressure: [item.main.pressure],
            sea_level: [item.main.sea_level],
            grnd_level: [item.main.grnd_level],
            humidity: [item.main.humidity],
            average: Math.round(item.main.temp),
            icon: dayIcon(item.weather[0].icon),
            // icon: item.weather[0].icon,
            descMain: item.weather[0].main,
            descHour: [item.weather[0].description],
          };
        }
        return total;
        // object with arrrays
      }, {});
      return Object.entries(fiveDayForecast).map((data) => {
        const dayInfo = data[1];
        return dayInfo;
      });
    })
    .catch(function (error) {
      this.props.history.push("/forecast/" + this.state.city);
      return error.response.data;
    });
};

export default getData;
