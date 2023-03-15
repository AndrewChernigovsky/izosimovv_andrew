import './Intro.sass'
import avatar from './../../images/content/avatar.jpg'

const Intro = () => {
	return (
		<div className="Intro">
			<div className="Intro__wrapper">
				<div className="Intro__about">
					<h1 className="intro__title text-title">Andrew <br /> Izosimov</h1>
					<div className="Intro-city">
						<h2 className="intro__subtitle text-subtitle">Frontend-Developer</h2>
						<p className="intro__text text-base">27, city. Saint-Petersburg</p>
						<a href="https://vk.com/im?sel=180222023">contact me</a>
					</div>
					<img className='Intro__avatar' src={avatar} alt="avatar" />
				</div>

		

				<div className="Intro__inner">
					<h3>About me</h3>
					<p>Hey! I'm - Frontend-Developer</p>
					<p>All my works are collected here. Links to the source code can be found in the project description </p>
				</div>
			</div>

		</div>
	)
}

export default Intro;