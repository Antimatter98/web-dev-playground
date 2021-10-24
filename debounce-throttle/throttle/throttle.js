// implementation similar to debounce here
// but this is executed once for the very 1st event 
// and it will again execute once for any one of the new upcoming events AFTER the delay has passed.
const throttle = (fn, delay) => {
    let timer;
    let inThrottle;

    // 'args' to accept any arguments that may have been passed to this 'returned' function
    return (...args) => {
        if(!inThrottle) {
            clearTimeout(timer);
            // run the function the first time [on the first edge]
            // incase of multiple events -> this fn is runonly for the 1st. next it will run for events only after 'delay' has passed
            fn.apply(this, args);
            inThrottle = true;
            timer = setTimeout(() => inThrottle = false, delay)
        }
    }
}

const addNewItem = () => {
    const currentPageHeight = document.documentElement.scrollHeight;

    const currentWindowHeight = window.innerHeight;
    const scrollBarHeight = window.scrollY;

    // (whole document height) - (distance between document's top & scrollbar's top part) - (current window's height)
    const pixelsRemainingFromBottom = currentPageHeight - scrollBarHeight - currentWindowHeight;

    // console.log("pixels remaining from bottom", pixelsRemainingFromBottom)

    if(pixelsRemainingFromBottom < 200) {
        console.log('adding a new item...')
        
        const newItem = document.createElement('p')
        newItem.style = "height: 70px; width: 100%; background: #ececec";
        newItem.textContent = "This is a new Item"

        document.body.appendChild(newItem)
    }
}

const throttledAddNewItem = throttle(addNewItem, 150);

window.addEventListener('scroll', throttledAddNewItem)