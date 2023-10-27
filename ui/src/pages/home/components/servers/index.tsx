interface MockServer {
	id: string;
	name: string;
	icon: string;
}

const servers: MockServer[] = Array.from({ length: 20 }, (_, i) => ({
	id: `${i + 1}`,
	name: `Server ${i + 1}`,
	icon: 'https://picsum.photos/200',
	category: `Category ${i + 1}`,
}));

const Servers = () => {
	return <div>index</div>;
};

export default Servers;
