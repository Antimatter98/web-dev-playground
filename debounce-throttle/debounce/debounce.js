const debounce = (fn, delay) => {
    // init timer var
    let timer;

    // return a debounced version of the function
    return () => {
        // gather the context and the arguments for the fn to be debounced
        const context = this;
        const args = arguments;

        // clear timer first
        clearTimeout(timer);

        // set a new timer now
        timer = setTimeout(() => fn.apply(context, args), delay)
    }
}

// window resizing debounce
const onResize = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    document.querySelector('#curr-reso').textContent = `Current resolution: ${windowWidth} X ${windowHeight}`
}

const debouncedOnResize = debounce(onResize, 1300)

window.addEventListener('resize', debouncedOnResize)



// input keyup debounce
const handleInput = () => {
    const inputText = document.querySelector('#input-text').value

    alert(`You have typed: ${inputText}`)
}

const debouncedOnKeyUp = debounce(handleInput, 500)