import React from 'react';
import classes from './watch.module.css';
import ProductData from './ProductData';


const Watch = (props)=>{
    const locale = 'en';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update
  
    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric'});
    const time_text = date + '\n' + time;
    const heart_rate = "72 BPM"

    let file= ProductData.colorOptions[0].imageUrl

    if(props.c=="Red"){
        file=ProductData.colorOptions[1].imageUrl
    }
    else if(props.c=="Purple"){
        file=ProductData.colorOptions[3].imageUrl
    }
    else if(props.c=="Black"){
        file=ProductData.colorOptions[0].imageUrl
    }
    else {
        file=ProductData.colorOptions[2].imageUrl
    }

    return(
        <div>
            <img src={file} alt="Watch Image"></img>
            <p className={classes.WatchDisplay}>{props.f=='Time'?time_text:heart_rate}</p>
        </div>
    )
}

export default Watch;