import React from 'react';

const ApplicationItems = () => {
    return (
        <div className='application-Items'>
            <div className="application-TextsItems">
                <h1> اپلیکیشن درمانیتو</h1>
                <p> درمانیتو، سامانه هوشمند درمان و سلامت </p>
            </div>
            <div className="application-ButtonItems">
                <button className="application-ButtonsStyleItems">
                    دانلود درمانیتو
                </button>
                <button className="application-ButtonsStyleItems-withoutColor">
                    عضویت داروخانه ها
                </button>
            </div>
        </div>
    );
}

export default ApplicationItems;