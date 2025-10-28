import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface StoryCardProps {
    quote: string;
    author: string;
    location: string;
    imageUrl: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ quote, author, location, imageUrl }) => {
    const { t } = useLanguage();
    return (
        <div className="p-4 pt-2">
            <div className="flex flex-col items-stretch justify-start rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] bg-card-light dark:bg-card-dark">
                <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover" style={{backgroundImage: `url("${imageUrl}")`}}></div>
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 p-4">
                    <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">“{quote}”</p>
                    <div className="flex items-end gap-3 justify-between">
                        <div className="flex flex-col gap-0.5">
                            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-normal">{author}</p>
                            <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">{location}</p>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-medium leading-normal shadow-sm hover:opacity-90 transition-opacity">
                            <span className="truncate">{t('story_cta')}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Stories: React.FC = () => {
    const { t } = useLanguage();

    const storiesData = [
        { quoteKey: 'story_1_quote', authorKey: 'story_1_author', locationKey: 'story_1_location', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOWkXwNenF0yzqei6JkcViEbDUTrkVVawzA7aX_kRPiqWFGtRedydwAfNLKGEeEv6rnAM8KrCcQ8Y_9Z1I9GgDPkFXX04ccCVtXwTaMOdFOK2I0lWtpV-nJ5a9sgN4RAdN30fV4mXqDrXsZjuT76ZtdpwaPx2jDO3Zhn6jHDpluPY4INMPptwsAo1LPt88Ov169ycYRG5BID_rZ66VpmdB7gv7GZhuc8AvneZsbbux7ufFoUUYQ98mZp2LyS_CnO0Q7OHvgaYNmuM' },
        { quoteKey: 'story_2_quote', authorKey: 'story_2_author', locationKey: 'story_2_location', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtjiXjL797SiblXdgV0IXoX7RToJQ8aYyu5EeI1wvAHBJEF7JlEndr95901eSscQO-eyqsHP2Iv9oz2Nx4csqpjaE2jK5xAVrMJ6wPNfJQsAgdNilPuIiriYrBhstZrpT1WF2pEZIktifn6kOp9XOpbrrW7RZy2lut7x2jRu35yDjr7PluMEvIu6kww3DlWxx8oSfX3kmNwIzrEhF3btGVdPU79S12iWCLe1GvuKOIQT04xT8D3tw5icqlw5fXzEhP_klMNbcwWwo' },
    ];

    return (
        <section id="historias" className="flex flex-col pb-8">
            <h2 className="text-text-light dark:text-text-dark tracking-tight text-[32px] font-bold leading-tight px-4 text-left pb-3 pt-6">{t('stories_title')}</h2>
            {storiesData.map((story, index) => (
                 <StoryCard 
                    key={index}
                    quote={t(story.quoteKey)}
                    author={t(story.authorKey)}
                    location={t(story.locationKey)}
                    imageUrl={story.imageUrl}
                />
            ))}
             <div className="px-4 py-4">
                <hr className="border-t border-border-color dark:border-gray-700"/>
            </div>
        </section>
    );
};
