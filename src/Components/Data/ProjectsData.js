import html from '../../assets/html5.png';
import css from '../../assets/css3.png';
import java from '../../assets/java.png';
import django from '../../assets/django.png';

const python = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
const js = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
const android = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Android_Studio_Icon_3.6.svg/1900px-Android_Studio_Icon_3.6.svg.png"
const next = "https://www.svgrepo.com/show/354113/nextjs-icon.svg"
const tailwind = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
const MongoDB = "https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png"


const data = [
      {
        name:"GFG Students chapter GHRCEM",
        builder:[html,,next,tailwind,MongoDB],
        desc: "This is a web application made for the GFG Students Chapter GHRCEM. This app is built using NextJs with the interation of tailwind CSS for the styling of different components within the app. MongoDB is used as the database for storing the data in the backend.",
        github:"https://gfg-ghrcem.vercel.app/"
},
      {
        name:"Tours and Travels App",
        builder:[html,css,js,django,next],
        desc: "The application is used for booking the packages for the tours. It is build using HTML, CSS and JavaScript. The backend is build in django framework. The database used here is the MySQL.",
        github:"https://github.com/SaurabhATalele/Tours-Management-System-.git"
},
      
      {
        name:"Android App for PIB",
        builder:[python,django,android,java],
        desc: "The application is built for the Press Information Beauro of India. The app is built using the Android Studio and the backend is build in django framework. The database used here is the firebase database and the messaging is done by the same.",
        github:"https://github.com/SaurabhATalele/PIB-News-Extractor"
},
      {
        name:"Web Based Cloud App",
        builder:[python,django,html,css,js],
        desc: "This is a web application that can store your data on the cloud that has various backup options and users can access thier data from anywhere they want to.",
        github:"https://github.com/SaurabhATalele/cloud-app-using-django"
}, 

]

export default data;
