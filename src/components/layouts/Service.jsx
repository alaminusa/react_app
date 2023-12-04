
import Images from '../Images'
import Slash from "../../assets/slash.png"
import Heading from '../Heading'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Graph from "../../assets/graph.png"
import Readmore from "../../assets/readmore.png"
import Social from "../../assets/social-media.png"
import Socialmerketing from "../../assets/social-marketing.png"

const Service = () => {

  return (
    
      <section className='mt-24 pb-10'>
           <Images src={Slash} className="mx-auto"/>
           <Heading text="Our Services" className="text-center text-5xl font-bold font-open text-primaryColor" as="h3"/>
           <Paragraph text="We have been providing great." className="font-paprika text-center text-[#6C7D93]
           text-lg font-normal "/>
           <Paragraph text="flooring solutions service." className="font-paprika text-center text-[#6C7D93]
           text-lg font-normal "/>
           <Container className="max-w-6xl mt-14">
            <Flex>
                <div className="w-1/3 drop-shadow-xl bg-slate-200 rounded-2xl py-10 px-3 hover:bg-[#D8EAFF]">
                   <Images src={Graph} className="mx-auto"/>
                  <Heading text="MARKETING STRATEGY" className="text-center text-3xl font-semibold font-open text-primaryColor mt-3" as="h4"/>
                  <Paragraph text="Social Media has changed the way we interact & do business while creating" className="font-paprika text-center text-[#6C7D93] text-lg font-normal py-6"/>
                  <Images src={Readmore} className="mx-auto"/>
                </div>
                <div className="w-1/3 drop-shadow-xl bg-slate-200 rounded-2xl py-10 px-4 hover:bg-[#D8EAFF] mx-2">
                   <Images src={Social} className="mx-auto"/>
                   <Heading text="Social Marketing" className="text-center text-3xl font-semibold font-open text-primaryColor mt-3" as="h4"/>
                   <Paragraph text="Social Media has changed the way we interact & do business while creating" className="font-paprika text-center text-[#6C7D93] text-lg font-normal py-6"/>
                   <Images src={Readmore} className="mx-auto"/>
                </div>
                <div className="w-1/3 drop-shadow-xl bg-slate-200 rounded-2xl py-10 px-4 hover:bg-[#D8EAFF]">
                   <Images src={Socialmerketing} className="mx-auto"/>
                   <Heading text="Content Marketing" className="text-center text-3xl font-semibold font-open text-primaryColor mt-3" as="h4"/>
                   <Paragraph text="Social Media has changed the way we interact & do business while creating" className="font-paprika text-center text-[#6C7D93] text-lg font-normal py-6"/>
                   <Images src={Readmore} className="mx-auto"/>
                </div>
                
            </Flex>
           </Container>
      </section>
  )
}

export default Service