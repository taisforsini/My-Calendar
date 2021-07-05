import "bootstrap/dist/css/bootstrap.min.css";
import moment from "moment";

function Days() {
  let value = moment();
  let startDay = value.clone().startOf("month").startOf("week");
  let endDay = value.clone().endOf("month").endOf("week");
  let calendar = [];
  let day = startDay.clone().subtract(1, "day");

  while (day.isBefore(endDay, "day")) {
    calendar.push(day.add(1, "day").clone().format("YYYYMMDD"));
  }

  return (
    <div>
      <div className="container">
        <div className="row row-cols-6">
          {calendar.map((day) => {
            return (
              <div id="wd" className="col">
                {day.slice(-2)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Days;
