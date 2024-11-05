import { NextPage } from "next";
import { PersonalizeContext } from "../lib/contentstack";
import { useContext, useEffect } from "react";
import Header from "../components/Header";


const Marketer: NextPage = () => {
    const Personalize = useContext(PersonalizeContext);

    const triggerEvent = async () => {

        let p13nAttributes: { marketer: boolean; developer: boolean };
        let eventName: string;

        p13nAttributes = { marketer: true, developer: false };
        eventName = "CtaMarketer";

        // set Personalize attribute for p13nAttributes (marketer, CtaDeveloper, CtaReset).
        // see: Contentstack Dashboard > Personalize project > Events
        await Personalize.set(p13nAttributes);

        // send Personalize event for the experience for eventName (CtaMarketer, CtaDeveloper, CtaReset).
        // see: Contentstack Dashboard > Personalize project > Events
        await Personalize.triggerEvent(eventName);

    };

    useEffect(() => {

        triggerEvent()

    }, [])

    return (
        <>

            <main className="max-w-screen-2xl mx-auto">
                <Header />
                <h1 className="text-4xl font-bold mb-4">MARKETER PAGE</h1>

                <br />

                <p>
                    Marketers play a pivotal role in the success of businesses by bridging the gap between products and consumers. Their primary goal is to understand market trends, customer needs, and competitive landscapes to develop effective strategies that promote products and services. A successful marketer combines creativity and analytical skills to design campaigns that resonate with target audiences, leveraging various channels such as social media, email, and traditional advertising. They assess performance metrics to refine strategies continually, ensuring a dynamic approach to reach and engage customers. Marketers are not just sellers; they are storytellers who craft compelling narratives that connect with people and foster brand loyalty. Whether working independently or as part of a team, their contribution is invaluable in driving growth and enhancing brand recognition in today&apos;s fast-paced market environment. If you need assistance with your marketing strategies or want to discuss how to effectively engage with your audience, feel free to reach out!

                    <br />
                    <br />

                    Marketers play a crucial role in driving the success of businesses across various industries. Their primary responsibility is to identify customer needs and create strategies that effectively promote products or services to meet those demands. This involves conducting market research, analyzing consumer behavior, and developing targeted advertising campaigns. Marketers utilize various channels, including digital platforms, social media, and traditional media, to reach their audience and engage them effectively. By understanding market trends and leveraging data analytics, marketers can create personalized experiences that foster brand loyalty and boost sales.

                    <br />
                    <br />

                    The landscape of marketing is continually evolving, particularly with the rise of technology and digital marketing strategies. Today&apos;s marketers must be adept at using tools like search engine optimization (SEO), content marketing, email campaigns, and social media outreach to capture consumer attention in a crowded marketplace. They must also remain agile to adapt to changes in consumer preferences and advancements in technology. As the need for innovative solutions grows, marketers are increasingly collaborating with cross-functional teams to enhance brand presence and create integrated marketing strategies that resonate with target demographics. This multifaceted role requires a blend of creativity, analytical skills, and a deep understanding of market dynamics.
                </p>
            </main>
        </>
    )

}

export default Marketer;