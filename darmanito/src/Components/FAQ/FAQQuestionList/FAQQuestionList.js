import React from 'react';

import shortid from 'short-id';

import FAQQuestion from './FAQQuestion/FAQQuestion';


const faqQuestions = [
    {
        question: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟",
        answer: "404 not found.",
        id: shortid.generate(),
        active : false
    },
    {
        question: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟ ",
        answer: "404 not found.",
        id: shortid.generate(),
        active : false
    },
    {
        question: "آیا درمانیتو در کرج هم فعالیت میکند؟",
        answer: "خیر، ما هم اکنون در تهران در حال فعالیت هستیم.",
        id: shortid.generate(),
        active : true
    },
    {
        question: "هزینه ای درمانیتو برای پیدا کردن دارو دریافت میکنه؟ ",
        answer: "404 not found",
        id: shortid.generate(),
        active : false
    },
];

const FaqQuestionList = () => {
    return(
        <div className="faqQuestionListContainer">
            {faqQuestions.map((q,index) => {
                return(
                    <FAQQuestion
                    question={q.question}
                    answer={q.answer}
                    active={q.active}
                    key={index}/>
                    );
                })}
            </div>
    );
}

export default FaqQuestionList;