
import { Typewriter } from 'react-simple-typewriter'

const TypeWriter = () =>
{
    return(
        <Typewriter
        words={["innovation",'Technology',"the future"]}
        loop={Infinity}
        cursor
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}                                                 
      /> 
    )
}

export default TypeWriter;