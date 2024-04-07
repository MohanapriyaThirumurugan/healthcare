import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Health from './Components/Health'
import Resources from './Components/Resources'
import Topbar from './Components/Topbar'
import Contact from './Components/Contactus'
import Abouts from './Components/Abouts'
import { useState } from 'react'

function App() {
  let [tip ,settips]=useState([
    {
      name:"StayActive",
      des:"Regular physical activity is essential for maintaining overall health. Encourage your audience to engage in activities they enjoy, such as walking, jogging, swimming, or yoga",
      img:"https://www.shutterstock.com/image-vector/yoga-online-home-stay-concept-260nw-1725006667.jpg",
      src:"https://www.womenshealth.gov/getting-active/how-be-active-health"
    },
    {
       name:"Eat a Balanced Diet",
       des:" Emphasize the importance of eating a variety of fruits, vegetables, whole grains, lean proteins, and healthy fats. Encourage portion control and moderation in indulgent foods.",
       img:"https://www.shutterstock.com/image-vector/3d-isometric-flat-vector-conceptual-600nw-2092992811.jpg",
       src:"https://www.maxhealthcare.in/blogs/what-is-a-balanced-diet"
    },
    {
      name:"Stay Hydrated",
      des:"Drinking an adequate amount of water is crucial for proper bodily function. Encourage your audience to drink plenty of water throughout the day and limit sugary beverages.",
      img:"https://img.freepik.com/free-vector/girl-drinking-bubble-tea-concept-illustration_114360-20518.jpg?size=338&ext=jpg&ga=GA1.1.1373034878.1712461438&semt=ais",
      src:"https://www.unlockfood.ca/en/articles/water/facts-on-fluids-how-to-stay-hydrated.aspx"
   },
   {
    name:"Get Enough Sleep:",
    des:"Quality sleep is essential for overall well-being. Encourage your audience to establish a consistent sleep schedule and create a relaxing bedtime routine.",
    img:"https://thumbs.dreamstime.com/b/get-enough-sleep-d-vector-isolated-illustration-woman-cuddling-pillow-flat-character-cartoon-background-colorful-editable-scene-268804486.jpg",
    src:"https://paperpile.com/s/sleep-citation-style/"
 },
 {
  name:"Manage Stress: ",
  des:"Chronic stress can have a negative impact on both physical and mental health. Encourage stress management techniques such as deep breathing exercises, meditation, mindfulness, or engaging in hobbies.",
  img:"https://static2.bigstockphoto.com/0/6/4/large2/460460041.jpg",
  src:"https://ggu.libguides.com/citation_manager"
},
{
  name:"Practice Good Hygiene",
  des:"Remind your audience about the importance of regular handwashing, especially during cold and flu seasons. Encourage proper hygiene practices to prevent the spread of germs.",
  img:"https://www.shutterstock.com/image-vector/vector-illustration-washing-hands-260nw-1123746773.jpg",
  src:"https://www.healthdirect.gov.au/personal-hygiene"

},
{
  name:"Stay Up to Date with Screenings and Check-ups:",
  des:"Regular health screenings and check-ups can help detect potential health issues early. Encourage your audience to schedule regular appointments with their healthcare providers.",
  img:"https://miro.medium.com/v2/resize:fit:1400/0*WgIeGjuJWbDUvB6t.jpg",
  src:"https://www.allaboutvision.com/conditions/refractive-errors/screen-time-by-age/"
},
{
  name:"Wear Sunscreen",
  des:" Protecting the skin from harmful UV rays is crucial for preventing skin cancer and premature aging. Encourage your audience to wear sunscreen with SPF 30 or higher when spending time outdoors.",
  img:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNjI1LTA4LWJhc2Vncm91cC1ubi0wMDctdGV4dC1sbC0wMDFhLmpwZw.jpg",
  src:"https://en.wikipedia.org/wiki/Wear_Sunscreen"
},
{
  name:"Limit Alcohol and Avoid Smoking",
  des:"Encourage moderation in alcohol consumption and emphasize the importance of avoiding smoking and exposure to secondhand smoke.",
  img:"https://www.shutterstock.com/image-vector/warning-sign-avoid-alcohol-crossed-600nw-1294512040.jpg",
  src:"https://en.wikipedia.org/wiki/Alcohol_consumption_recommendations#:~:text=The%20daily%20limits%20range%20from,168%20g%2Fweek%20for%20women."

},
{
  name:"Prioritize Mental Health:",
  des:"Mental health is just as important as physical health. Encourage your audience to prioritize self-care, seek support when needed, and destigmatize mental health issues",
  img:"https://upload.wikimedia.org/wikipedia/commons/b/b4/Free_3D_Illustration_Of_A_Mental_Health_Conceptual_Image_By_Quince_Media_07.jpg",
  src:"https://nap.nationalacademies.org/read/26015/chapter/9"

},
  ])

  
  return (
    <>
    <BrowserRouter>
    <Topbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/health' element={<Health tip={tip} settips={settips}/>}/>
      <Route path='/resources' element={<Resources tip={tip} settips={settips}/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<Abouts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App