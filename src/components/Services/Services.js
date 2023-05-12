import React from 'react'
import "./services.css"
import system from "../../images/system-integration.png"

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
                <div className='col-md-5'>
                <img className="img " variant="top" src={system} />

                </div>
                <div className='col-md-7 col-text1'>
                <h4>System Integration</h4>
                    <p>Our customers are increasingly leveraging information technology
to accomplish their business objectives – relying heavily on their
software, hardware, and network investments to remain
competitive, as well as, researching and investing in innovative
cloud, mobile and other software-as-a-service models.</p>
<p>TECHDATA Technologies provides a full range of services to
support our customers’ needs. Our staff adds significant
incremental value, offering implementation, customization,
migration, training and related services to support our customers’
business objectives.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-7 col-text2'>
                    <h4>System Integration</h4>
                    <p>TECHDATA Technologies provides a full range of services to
                    support our customers’ needs. Our staff adds significant
                    incremental value, offering implementation, customization,
                    migration, training and related services to support our customers’
                    business objectives.</p>
                </div>
                <div className='col-md-5'>
                    <img className="img " variant="top" src={system} />

                </div>
            </div>
            <div className='row'>
                <div className='col-md-5'>
                <img className="img " variant="top" src={system} />

                </div>
                <div className='col-md-7 col-text1'>
                <h4>System Integration</h4>
                    <p>Our customers are increasingly leveraging information technology
to accomplish their business objectives – relying heavily on their
software, hardware, and network investments to remain
competitive, as well as, researching and investing in innovative
cloud, mobile and other software-as-a-service models.</p>
<p>TECHDATA Technologies provides a full range of services to
support our customers’ needs. Our staff adds significant
incremental value, offering implementation, customization,
migration, training and related services to support our customers’
business objectives.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-7 col-text2'>
                    <h4>System Integration</h4>
                    <p>TECHDATA Technologies provides a full range of services to
                    support our customers’ needs. Our staff adds significant
                    incremental value, offering implementation, customization,
                    migration, training and related services to support our customers’
                    business objectives.</p>
                </div>
                <div className='col-md-5'>
                    <img className="img " variant="top" src={system} />

                </div>
            </div>
            

        </div>
    </div>
  )
}

export default Services