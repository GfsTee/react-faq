import FAQData from '../data/faqData'
import FAQItem from './FAQItem';


const FAQ = () => {
    console.log(FAQData);
    return (
        <div className="grid">
            {FAQData.map((question, index) => <FAQItem
                key={index}
                faq={question}
            />)}
        </div>
    );
}

export default FAQ;