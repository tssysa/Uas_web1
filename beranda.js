let currentStep = 0;
const steps = document.querySelectorAll('.step');

function showStep(stepIndex) {
    steps.forEach((step, index) => {
        step.classList.remove('active');
        if (index === stepIndex) {
            step.classList.add('active');
        }
    });
}

function changeStep(direction) {
    currentStep += direction;
    if (currentStep < 0) {
        currentStep = 0;
    } else if (currentStep >= steps.length) {
        currentStep = steps.length - 1;
    }
    showStep(currentStep);
}

// Menampilkan langkah pertama saat halaman dimuat
showStep(currentStep);