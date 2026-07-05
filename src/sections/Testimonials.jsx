import {TitleHeader} from "../component/TitleHeader.jsx";
import {testimonials} from "../constantes/index.js";
import {GlowCard} from "../component/GlowCard.jsx";

const Testimonials = () => {
    return (
    <section id="testimonials" className="flex-center section-padding ">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader title="The Values That Guide My Work" sub="🧠 Developer Mindset" />

            <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
                {testimonials.map(({imgPath,name,mentions ,review})=>(
                    <GlowCard card={{review}}>
                        <div className="flex items-center gap-3">
                            <div>
                                <img className="w-8 bg-black-50 rounded-full" src={imgPath} alt={name}/>
                            </div>
                            <div>
                                <p className="font-bold">{name}</p>
                                <p className="text-white-50">{mentions}</p>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>

        </div>

    </section>
    )
}
export default Testimonials
