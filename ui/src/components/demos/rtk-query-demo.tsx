import { FC } from 'react';
import { postExampleAPI } from '@services';
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CircularProgress,
	Typography,
} from '@mui/material';

const PostsDemo: FC = () => {
	const {
		data: posts,
		isError,
		isFetching,
		isLoading,
	} = postExampleAPI.useGetPostsQuery({});
	const [createPost, { isLoading: isCreating }] =
		postExampleAPI.useCreatePostMutation();
	return (
		<Box>
			{isLoading && <CircularProgress />}
			{isError && <Typography>Something went wrong...</Typography>}
			{isFetching && <Typography>Fetching...</Typography>}
			{posts?.map((post) => (
				<Card key={post.id} sx={{ maxWidth: 345 }}>
					<CardHeader title={post.title} />
					<CardContent>
						<Typography variant='body2' color='text.secondary'>
							{post.body}
						</Typography>
					</CardContent>
					<CardActions>
						<Button size='small'>Learn More</Button>
					</CardActions>
				</Card>
			))}
		</Box>
	);
};

export default PostsDemo;
