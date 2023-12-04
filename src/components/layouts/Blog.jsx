
import Images from '../Images'
import Slash from "../../assets/slash.png"
import Heading from '../Heading'
import Container from '../Container'
import Paragraph from '../Paragraph'
import Blogcard from "../../assets/blogcards.png"

const Service = () => {
  return (
    
      <section className='mt-24 pb-10'>
           <Images src={Slash} className="mx-auto"/>
           <Heading text="Our Latest Blog" className="text-center text-5xl font-bold font-open text-primaryColor" as="h3"/>
           <Paragraph text="We have been providing great." className="font-paprika text-center text-[#6C7D93]
           text-lg font-normal "/>
           <Paragraph text="flooring solutions service." className="font-paprika text-center text-[#6C7D93]
           text-lg font-normal "/>
           <Container className="max-w-6xl mt-14">
           <Images src={Blogcard} className="mx-auto"/>
           </Container>
      </section>
  )
}

export default Service