document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('interestsChart').getContext('2d');
    const interestsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Gaming', 'Coding', 'Entertainment', 'Research', 'Communication', 'Anime'],
            datasets: [{
                data: [10, 30, 20, 30, 10, 15], // Percentages for each activity
                backgroundColor: [
                    'rgba(0, 255, 0, 0.2)', // Lighter green
                    'rgba(0, 128, 0, 0.2)', // Darker green
                    'rgba(0, 255, 0, 0.4)', // Lighter green
                    'rgba(0, 128, 0, 0.4)', // Darker green
                    'rgba(0, 255, 0, 0.6)', // Lighter green
                    'rgba(0, 128, 0, 0.6)'  // Darker green
                ],
                borderColor: [
                    'rgba(0, 255, 0, 1)',   // Green
                    'rgba(0, 255, 0, 1)',   // Green
                    'rgba(0, 255, 0, 1)',   // Green
                    'rgba(0, 255, 0, 1)',   // Green
                    'rgba(0, 255, 0, 1)',   // Green
                    'rgba(0, 255, 0, 1)'    // Green
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false, // Disable responsive resizing
            maintainAspectRatio: false, // Maintain aspect ratio
            plugins: {
                legend: {
                    display: false // Disable the legend
                }
            }
        }
    });
});
