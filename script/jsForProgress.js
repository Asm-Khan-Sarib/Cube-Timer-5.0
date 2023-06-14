

function convert_time(totalSeconds) {
    let min = Math.floor(totalSeconds / 60)
    let sec = Math.floor(totalSeconds - (min * 60))
    let ms = Math.round((totalSeconds % 1) * 100)
    let time_string = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`
    return time_string
}
function find_time_info(times) {

    let maxNumber = times[0]
    let minNumber = times[0]
    let sumNumber = 0

    for (let i = 0; i < times.length; i++) {
        sumNumber += times[i]

        if (times[i] > maxNumber) {
            maxNumber = times[i]
        }

        if (times[i] < minNumber) {
            minNumber = times[i]
        }
    }
    let avg = parseFloat((sumNumber / times.length).toFixed(2))
    let avg_srt = convert_time(avg)
    let max_string = convert_time(maxNumber)
    let min_string = convert_time(minNumber)

    document.getElementById("Best").innerHTML = min_string
    document.getElementById("Worst").innerHTML = max_string
    document.getElementById("AVG").innerHTML = avg_srt


    //Ao5
    if (times.length >= 5) {
        let sumNumber5 = 0
        for (let i = 0; i < 5; i++) {
            sumNumber5 += times[i]
        }
        sumNumber5 = parseFloat((sumNumber5 / 5).toFixed(2))
        let avg_string = convert_time(sumNumber5)
        document.getElementById("Ao5").innerHTML = avg_string
    }
    //Ao12
    if (times.length >= 12) {
        let sumNumber12 = 0
        for (let i = 0; i < 12; i++) {
            sumNumber12 += times[i]
        }
        sumNumber12 = parseFloat((sumNumber12 / 12).toFixed(2))
        let avg_string = convert_time(sumNumber12)
        document.getElementById("Ao12").innerHTML = avg_string
    }
    //Ao50
    if (times.length >= 50) {
        let sumNumber50 = 0
        for (let i = 0; i < 50; i++) {
            sumNumber50 += times[i]
        }
        sumNumber50 = parseFloat((sumNumber50 / 50).toFixed(2))
        let avg_string = convert_time(sumNumber50)
        document.getElementById("Ao50").innerHTML = avg_string
    }
    //Ao100
    if (times.length >= 100) {
        let sumNumber100 = 0
        for (let i = 0; i < 100; i++) {
            sumNumber100 += times[i]
        }
        sumNumber100 = parseFloat((sumNumber100 / 100).toFixed(2))
        let avg_string = convert_time(sumNumber100)
        document.getElementById("Ao100").innerHTML = avg_string
    }

}

function draw_chart(data, customValues) {
    var ctx = document.getElementById('myChart').getContext('2d'); // Get the chart canvas element

    // Create the line chart
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map((_, index) => index + 1), // Generate labels [1, 2, 3, ...]
            datasets: [{
                label: 'Times',
                data: data,
                backgroundColor: 'rgba(161, 12, 1, 0.897)', // Customize the background color
                borderColor: 'rgb(192, 65, 61)', // Customize the line color
                borderWidth: 1 // Customize the line width
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: false // Hide the x-axis labels
                },
                y: {
                    beginAtZero: true // Start the y-axis from zero
                }
            },
            plugins: {
                tooltip: {
                    enabled: true, // Enable tooltips
                    callbacks: {
                        label: function (context) {
                            var dataIndex = context.dataIndex;
                            return customValues[dataIndex]; // Use the custom values array
                        }
                    }
                }
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let times = []
    let times_srt = []
    let local_data = JSON.parse(localStorage.getItem('solve_time')) || []
    if (local_data.length > 0) {
        for (let i = 0; i < local_data.length; i++) {
            times_srt.push(local_data[i].time)//save values for chart labels
            //get time and save into "times" array.
            let timeParts = local_data[i].time.split(":")
            let totalSeconds = (parseFloat(timeParts[0]) * 60) + parseFloat(timeParts[1]) + (parseFloat(timeParts[2]) / 100)
            totalSeconds = parseFloat(totalSeconds.toFixed(2))
            times.push(totalSeconds)
        }
        find_time_info(times)
        draw_chart(times, times_srt)
    }
    
})