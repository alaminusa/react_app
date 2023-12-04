import Flex from "../Flex"
import Images from "../Images"
import Slash from "../../assets/slash.png"
import Heading from "../Heading"
import Container from "../Container"
import Paragraph from '../Paragraph'
import orange from "../../assets/orrangearrow.png"
import Jane from "../../assets/Jhoncopper.png"
import Elena from "../../assets/eleanor.png"



const Who = () => {
  return (
    <section className="mt-12 pb-10">
        <Container className="max-w-6xl">
            <Flex>
                <div className="w-1/3 rounded-lg hover:bg-[#D8EAFF] py-3">
                  <Images src={Slash} className=""/>
                  <Heading text="Client Review." as="h3" className="text-4xl text-primaryColor font-open font-bold mt-5"/>
                  <Paragraph text="people use digital devices instead of visiting physical shops, digital marketing campaigns are becoming more prevalent and efficient." className="font-paprika text-[#6C7D93] text-lg font-normal "/>
                  <Images src={orange} className=""/>
                </div>
                <div className="w-1/3 rounded-lg hover:bg-[#D8EAFF] px-16 py-3 mx-9">
                  <Paragraph text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient." className="font-paprika text-[#6C7D93] text-lg font-normal "/>
                  <Images src={Jane} className="ml-[-50px]"/>
                </div>
                <div className="w-1/3 rounded-lg hover:bg-[#D8EAFF] px-16 py-3 mx-9">
                  <Paragraph text="Content Marketing is the other fold of online advertisement. If you are looking to build. digital marketing campaigns are becoming more prevalent and efficient." className="font-paprika text-[#6C7D93] text-lg font-normal "/>
                  <Images src={Elena} className="ml-[-50px]"/>
                </div>
            </Flex>
        </Container>
    </section>
    
  )
}

export default Who