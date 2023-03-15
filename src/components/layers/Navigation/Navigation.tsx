import { HashLink } from 'react-router-hash-link';
import './Navigation.sass'


const Navigation = () => {
	return (
		<nav className="navigation">
			<HashLink
				to="/#Home"
				scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
			>
				Home
			</HashLink>
			<HashLink
				to="/#About"
				scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
			>
				About
			</HashLink>
			<HashLink
				to="/#Portfolio"
				scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
			>
				Portfolio
			</HashLink>
			<HashLink
				to="/#Contacts"
				scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
			>
				Contacts
			</HashLink>
		</nav>
	)
}

export default Navigation;