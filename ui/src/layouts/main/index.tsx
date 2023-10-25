import { FC, ReactNode } from 'react';

import { Content, Main, Root } from './styles';
import { Navbar, SideNav } from './templates';

interface IMainLayoutProps {
	children: ReactNode;
}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
	return (
		<Root>
			<SideNav />
			<Main>
				<Navbar />
				<Content>{children}</Content>
			</Main>
		</Root>
	);
};

export default MainLayout;
