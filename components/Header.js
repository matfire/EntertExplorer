import Router from 'next/router'

const Header = () => {
	return (
		<nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 header">
			<div className="flex items-center flex-shrink-0 text-white mr-6 pointer-cursor" onClick={() => {
				Router.push("/")
			}}>
				<span className="font-semibold tracking-tight header">EntertExplorer</span>
			</div>
		</nav>
	)
}

export default Header