import { Button } from '@chakra-ui/react';
import { ComponentProps } from 'react';
import { PrismicLink } from '@prismicio/react';

type PrismicLinkProps = ComponentProps<typeof PrismicLink>;

interface CustomButtonProps {
  link: PrismicLinkProps['field']; 
  text: string;
  colorScheme?: string; 
}

const CustomButton: React.FC<CustomButtonProps> = ({ link, text, colorScheme = "gray" }) => {
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
  );
};

export default CustomButton;
