
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useRef} from "react";
gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {

    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


useGSAP(()=>{
    const projects= [project1Ref.current,project2Ref.current,project3Ref.current];
    projects.forEach((card,index)=>{
        gsap.fromTo(card,
            {
                y:50,
                opacity: 0,
            },{
                y:0,
                opacity:1,
                duration:1,
                delay:0.3 * (index +1),
                scrollTrigger:{
                    trigger:card,
                    start:'top bottom-=100'
                }
            })
    })
    gsap.fromTo(sectionRef.current,{opacity:0},{opacity:1,duration:1.5})
},[])

    return (
        <div id="work" className="app-showcase">

            <div ref={sectionRef} className="w-full">
            <div className="showcaselayout">
                {/* LEFT */}
            <div ref={project1Ref} className="first-project-wrapper" >
<div><div className="image-wrapper">
    <img src="/images/project1.png" alt="Ryde"/>
</div>
    <div className="text-content">
        <h2>Enterprise Network Infrastructure (SOC Project)
        </h2>
        <p>Role: Network Engineer</p>
        <p className="text-white-50 md:text-xl">A secure enterprise network designed using pfSense to deliver reliable connectivity and strong security. The project includes firewall configuration, VLAN segmentation, routing, and network services to simulate a real-world business environment.
        </p>
    </div></div>
                <div><div className="image-wrapper ">
                    <img src="/images/project4.png" alt="Ryde"/>
                </div>
                    <div className="text-content">
                        <h2>Personal Blog Platform
                        </h2>

                        <p className="text-white-50 md:text-xl">A clean and responsive blogging platform where users can create, publish, and manage articles with ease. Built to provide a smooth reading and writing experience across all devices.
                        </p>
                    </div></div>
            </div>
                {/* RIGHT */}
                <div className="project-list-wrapper overflow-hidden">
                    <div ref={project2Ref} className="project">
                        <div className="image-wrapper bg-white-50">
                            <img src="images/project2.png" alt="liberray management"/>
                        </div>
                        <h2> Railway Ticket Booking System</h2>
                        <p className="text-white-50 md:text-xl">A modern, full-stack railway booking platform that makes reserving train tickets fast and convenient. Users can search routes, book seats, manage their reservations, and enjoy a seamless travel planning experience.
                        </p>
                    </div>
                    <div ref={project3Ref} className="project">
                        <div className="image-wrapper bg-white-50">
                            <img src="images/project3.png" alt="YC"/>
                        </div>
                        <h2> School Management System</h2>
                        <p className="text-white-50 md:text-xl">A comprehensive school management platform designed to simplify academic administration. It enables administrators and teachers to manage students, attendance, grades, classes, and school records through an intuitive dashboard.
                        </p>
                    </div>



                </div>
            </div>

            </div>

        </div>
    )
}
export default ShowcaseSection
