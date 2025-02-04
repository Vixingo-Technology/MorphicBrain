import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import Skull from "/img/Head-for-Explore-Transparent.png";
import GetStarted from "../buttons/GetStarted";

const moduleData = [
    {
        title: "Adaptive AI Module",
        tooltipContent: {
            what: "Adaptive AI Module leverages AI techniques to adapt to changing conditions in real-time.",
            function: [
                "Personalized user experiences.",
                "Real-time decision-making enhancements.",
                "Efficient learning and adaptation processes.",
            ],
            usage: [
                "Developing adaptive learning systems.",
                "Enhancing personalized recommendations.",
                "Improving automated responses.",
            ],
        },
    },
    {
        title: "Adaptive Algorithm Generator",
        tooltipContent: {
            what: "A tool that generates algorithms dynamically to suit specific tasks and conditions.",
            function: [
                "Automated algorithm generation.",
                "Optimization for specific applications.",
                "Customizable solutions for different domains.",
            ],
            usage: [
                "Creating tailored machine learning algorithms.",
                "Improving data analysis workflows.",
                "Automating code generation for repetitive tasks.",
            ],
        },
    },
    {
        title: "Analytics Reporting",
        tooltipContent: {
            what: "Provides insights and metrics through detailed analytical reports.",
            function: [
                "Data visualization and trend analysis.",
                "Real-time report generation.",
                "Customizable dashboards for better decision-making.",
            ],
            usage: [
                "Monitoring business performance.",
                "Generating sales and revenue reports.",
                "Analyzing customer behavior and trends.",
            ],
        },
    },
    {
        title: "Blockchain",
        tooltipContent: {
            what: "A distributed ledger technology for secure and transparent transactions.",
            function: [
                "Secure data storage.",
                "Immutable transaction records.",
                "Decentralized system architecture.",
            ],
            usage: [
                "Developing cryptocurrency systems.",
                "Enhancing supply chain transparency.",
                "Creating secure voting platforms.",
            ],
        },
    },
    {
        title: "Computer Vision",
        tooltipContent: {
            what: "A technology that enables machines to interpret and process visual data.",
            function: [
                "Object detection and recognition.",
                "Image and video analysis.",
                "Facial recognition systems.",
            ],
            usage: [
                "Autonomous vehicles and drones.",
                "Healthcare imaging diagnostics.",
                "Surveillance and security systems.",
            ],
        },
    },
    {
        title: "Data Collection",
        tooltipContent: {
            what: "A process to gather, organize, and manage data from various sources.",
            function: [
                "Automated data scraping.",
                "Real-time data aggregation.",
                "Integration with multiple data sources.",
            ],
            usage: [
                "Building data lakes for analytics.",
                "Monitoring IoT devices.",
                "Enhancing research with structured data.",
            ],
        },
    },
    {
        title: "DaVinci Studio",
        tooltipContent: {
            what: "An advanced design tool for creating and visualizing AI-driven solutions.",
            function: [
                "Designing AI workflows.",
                "Interactive prototyping for machine learning models.",
                "Visualization of AI processes.",
            ],
            usage: [
                "Creating end-to-end AI pipelines.",
                "Collaborating on AI projects visually.",
                "Building rapid AI prototypes.",
            ],
        },
    },
    {
        title: "Descartes",
        tooltipContent: {
            what: "A logical reasoning and analytics module inspired by Cartesian philosophy.",
            function: [
                "Performing deep analytical reasoning.",
                "Simplifying complex datasets.",
                "Developing logical decision-making processes.",
            ],
            usage: [
                "Analyzing scientific data.",
                "Optimizing logical workflows.",
                "Enhancing decision-making systems.",
            ],
        },
    },
    {
        title: "Harmonia",
        tooltipContent: {
            what: "A module designed to create synergy between multiple AI systems.",
            function: [
                "Integrating disparate AI tools.",
                "Coordinating AI workflows.",
                "Improving system efficiency through collaboration.",
            ],
            usage: [
                "Synchronizing AI processes in enterprises.",
                "Building cooperative multi-agent systems.",
                "Streamlining AI tool integration.",
            ],
        },
    },
    {
        title: "Neuromorphic Computing",
        tooltipContent: {
            what: "Mimics the neural structure of the human brain to perform complex computations.",
            function: [
                "Energy-efficient computation.",
                "Processing unstructured data effectively.",
                "Real-time sensory data interpretation.",
            ],
            usage: [
                "Building advanced robotics systems.",
                "Developing brain-inspired AI algorithms.",
                "Enhancing edge computing devices.",
            ],
        },
    },
    {
        title: "NLP Module",
        tooltipContent: {
            what: "Enables machines to process and analyze natural human language.",
            function: [
                "Text and speech analysis.",
                "Language translation and summarization.",
                "Sentiment analysis and emotion detection.",
            ],
            usage: [
                "Creating conversational AI systems.",
                "Enhancing search engine capabilities.",
                "Analyzing social media content.",
            ],
        },
    },
    {
        title: "Quantum-Inspired Optimization",
        tooltipContent: {
            what: "Applies quantum computing principles to solve optimization problems efficiently.",
            function: [
                "Enhanced optimization techniques.",
                "Solving complex mathematical problems.",
                "Boosting computational performance.",
            ],
            usage: [
                "Improving logistics and supply chain operations.",
                "Enhancing machine learning training.",
                "Optimizing financial portfolios.",
            ],
        },
    },
    {
        title: "Virtual Swamp",
        tooltipContent: {
            what: "An advanced cyber defense module using intelligent deception tactics.",
            function: [
                "Threat Detection: Identifies and tracks sophisticated cyber threats in real-time.",
                "Deception: Attracts and counteracts malicious activities.",
                "Automated Response: Collaborates with XDR for swift neutralization.",
            ],
            usage: [
                "Proactive Defense: Create a deceptive environment.",
                "Threat Analysis: Gain insights into attack methods.",
                "Continuous Learning: Ensures protection against threats.",
            ],
        },
    },
    {
        title: "WOM E-commerce + BC",
        tooltipContent: {
            what: "A platform integrating e-commerce with blockchain technology.",
            function: [
                "Secure payment processing.",
                "Immutable transaction records.",
                "Smart contracts for automated workflows.",
            ],
            usage: [
                "Developing decentralized marketplaces.",
                "Enhancing e-commerce trust and transparency.",
                "Implementing loyalty reward systems.",
            ],
        },
    },
    {
        title: "XDR Module",
        tooltipContent: {
            what: "Extended Detection and Response for advanced cybersecurity.",
            function: [
                "Threat detection across all endpoints.",
                "Real-time incident response.",
                "Integrated data analysis for security insights.",
            ],
            usage: [
                "Protecting enterprise networks.",
                "Responding to cyber incidents swiftly.",
                "Enhancing security monitoring systems.",
            ],
        },
    },
    {
        title: "TrikTrak",
        tooltipContent: {
            what: "A tracking and analytics module for monitoring AI workflows.",
            function: [
                "Real-time workflow tracking.",
                "Performance monitoring.",
                "Error detection and resolution.",
            ],
            usage: [
                "Optimizing AI model performance.",
                "Tracking development cycles.",
                "Ensuring process compliance.",
            ],
        },
    },
    {
        title: "Predictive Analytics",
        tooltipContent: {
            what: "Uses statistical techniques to predict future trends and behaviors.",
            function: [
                "Trend forecasting.",
                "Identifying patterns in large datasets.",
                "Improving decision-making accuracy.",
            ],
            usage: [
                "Optimizing marketing campaigns.",
                "Improving demand forecasting.",
                "Enhancing risk management strategies.",
            ],
        },
    },
];

