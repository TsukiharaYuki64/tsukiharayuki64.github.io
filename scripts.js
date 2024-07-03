/* I don't know what the fuck im going here */
document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('interestsChart').getContext('2d');
    var interestsChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Gaming', 'Coding', 'Entertainment', 'Research', 'Anime'],
            datasets: [{
                label: 'My Interests',
                data: [10, 30, 20, 30, 10],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
