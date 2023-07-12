import React from 'react'
import './ServiceCard.css'
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


const ServicesCards = () => {
  return (
    <div id='services'>
    <div className='container service-container' >
        <div className='row' > 
            <h2>Our Services</h2>
         </div>
        <div className="row">
            <div className="col-sm-6 column" >
                <div className="card " style={{width:"40vw"}}>
                <img className="img service-image" variant="top" src={system} />

                <div className="card-body service-body bg-dark" style={{backgroundColor:'rgba(59,130,246,.5);'}}>
                    <h3 className="card-title"> System Integration</h3>
                    
                    <p className="card-text">Our customers are increasingly leveraging information technology
                        to accomplish their business objectives – relying heavily on their
                        software, hardware, and network investments to remain
                        competitive, as well as, researching and investing in innovative
                        cloud, mobile and other software-as-a-service models.</p>
                        <p>TECHDATA Technologies provides a full range of services to
                        support our customers’ needs. Our staff adds significant
                        incremental value, offering implementation, customization,
                        migration, training and related services to support our customers’
                        business objectives.
                    </p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
            <div className="col-sm-6 column">
                <div className="card " style={{width:"40vw"}}>
                <img className="img service-image" style={{height:""}} variant="top" src={network} /><br/>
                <div className="card-body service-body bg-dark">
                    <h3 className="card-title">Enterprise Network Solutions</h3>
                    
                    
                    <p>An Enterprise Network is used by midsize to large organizations to connect their
                                people, devices, and things to applications in the data center and cloud. As
                                organizations grow, the network becomes more complex as additional technology
                                is required for scale and security. Portions of the network are designed for a
                                specific purposes (WANs, Branch/Campus, and Data Center/Hybrid Cloud) and
                                require advanced solutions to achieve better network speed, visibility, and endto-end security.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 column" >
                <div className="card" style={{width:"40vw"}}>
                <img className="img service-image" style={{height:""}} variant="top" src={networkarray} />
                <div className="card-body service-body bg-dark">
                
                <h3 className='card-title'>We deliver a full array of Networking services</h3>
                
                            <ul>
                                <li>Wired or wireless network</li>
                                <li>Multi-services switches</li>
                                <li>Network management</li>
                                <li>Secure Routes</li>
                                <li>SWitched Firewalls</li>
                                <li>VPN</li>
                                <li>Wireless Mesh</li>
                            </ul>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
            <div className="col-sm-6 column">
                <div className="card" style={{width:"40vw"}}>
                <img className="img service-image" variant="top" src={server} />
                <div className="card-bordy service-body bg-dark">
                <h3>Servers, Storage & Virtualization Solutions:</h3>
               
                <p>
                    TECHDATA Technologies has extensive experience designing and
                    implementing virtualization solutions that reduce the Total Cost of Ownership
                    (TCO) of your IT infrastructure and reduces the IT management burden of key
                    staff members. Our team of virtualization engineers have real-life experience with
                    all the operating systems, virtualization software, and hardware that are required
                    for a successful implementation.
                    </p>
                    {/* <p>
                    TECHDATA Technologies delivers on-premise and hybrid virtualization
                    solutions for the most advanced global enterprise networks, as well as local small
                    and medium-sized businesses. We provide complete end-to-end solutions using a
                    variety of industry-leading technologies, leaving nothing to chance when it comes
                    to your data
                    </p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6 column" >
                <div className="card" style={{width:"40vw"}}>
                <img className="img service-image" variant="top" src={collaboration} />
                <div className="card-body service-body bg-dark">
                    {/* <h3 className="card-title"> title</h3> */}
                    <h3>Collaboration (Integrated Data, Voice, Video)</h3>
                    
                    <p className="card-text">Integrated Data, Voice and Video have become popular with businesses because
                        of its flexibility, reliability and cost effectiveness. It allows an enterprise to
                        leverage its internet access circuit by dynamically carrying internet and voice
                        traffic flawlessly over it.</p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
            <div className="col-sm-6 column">
                <div className="card" style={{width:"40vw"}}>
                <img className="img service-image" variant="top" src={datacenter} />

                <div className="card-body service-body bg-dark">
                    <h3 className="card-title">Special title treatment</h3>
                    
                    <p>
                    In this data decade, organisations are looking to get the most out of their data,
                    developing technological breakthroughs that, one way or another, everyone will
                    experience and benefit from. The more effectively an organisation can harness
                    the power of this data, the better – to ensure it can adapt to fast-changing markets
                    and customer dynamics.
                    </p>
                    {/* <p>
                    To enable this, organisations must simplify and automate their IT infrastructure
                    while consolidating systems and services into holistic solutions that will allow
                    more control and clarity. We cannot enable the digital leaders of the future by
                    using the technology approaches of the past; IT needs to evolve to provide a
                    foundation that accelerates digital innovation.
                    TECHDATA Technologies is committed to delivering innovative data center
                    infrastructure that enhances the delivery of new applications and minimizes the
                    cost upgrades comprised of our comprehensive portfolios of fiber and copper
                    structured cabling.
                    </p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 column" >
                <div className="card" style={{width:"40vw"}}>
                <img className="card-img-top service-image" variant="top" src={systemsupport} />

                <div className="card-body service-body bg-dark ">
                
                    <h3 className="card-title"> System Support</h3>
                    
                    <p style={{color:"white"}}>
                    TECHDATA Technologies support services offer flexibility to match the needs
                    of our customers. The majority of our customers prefer a technical support
                    consultancy services model, which is designed to manage and maintain mission
                    critical infrastructure and operations, while allowing their own personnel to focus
                    on their core business. Our services include:
                    </p>
                    {/* <p>
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
                    </p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
            <div className="col-md-6 column">
                <div className="card " style={{width:"40vw"}} >
                <img className="card-img-top service-image"  variant="top" src={systemmanagement} />

                <div className="card-body service-body bg-dark ">
                
                    <h3 className="card-title">Product / System Maintenance</h3>
                    
                    <p>
                    TECHDATA Technologies technical expertise in IT extends across multiple
                    platforms and software/hardware technologies. Our customers benefit from our
                    certified staff who efficiently perform service updates, software patches release
                    updates that are released to fix specific software related issues, major upgrades
                    where the software and hardware are upgraded to new major releases by the
                    vendors, Windows updates, System backups and security.
                    </p>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">grid */}

    </div>
    </div>
  )
}
export default ServicesCards