import Image from 'next/image'

// import iconStyles from '../components/styles/Icon.module.css'
import iconStyles from '../styles/Icon.module.css'
import sectionStyles from '../styles/Section.module.css'

const AboutPage = () => {
    return (
        <section className="">
            <div className="">


                <div className="row">
                    <div className="col-lg-6 mx-auto">

                        <div className="col-lg-6 mx-auto">
                            <Image
                            className=''
                                src="/profile-img.jpg"
                                alt="Haris Lagrosa II"
                                width={0}
                                height={0}
                                layout="responsive"
                                priority
                            />
                        </div>

                        <div className={sectionStyles.sectionTitle}>
                            <h2>About</h2>
                            <p className='text-danger'>I&apos;m a software developer based in the Philippines, passionate about building innovative solutions. With expertise in Java, Kotlin, and frameworks like Laravel, Vue.js, React.js, and Node.js, I specialize in optimizing databases, integrating hardware, and conducting automation testing.</p>
                        </div>


                        <div className="row">
                            <div className="col-lg-12 pt-4 pt-lg-0 content">
                                <h3>Android &amp; Web Developer.</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className={`${iconStyles.bx} ${iconStyles.bxChevronRight}`}></i> <strong>Birthday:</strong> <span>July 21, 1998</span></li>
                                            <li><i className={`${iconStyles.bx} ${iconStyles.bxChevronRight}`}></i> <strong>Email:</strong> <span>harislagrosa721@gmail.com</span></li>
                                            <li><i className={`${iconStyles.bx} ${iconStyles.bxChevronRight}`}></i> <strong>Phone:</strong> <span>+63 907 460 3935</span></li>
                                            <li><i className={`${iconStyles.bx} ${iconStyles.bxChevronRight}`}></i> <strong>City:</strong> <span>Kalayaan, Laguna, Philippines</span></li>
                                            <li><i className={`${iconStyles.bx} ${iconStyles.bxChevronRight}`}></i> <strong>Age:</strong> <span>25</span></li>
                                            <li><i className={`${iconStyles.bx} ${iconStyles.bxChevronRight}`}></i> <strong>Degree:</strong> <span>Bachelor in Information Technology</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                        </ul>
                                    </div>
                                </div>
                                <p>
                                    Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                    Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>

    )
}

export default AboutPage