const OldCap = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
    const navigate = useNavigate();
    const mobileMenuRef = useRef(null);
    const registerDropdownRef = useRef(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const handleRegisterOptionClick = (type) => {
        setShowRegisterDropdown(false);
        navigate(`/register?type=${type}`);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                registerDropdownRef.current &&
                !registerDropdownRef.current.contains(event.target)
            ) {
                setShowRegisterDropdown(false);
            }
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)
            ) {
                closeMobileMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="morphicbrain capabilities-page-morphic">
            <main className="morphicbrain-main">
                <div className="box">
                    <section className="about-container">
                        <div className="capabilities-content">
                            <div className="capabilities-left">
                                <div className="insulium-part">
                                    <h4>INSULIUM</h4>
                                    <div className="line-insulium"></div>
                                    <p>
                                        MorphicBrain <br /> inner-sanctum.{" "}
                                        <br /> AI Core Engine <br /> &
                                        Mechanisms
                                    </p>
                                </div>
                                <img src={Skull} alt="" />
                            </div>
                            <div className="capabilities-right">
                                <h3>Modules Cortex</h3>
                                <div className="cr-modules-content">
                                    {moduleData.map((module, index) => (
                                        <div
                                            className="crm-content"
                                            key={index}
                                            onMouseEnter={() =>
                                                setHoveredIndex(index)
                                            }
                                            onMouseLeave={() =>
                                                setHoveredIndex(null)
                                            }
                                        >
                                            <span className="hover-para">
                                                {module.title}
                                            </span>
                                            {hoveredIndex === index && (
                                                <div className="hover-box-crm">
                                                    <div className="tooltip-pointer"></div>
                                                    <h5>{module.title}</h5>
                                                    <h6>What it is</h6>
                                                    <p>
                                                        {
                                                            module
                                                                .tooltipContent
                                                                .what
                                                        }
                                                    </p>
                                                    <h6>Function</h6>
                                                    {module.tooltipContent.function.map(
                                                        (item, i) => (
                                                            <p key={i}>
                                                                {item}
                                                            </p>
                                                        )
                                                    )}
                                                    <h6>Usage</h6>
                                                    {module.tooltipContent.usage.map(
                                                        (item, i) => (
                                                            <p key={i}>
                                                                {item}
                                                            </p>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <p className="more-for-client">
                                        And Many More...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="insulium-section">
            <div class="insulium-container">
              <div class="drop">
                <div class="content">
                  <h2>01</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, magnam! Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Rerum, magnam!Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Rerum, magnam!Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Rerum,
                    magnam!Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Rerum, magnam!
                  </p>
                  <a href="#">Read More</a>
                </div>
              </div>
            </div>
          </section> */}
                    <section className="insulium-section">
                        <div className="bubble-wrapper">
                            <div className="bubble">
                                <div className="mini-bubbles">
                                    <div className="mini-bubble"></div>
                                    <div className="mini-bubble"></div>
                                </div>
                                <div className="content">
                                    <h1>
                                        MorphicBrain's Insulium: <br />
                                        The Core of Innovation
                                    </h1>
                                    <p>
                                        MorphicBrain’s Insulium (Insula) is
                                        where the magic takes place—the inner
                                        sanctum and the very core engine of our
                                        advanced AI platform. Within this
                                        dynamic hub, the true power of
                                        MorphicBrain is realized.
                                        <br />
                                        The Insulium is composed of tightly
                                        interconnected and interdependent
                                        modules that work seamlessly together.
                                        These modules process clients' needs
                                        with precision, analyzing complex data,
                                        predicting trends, and algorithmically
                                        adjusting parameters to deliver optimal
                                        solutions. The results are then
                                        seamlessly redistributed onto the
                                        client’s hybrid dashboard, providing
                                        actionable insights and recommendations.
                                        <br />
                                        But the capabilities of the Insulium go
                                        beyond mere processing and adjustments.
                                        It also offers intelligent suggestions
                                        and even predicts potential outcomes
                                        based on the data it processes. This
                                        ensures that clients can make
                                        well-informed decisions, leveraging the
                                        full potential of MorphicBrain's
                                        adaptive and self-evolving AI engine.
                                        <br />
                                        By harnessing the power of the Insulium,
                                        businesses can unlock new levels of
                                        efficiency, innovation, and competitive
                                        advantage, turning their data into a
                                        strategic asset.
                                    </p>
                                    <h5>
                                        You too, no matter how small your
                                        project or company <br />
                                        may be, can have the power of
                                        MorphicBrain <br />
                                        at your fingertips, right from your desk
                                        or PC.
                                    </h5>
                                    <h6>
                                        Unlock the full potential of AI with
                                        MorphicBrain!
                                    </h6>
                                    <span>And</span>
                                    <h4>
                                        "Put a Roaring Lion in your business!"
                                    </h4>
                                    <p>
                                        Register now and select our Trial Plan
                                        to experience the power of our AI
                                        SuperBrain. You can <br /> always update
                                        your plan later to suit your evolving
                                        needs.
                                    </p>
                                    <h6>
                                        Don't miss out—start your journey with
                                        MorphicBrain today!
                                    </h6>
                                    <div
                                        className="register-dropdown-container insulium-register"
                                        ref={registerDropdownRef}
                                    >
                                        <GetStarted />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default OldCap;
