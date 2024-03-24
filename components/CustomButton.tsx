import { Button, Icon } from '@chakra-ui/react'
import { PrismicLink } from '@prismicio/react'


const CustomButton = ({ link, text, colorScheme }) => {
  return (
    <PrismicLink field={link}>
     <Button 
      size="lg"
      data-cta
      colorScheme={colorScheme}
      >
        {text}
       
     </Button>
    </PrismicLink>
  )
}

export default CustomButton