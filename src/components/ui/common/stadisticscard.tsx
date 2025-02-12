"use client"
import CountUp from 'react-countup';
import { StadisticsCardProps } from '@/lib/definitions';
import phrases from '@/assets/locales/es.json';
import MoreButton from '@/components/ui/common/MoreButton';

const StadisticsCard = ({ value, text }: StadisticsCardProps) => {
    return (
        <div className="py-10 px-9 hover:border-2 hover:bg-[#D3934633] hover:border-foundationcoloryellow1 rounded-lg transition duration-300 min-h-[200px] flex flex-col justify-between">
            <div>
                <div className="text-4xl font-bold text-foundationcoloryellow1 mb-2">
                    <p className="text-6xl">+<CountUp start={0} end={value} duration={2.5}></CountUp></p>
                </div>
                <p className="text-foundationcolorblack dark:text-foundationcolorblack mb-4">{text}</p>
            </div>
            <MoreButton text={phrases.buttons[0].more || 'Conoce más'} />
        </div>
    );
}
export default StadisticsCard;