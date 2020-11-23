import React from 'react';

const ApplicationItems = () => {
    return (
        <div className='applicationItems'>
            <div className="applicationTextsItems">
                <h1> اپلیکیشن درمانیتو</h1>
                <p> درمانیتو، سامانه هوشمند درمان و سلامت </p>
            </div>
            <div className="applicationButtonItems">
                <button className="applicationButtonsStyleItems">
                    دانلود درمانیتو
                </button>
                <button className="applicationButtonsStyleItems-withoutColor">
                    عضویت داروخانه ها
                </button>
            </div>
        </div>
    );
}

export default ApplicationItems;