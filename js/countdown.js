
const halvingDate = new Date('2028-04-17T01:59:00Z');

function updateCountdown() {
    const now = new Date();
    const difference = halvingDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    document.getElementById('halvingDate').textContent = '17 April 2028 01:59';
    document.getElementById('currentReward').textContent = '3.125';
    document.getElementById('nextReward').textContent = '1.5625';
}

function updateBlockInfo() {
    document.getElementById('currentBlock').textContent = '861,402';
    document.getElementById('halvingBlock').textContent = '1,050,000';
    document.getElementById('blocksToGo').textContent = '188,598';
}

updateBlockInfo();

setInterval(updateCountdown, 1000);


updateCountdown();


document.addEventListener('DOMContentLoaded', function() {
    const notification = document.getElementById('notification');
    const closeButton = document.getElementById('closeNotification');

    if (localStorage.getItem('notificationDismissed')) {
        notification.style.display = 'none';
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            notification.style.opacity = '0';
            setTimeout(() => {
                notification.style.display = 'none';
            }, 300);
            
          
            localStorage.setItem('notificationDismissed', 'true');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const expandBtn = document.getElementById('expandBtn');
    const explanationContent = document.getElementById('explanationContent');

    if (expandBtn && explanationContent) {
        expandBtn.addEventListener('click', function() {
            explanationContent.classList.toggle('expanded');
            
            if (explanationContent.classList.contains('expanded')) {
                expandBtn.textContent = '−';
            } else {
                expandBtn.textContent = '+';
            }
        });
    }
});
