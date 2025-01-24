import { Card, Button } from 'flowbite-react';

function CardButton({ content, index, handleClick }: {content: string, index: number, handleClick: (answer: string) => void}) {
  const gradientDuoTone = index === 0 ? 'purpleToBlue' : index === 1 ? 'tealToLime' : 'pinkToOrange';
  return (
    <Card className='px-10'>
      <div className='flex flex-col gap-y-4 items-center'>
        <p className="text-center text-2xl font-bold tracking-tight text-gray-900">
          {content}
        </p>
        <Button outline gradientDuoTone={gradientDuoTone} onClick={() => handleClick(content)}>Choose</Button>
      </div>
    </Card>
  );
};

export default CardButton;