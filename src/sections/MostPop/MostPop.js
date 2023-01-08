import './MostPop.css'




import {Card,SectionHeader,SectionWrapper} from '../../components/index'
import MostPData from '../../Data/MostPData'
const MostPop = () => {
 
  const cards= MostPData.map(card=>{
    return <Card key={Card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
  })
  return (
    <>
      <SectionWrapper>
          <SectionHeader>Most Popular</SectionHeader>
          <div className='most-popular-items'>

           {cards}
           
          </div>
     </SectionWrapper>
    
    </>
  )
}

export default MostPop