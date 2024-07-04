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
                    '#FF6384', // Gaming
                    '#36A2EB', // Coding
                    '#FFCE56', // Entertainment
                    '#4BC0C0', // Research
                    '#9966FF'  // Anime
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            animation: {
                duration: 0 // Disable animations to improve performance
            }
        }
    });
});
