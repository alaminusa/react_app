import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import Logo from "../../assets/Logo.png"
import List from "../List"
import Button from "../Button"



const Navbar = () => {
  return (
    <nav>
      <Container className="max-w-[1170px">
        <Flex className="justify-between">
            <div className="w-1/4 mt-6">
               <Images src={Logo}/>
            </div>
            <div className="w-1/2 mt-9 me-36">
              <ul>
                <Flex className="justify-between font-semibold font-open inline-block text-lg text-primaryColor">
                  <List href="#" text="Home" className="hover:text-hoverColor"/>
                  <List href="#" text="About " className="hover:text-hoverColor"/>
                  <List href="#" text="Service" className="hover:text-hoverColor"/>
                  <List href="#" text="Portfolio" className="hover:text-hoverColor" />
                  <List href="#" text="Price"  className="hover:text-hoverColor"/>
                  <List href="#" text="Blog"  className="hover:text-hoverColor"/>
                </Flex>
              </ul>
            </div>
              <Button className="border rounded-full text-white font-open font-semibold text-[18px] px-7 delay-150 bg-hoverColor mt-5" text="Contact Us"/>
        </Flex>
    </Container>
    </nav>
  )
}

export default Navbar