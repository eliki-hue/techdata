import React from 'react'
import "./services.css"
import system from "../../images/system-integration.png"
import network from "../../images/network-services.png"
import sdlc from "../../images/sdlc.png"
import networkassesment from "../../images/network services.png"
import managedservices from "../../images/managed services.png"
import networkarray from "../../images/array-networking.png";
import systemmanagement from "../../images/system management.png"
import systemsupport from "../../images/system support.png"
import datacenter from "../../images/data center.png"
import collaboration from "../../images/collaboration.png"
import server from "../../images/server storage.png"

const Services = () => {
  return (
    <div>
        <div className='container mt-5 '>
            <div className='row service-row'>
                <div className='col '></div>
                <div className='col col-empty'></div>
                <div className='col'><h1>Services</h1></div>
                <div className='col col-empty'></div>
                <div className='col '></div>
            </div>
            <div className='row'>
                <div className='col-lg-5'>
                <img className="img " variant="top" src={system} />

                </div>
                <div className='col-lg-7 col-text1'>
                <h4>System Integration</h4>
                    <p>Our customers are increasingly leveraging information technology
                        to accomplish their business objectives – relying heavily on their
                        software, hardware, and network investments to remain
                        competitive, as well as, researching and investing in innovative
                        cloud, mobile and other software-as-a-service models.
                    </p>
                    <p>TECHDATA Technologies provides a full range of services to
                        support our customers’ needs. Our staff adds significant
                        incremental value, offering implementation, customization,
                        migration, training and related services to support our customers’
                        business objectives.
                    </p>
                </div>
            </div>
            <div className='row'>
                {/* <div className='col-lg-7 col-text2'> */}
                    <div className='row'>
                        <div className='col-lg-7 col-text1'>
                            <h2>Infrastructure Solutions</h2>
                            <h4>Enterprise Network Solutions</h4>
                            <p>An Enterprise Network is used by midsize to large organizations to connect their
                                people, devices, and things to applications in the data center and cloud. As
                                organizations grow, the network becomes more complex as additional technology
                                is required for scale and security. Portions of the network are designed for a
                                specific purposes (WANs, Branch/Campus, and Data Center/Hybrid Cloud) and
                                require advanced solutions to achieve better network speed, visibility, and endto-end security.
                            </p>
                    
                        </div>
                        <div className='col-lg-5 col-text2'>
                            <img className="img " style={{height:""}} variant="top" src={network} /><br/>
                    
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-7 col-text1'>
                            <h4>We deliver a full array of Networking services</h4>
                            <ul>
                                <li>Wired or wireless network</li>
                                <li>Multi-services switches</li>
                                <li>Network management</li>
                                <li>Secure Routes</li>
                                <li>SWitched Firewalls</li>
                                <li>VPN</li>
                                <li>Wireless Mesh</li>
                            </ul>
                           
                        </div>
                        <div className='col col-text2'>
                            <img className="img " style={{height:""}} variant="top" src={networkarray} /><br/>
                    
                        </div>
                    </div>       
            </div>

            <div className='row'>
                <div className='col-lg-5'>
                <img className="img " variant="top" src={server} />

                </div>
                <div className='col-lg-7 col-text1'>
                <h4>Servers, Storage & Virtualization Solutions:</h4>
                    <p>
                    TECHDATA Technologies has extensive experience designing and
                    implementing virtualization solutions that reduce the Total Cost of Ownership
                    (TCO) of your IT infrastructure and reduces the IT management burden of key
                    staff members. Our team of virtualization engineers have real-life experience with
                    all the operating systems, virtualization software, and hardware that are required
                    for a successful implementation.
                    </p>
                    <p>
                    TECHDATA Technologies delivers on-premise and hybrid virtualization
                    solutions for the most advanced global enterprise networks, as well as local small
                    and medium-sized businesses. We provide complete end-to-end solutions using a
                    variety of industry-leading technologies, leaving nothing to chance when it comes
                    to your data
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-7 center-block col-text1' style={{textAlign:"center"}}>
                    <h4>Collaboration (Integrated Data, Voice, Video)</h4>
                    <div className='texthanging'><p>Integrated Data, Voice and Video have become popular with businesses because
                        of its flexibility, reliability and cost effectiveness. It allows an enterprise to
                        leverage its internet access circuit by dynamically carrying internet and voice
                        traffic flawlessly over it.</p>
                        </div>
                </div>
                <div className='col-lg-5'>
                    <img className="img " variant="top" src={collaboration} />
                    {/* <img className="img " variant="top" src={systemmanagement} /> */}

                </div>
            </div>

            <div className='row'>
                <div className='col-lg-5'>
                <img className="img " variant="top" src={datacenter} />

                </div>
                <div className='col-lg-7 col-text1'>
                <h2>Data Center Solutions</h2>
                    <p>
                    In this data decade, organisations are looking to get the most out of their data,
                    developing technological breakthroughs that, one way or another, everyone will
                    experience and benefit from. The more effectively an organisation can harness
                    the power of this data, the better – to ensure it can adapt to fast-changing markets
                    and customer dynamics.
                    </p>
                    <p>
                    To enable this, organisations must simplify and automate their IT infrastructure
                    while consolidating systems and services into holistic solutions that will allow
                    more control and clarity. We cannot enable the digital leaders of the future by
                    using the technology approaches of the past; IT needs to evolve to provide a
                    foundation that accelerates digital innovation.
                    TECHDATA Technologies is committed to delivering innovative data center
                    infrastructure that enhances the delivery of new applications and minimizes the
                    cost upgrades comprised of our comprehensive portfolios of fiber and copper
                    structured cabling.
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-7 col-text2'>
                    <h2>System Support</h2>
                    <p>
                    TECHDATA Technologies support services offer flexibility to match the needs
                    of our customers. The majority of our customers prefer a technical support
                    consultancy services model, which is designed to manage and maintain mission
                    critical infrastructure and operations, while allowing their own personnel to focus
                    on their core business. Our services include:
                    </p>
                    <p>
                     Systems Administration
                    
                    Network, Applications, web, database, security administration
                    
                    Moves/Adds/Changes for users, stations, client templates,
                    workgroups, roles, statuses, password policies, system schedules,
                    account codes etc.
                    
                    System Maintenance
                    
                    Backup strategy
                    
                    Monthly configuration backups, license updates as necessary,
                    system firmware updates as necessary and software service updates.
                    
                    System Monitoring
                    
                    Designed for 99.99% availability
                    
                    Relevant devices supported including
                    
                    System health checksTECHDATA TECHNOLOGIES LIMITED
                    
                     Remote system maintenance and restart
                     Email alerts in response to system issues
                    07
                    Project Management
                    
                    Assigned Project Manager
                     Escalation management
                     Weekly trouble ticket reviews
                     Monthly contract performance reviews 
                    </p>
                </div>
                <div className='col-lg-5'>
                    <img className="img " variant="top" src={systemsupport} />

                </div>
            </div>

            <div className='row'>
                <div className='col-lg-5'>
                <img className="img " variant="top" src={systemmanagement} />

                </div>
                <div className='col-lg-7 col-text1'>
                <h2>Product / System Maintenance</h2>
                    <p>
                    TECHDATA Technologies technical expertise in IT extends across multiple
                    platforms and software/hardware technologies. Our customers benefit from our
                    certified staff who efficiently perform service updates, software patches release
                    updates that are released to fix specific software related issues, major upgrades
                    where the software and hardware are upgraded to new major releases by the
                    vendors, Windows updates, System backups and security.
                    </p>
                    
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-7 col-text2'>
                    <h2>Consultancy and Managed Network Support Services</h2>
                    <p>
                        TECHDATA Technologies designs, implements, project management, and
                        networks maintenance. Some of the many services we currently provide for
                        customers and can assist you with includes:
                        
                        Enterprise Architecture framework designs, based on TOGAF
                        framework
                         Enterprise networks technology refresh architectures.
                         Wide Area Networks and Local Area networks support and managed
                        services
                         Network Inventory and security Assessments
                         Troubleshoot and resolve network problems
                         Server setup, support, and maintenance
                         Maintain inventory of network components and provide asset
                        management system
                         End user support of desktop systems and applications
                         Implement and maintain voice networks and equipment
                        Our network engineers can test, improve, implement, and stabilize planned
                        changes to your network. Network engineering support also includes maximizing
                        network reliability and performance by configuration improvements, such as
                        modifying tunable network and server parameters.
                        Our key consultant team has over 10years practical experience in the industry and
                        is certified in various enterprise network specialties including Microsoft MCSE
                        certified, Cisco CCNP Enterprise certified, Cisco CCNP Security Certified,
                        TOGAF Enterprise Architecture frameworks certified, PMI PMP certified among
                        others.
                    </p>
                    <p>
                    
                    </p>
                </div>
                <div className='col-lg-5'>
                    <img className="img " variant="top" src={managedservices} />
                    {/* <img className="img " variant="top" src={networkassesment} /> */}

                </div>
            </div>
            
            <div className='row'>
                <div className='col-lg-5'>
                <img className="img " variant="top" src={sdlc} />

                </div>
                <div className='col-lg-7 col-text1'>
                <h2>Software Development Services</h2>
                   <div className='card-text'> <p>
                    We employ best practice
                    processes
                    and
                    development
                    methodologies as a foundation for rapid building of cutting-edge
                    technology solutions in a structured and methodical way.
                    Using deep domain expertise of our software developers, we create
                    impactful digital solutions that drive meaningful change with a
                    strategic vision.
                    </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services