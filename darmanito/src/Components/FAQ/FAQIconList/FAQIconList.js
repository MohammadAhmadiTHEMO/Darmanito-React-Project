import React, {useState} from 'react';

import shortid from 'short-id';

import market from '../../../Assets/Images/Main/market.svg';
import pharmacy from '../../../Assets/Images/Main/pharmacy.svg';
import onlineSchedule from '../../../Assets/Images/Main/onlineSchedule.svg';
import onlineVisit from '../../../Assets/Images/Main/onlineVisit.svg';

import FaqIcon from '../FAQIconList/FAQIcon/FAQIcon';


const FaqIconList = () => {
    const [iconsStat, setIconsState] = useState(
        [{
            img: pharmacy ,
            text: "داروخانه",
            isActive: true,
            id: shortid.generate()
        }, {
            img: market ,
            text: "فروشگاه ",
            isActive: false,
            id: shortid.generate()
        }, {
            img: onlineVisit ,
            text: "ویزیت آنلاین",
            isActive: false,
            id: shortid.generate()
        }, {
            img: onlineSchedule ,
            text: "نوبت دهی آنلاین ",
            isActive: false,
            id: shortid.generate()
        }]);

    const activateIcon = (id) => {
        const newStat = [];
        for (const icon of iconsStat) {
            if (icon.id === id) {
                icon.isActive = true;
                newStat.push(icon)
            } else {
                icon.isActive = false;
                newStat.push(icon)
            }
        }
        setIconsState(newStat);
    }
    return(
        <div className="FaqIconListContainer">
           { iconsStat.map((item , index) => {
                return(<FaqIcon
                    img={item.img}
                    text={item.text}
                    active={item.isActive}
                    key={index}
                    click={()=>activateIcon(item.id)}
                />);
            })}
        </div>
    );
}

export default FaqIconList;