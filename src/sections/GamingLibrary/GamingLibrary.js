import {GaminglCard,SectionHeader,SectionWrapper} from '../../components/index'
import GamingLData from '../../Data/GamingLData'
import './GamingLibrary.css'

 const GamingLibrary = () => {
  const cards= GamingLData.map(card=>{
    return <GaminglCard key={card.id} image={card.image} title={card.title} category={card.category} 
    date_added={card.date_added} download={card.download} hours_played={card.hours_played} />
  })
  return (
    <>
   <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
        <div className='gaming-library-cards'>
         {cards}
       </div>
   </SectionWrapper>
  
  </>
  )
}
export default GamingLibrary
