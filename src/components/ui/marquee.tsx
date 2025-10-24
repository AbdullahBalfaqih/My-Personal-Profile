import { Star } from 'lucide-react';
import { SKILLS } from '@/lib/data';

const Marquee = () => {
    const tags = SKILLS.technical;
  return (
    <div className="relative flex overflow-x-hidden text-white py-8">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {tags.concat(tags).map((tag, index) => (
            <div key={index} className="flex items-center">
                <span className="text-5xl font-semibold mx-6">{tag}</span>
                <Star className="w-10 h-10 text-accent" fill="currentColor"/>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
