import { FC, ReactNode, useState } from 'react';

import { Content, Main, Root } from './styles';
import { Navbar, SideNav } from './components';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const [isThinSideNavOpen, setIsThinSideNavOpen] = useState<boolean>(false);
	const handleThinSideNavChange = (isOpen: boolean) =>
		setIsThinSideNavOpen(isOpen);

	return (
		<Root>
			<SideNav
				isThinSideNavOpen={isThinSideNavOpen}
				handleThinSideNavChange={handleThinSideNavChange}
			/>
			<Main>
				<Navbar handleMenuClick={() => handleThinSideNavChange(true)} />
				<Content>{children}</Content>
			</Main>
		</Root>
	);
};

export default MainLayout;
