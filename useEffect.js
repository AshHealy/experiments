// You can use the setInterval() function to repeatedly call a function at a specified time interval.

useEffect(() => {
    if(!isSleeping && isPlaying) {
        const interval = setInterval(() => {
            setMood(mood + 10);
        }, 1000); // 1000ms = 1s
    }
    return () => clearInterval(interval);
}, [isSleeping, isPlaying, mood]);
// This will call the function passed to setInterval every 1000ms (1 second) and update the mood variable with mood + 10.

// It is wrapped in a useEffect hook that runs only when isSleeping, isPlaying or mood change. This way it makes sure that the interval is created only when isPlaying is true and isSleeping is false.

// Also, useEffect hook has a clean-up function, which is returned from it, that clears the interval when the component is unmounted or any of the variables in the dependency array change.

// You can adjust the time interval passed to setInterval to whatever value you desire. However, it's worth noting that when using setInterval, the interval time is not guaranteed to be exact, it can vary depending on the browser and device.

// Also, when the component that uses this effect is unmounted, the interval will still be running, and cause a memory leak, so it's important to clear the interval when the component is unmounted.