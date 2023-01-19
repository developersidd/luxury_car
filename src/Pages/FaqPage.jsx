import Faq from "../components/Faq/Faq";
import img from "../images/faq.svg"

const FaqPage = () => {


    const data = [
        {
            question: "Do Luxury Car have any Delivery option",
            answer: "Animi, iusto? Sequi quibusdam distinctio, magnam nam, dolore suscipit velit provident eum possimus earum nisi"
        },

        {
            question: "When I will get my car license after purchase",
            answer: "Animi, iusto? Sequi quibusdam distinctio, magnam nam, dolore suscipit velit provident eum possimus earum nisi"
        },
        {
            question: "will Luxury Car open a branch in california",
            answer: "Animi, iusto? Sequi quibusdam distinctio, magnam nam, dolore suscipit velit provident eum possimus earum nisi"
        },
        {
            question: "what's Luxury Car showroom goals",
            answer: "Animi, iusto? Sequi quibusdam distinctio, magnam nam, dolore suscipit velit provident eum possimus earum nisi"
        }
    ];

    return (
        <div className="container mx-auto px-6 py-10 lg:py-20">
            <h2 className=" mb-8 text-2xl md:text-2xl font-semibold font-permanent-marker text-center lg:text-3xl xl:text-4xl">
                Read our
                FAQ </h2>
            <div className="flex  flex-col md:flex-row items-center justify-center1 gap-12">
                <div className="md:w-1/2">
                    <img className="w-full h-full" src={img} alt="faq-banner" />
                </div>
                <div className="md:w-1/2">
                    {
                        data.map((item, n) => {
                            return (
                                <Faq key={n}  {...item} />
                            )
                        })
                    }

                </div>


            </div>

        </div>
    )
}

export default FaqPage
