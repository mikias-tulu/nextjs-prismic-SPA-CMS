import { PrismicRichText } from '@prismicio/react';

interface RichTextProps {
  field: any;
  className?: string; 
}

const RichText: React.FC<RichTextProps> = ({ field, className }) => {
  return (
    field && (
      <div className={className}>
        <PrismicRichText field={field} />
      </div>
    )
  );
};

export default RichText;
