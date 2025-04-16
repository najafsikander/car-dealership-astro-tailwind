
import { useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

type Props = {
    news: string[];
}
const NewsDisplay:React.FC<Props> = ({news}) => {

    const [currNewsIndex, setCurrNewsIndex] = useState(0);

    const goLeft = () => currNewsIndex > 0 ? setCurrNewsIndex(currNewsIndex - 1) : setCurrNewsIndex(news.length - 1);
    const goRight = () => currNewsIndex < news.length - 1 ? setCurrNewsIndex(currNewsIndex + 1) : setCurrNewsIndex(0);

    return(
        <>
        <div className="w-full bg-custom_dark_blue flex justify-center text-white py-3">
        <div className="w-2/3 flex justify-between">
            <h4 id="newsDispalay" className="text-lg">{news[currNewsIndex]}</h4>
            <div className="flex flex-col justify-center">
                <div className="flex">
                <MdArrowLeft
              className="text-3xl cursor-pointer hover:scale-110 transition-transform"
              onClick={goLeft}
            />
            <MdArrowRight
              className="text-3xl cursor-pointer hover:scale-110 transition-transform"
              onClick={goRight}
            />
                </div>
            </div>
        </div>
    </div>
        </>
    );
}

export default NewsDisplay;