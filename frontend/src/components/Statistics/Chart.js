import { Line } from "react-chartjs-2";
import "./stats.css";

const Chart = ({incidents}) => {

    const months = ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar",
        "Novembar", "December"];

    const getGraphData = () => {
        let incidentsByMonth = Array(12).fill(0);
        for (let i = 0; i < incidents.length; i++) {
            console.log(incidents[i].dateCreated);
            if (incidents[i].dateCreated.substr(0, 4) === new Date().getFullYear().toString()) {
                if (incidents[i].dateCreated.substr(5, 2) === "01") {
                    incidentsByMonth[0]++;
                } else if (incidents[i].dateCreated.substr(5, 2) === "02") {
                    incidentsByMonth[1]++;
                } else if (incidents[i].dateCreated.substr(5, 2) === "03") {
                    incidentsByMonth[2]++;
                } else if (incidents[i].dateCreated.substr(5, 2) === "04") {
                    incidentsByMonth[3]++;
                } else if (incidents[i].dateCreated.substr(5, 2) === "05") {
                    incidentsByMonth[4]++;
                } else if (incidents[i].dateCreated.substr(5, 2) === "06") {
                    incidentsByMonth[5]++;
                } else if (incidents[i].dateCreated.substr(5, 2) === "07") {
                    incidentsByMonth[6]++;
                } else if (incidents[i].dateCreated.substr(5, 2) === "08") {
                    incidentsByMonth[7]++;
                } else if (incidents[i].dateCreated.substr(5, 2) === "09") {
                    incidentsByMonth[8]++;
                } else if (incidents[i].dateCreated.substr(5, 2) === "10") {
                    incidentsByMonth[9]++;
                } else if (incidents[i].dateCreated.substr(5, 2) === "11") {
                    incidentsByMonth[10]++;
                } else {
                    incidentsByMonth[11]++;
                }
            }
        }
        return incidentsByMonth;
    }

    const chartData = {
        labels: months,
        datasets: [
            {
                label: 'Broj incidenata po mjesecima u aktuelnoj godini',
                data: getGraphData(),
                fill: false,
                backgroundColor: 'rgb(88,90,91)',
                borderColor: 'rgb(163,182,184)',
            },
        ],
    };

    return (
        <div className="incidents-bar">
            <Line
                data={chartData}
            />
        </div>
    )
}

export default Chart;
