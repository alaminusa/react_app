import Flex from "../Flex"
import Images from "../Images"
import Slash from "../../assets/slash.png"
import Heading from "../Heading"
import Container from "../Container"
import List from "../List"
import Groupimg from "../../assets/groupImages.png"



const Who = () => {
  return (
    <section className="mt-12 pb-10">
        <Container className="max-w-6xl">
            <Images src={Slash} className="mx-auto"/>
            <Heading text="Work Showcase" as="h3" className="text-5xl text-primaryColor font-open font-bold text-center"/>
              <ul className="w-1/2">
                <Flex className="justify-between font-semibold font-open inline-block text-lg text-primaryColor mt-8">
                  <List href="#" text="All" className="hover:text-hoverColor"/>
                  <List href="#" text="Digital Mkt " className="hover:text-hoverColor"/>
                  <List href="#" text="Branding" className="hover:text-hoverColor"/>
                  <List href="#" text="Content Mkt" className="hover:text-hoverColor" />
                  <List href="#" text="Social Media Mkt"  className="hover:text-hoverColor"/>
                </Flex>
              </ul>
              <Images src={Groupimg} className="mt-8 h-[500px] w-[100%]"/>
        </Container>
    </section>
    
  )
}

export default Who