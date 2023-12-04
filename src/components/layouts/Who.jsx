import Flex from "../Flex"
import Images from "../Images"
import group from "../../assets/weare.png"
import Slash from "../../assets/slash.png"
import Heading from "../Heading"
import Paragraph from '../Paragraph'
import Container from "../Container"
import Whopartner from "../../assets/whopartner.png"



const Who = () => {
  return (
    <section className="mt-12 pb-7">
        <Container className="max-w-6xl">
            <Flex>
              <Images src={group} className="mx-auto"/>
               <div className="text-inherit">
                <div className="ms-24">
                  <Images src={Slash} className=""/>
                   <Heading text="Who We Are" as="h3" className="text-5xl text-primaryColor font-open font-bold"/>
                   <Paragraph text="Use customer data to build great and solid product experiences that convert. Digital marketing’s    development has changed the way brands and businesses use technology for marketing." className="text-lg font-paprika font-normal leading-9 text-[#6C7D93]"/>
                <Paragraph text="Join the 10.000+ Companys Trusting" className="text-xs font-paprika font-normal text-[#6C7D93]"/>
                </div>
                <Images src={Whopartner} className="ms-16 mt-8"/>
             </div>
        </Flex>
        </Container>
    </section>
    
  )
}

export default Who