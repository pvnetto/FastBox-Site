import React from 'react';

const Services = () => {
    return (
        <section id="services">
            <div id="services-info">
                <h2>Serviços</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor ornare lacinia. Morbi vitae finibus
                    metus. Quisque vestibulum iaculis mi vel rutrum. Curabitur aliquam tellus nec lacus tempus, sed semper
                    nunc tempor. Sed at lacus sed risus sollicitudin pulvinar sit amet at dolor. Nullam congue finibus ante
                    in accumsan. Ut quis feugiat dolor. In posuere congue metus non dapibus. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
            </div>

            <div id="service-box-container">
                <div class="service-box">
                    <img src="assets/oficina_pintura.jpg" alt="" />
                    <a href="" class="primary-btn">
                        Funilaria
                    </a>
                </div>

                <div class="service-box">
                    <img src="assets/oficina_pintura.jpg" alt="" />
                    <a href="" class="primary-btn">
                        Pintura
                    </a>
                </div>

                <div class="service-box">
                    <img src="assets/oficina_pintura.jpg" alt="" />
                    <a href="" class="primary-btn">
                        Polimento
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;