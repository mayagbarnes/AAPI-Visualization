export const showHeatMap = function() {
    const showButton = document.getElementById('show-heatmap');
    const modal = document.querySelector('.heat-map-modal');
    const backdrop = document.querySelector('.backdrop');
    
    showButton.addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}


