/* dinamic notifications number */
const unreadNotifications = document.querySelectorAll('.unread').length;

const notificationsNumber = document.querySelector('.notifications_number');

function setNotifications(element, number){
    element.innerHTML = number;
}

setNotifications(notificationsNumber, unreadNotifications);

/* select cta- mark all */
const ctaElement = document.querySelector('.cta');

/* click event listener */
ctaElement.addEventListener('click', function(){

    const notificationsElement = document.querySelectorAll('.notification');

    for(let i=0; i < notificationsElement.length; i++){
        const notification = notificationsElement[i];

        if(notification.classList.contains('unread')){
            notification.classList.toggle('unread');
        }
    }

    setNotifications(notificationsNumber, 0);

})


