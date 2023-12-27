import React, { useEffect, useState } from 'react';
import { throttle } from 'lodash';

interface WindowSize {
    width: number | undefined;
    height: number | undefined;
}

const useScreenSizeListener = () => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: undefined,
        height: undefined,
    });

    const debouncedHandleResize = throttle(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }, 350); // 

    useEffect(() => {
        if (windowSize.width == undefined) debouncedHandleResize()
        if (typeof window !== 'undefined') {
            // Add event listener on component mount
            window.addEventListener('resize', debouncedHandleResize);

            // Remove event listener on component unmount to avoid memory leaks
            return () => {
                window.removeEventListener('resize', debouncedHandleResize);
            };
        }
    }, [debouncedHandleResize]); // Empty dependency array ensures the effect runs only once on mount

    return { windowSize };
};

export default useScreenSizeListener;