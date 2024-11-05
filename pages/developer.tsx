import { NextPage } from "next";
import { PersonalizeContext } from "../lib/contentstack";
import { useContext, useEffect } from "react";
import Header from "../components/Header";


const Developer: NextPage = () => {
    const Personalize = useContext(PersonalizeContext);

    const triggerEvent = async () => {

        let p13nAttributes: { marketer: boolean; developer: boolean };
        let eventName: string;

        p13nAttributes = { marketer: false, developer: true };
        eventName = "CtaDeveloper";

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
                <h1 className="text-4xl font-bold mb-4">DEVELOPER PAGE</h1>

                <br />

                <p>
                    A developer is a professional who is skilled in the art of software creation, responsible for transforming ideas and concepts into functional digital applications. At the heart of their work lies a deep understanding of programming languages, frameworks, and development tools, which they wield with precision and creativity. Developers are the architects of the digital world, meticulously crafting lines of code that breathe life into software, apps, and websites. Their role is multifaceted, blending technical expertise with problem-solving prowess, as they tackle complex challenges and engineer solutions that enhance user experiences and drive innovation.
                    From the backend infrastructure that powers online services to the sleek, intuitive interfaces that captivate users, developers are the driving force behind the seamless digital experiences that have become integral to our daily lives. With an unwavering commitment to continuous learning and a keen eye for detail, developers are the unsung heroes who transform the abstract into the tangible, pushing the boundaries of what&apos;s possible in the digital realm. Their work is a testament to the power of human ingenuity, transforming the way we interact with technology and shaping the future of our digital landscape.

                    <br />
                    <br />

                    A developer is a professional who specializes in the creation and implementation of software applications, websites, and digital systems. At the core, a developer&apos;s primary responsibility is to write and maintain code - the fundamental building blocks that make up any digital product or platform. However, the role of a developer extends far beyond just coding. They are problem-solvers, innovative thinkers, and strategic collaborators who work closely with designers, project managers, and other stakeholders to bring digital visions to life. Developers must possess a diverse skillset, blending technical expertise in programming languages, frameworks, and software development lifecycles with strong analytical abilities, attention to detail, and creative problem-solving. The day-to-day of a developer can vary greatly, from meticulously debugging complex algorithms to ideating new features and architectures that enhance user experiences. They may work independently or as part of a larger development team, leveraging the power of collaboration to deliver high-quality, scalable, and efficient digital solutions. Ultimately, developers are the unsung heroes who transform abstract ideas into tangible, interactive technologies that power our digital world and enhance the way we live, work, and connect.


                </p>
            </main>
        </>
    )

}

export default Developer;