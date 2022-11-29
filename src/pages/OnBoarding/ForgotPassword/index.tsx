import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	IconButton,
	Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

interface FormValues {
	username: string;
	email: string;
	password: string;
}

export function ForgotPasswordPage() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	console.log(errors);

	const onSubmit = (data: unknown) => console.log(data);

	return (
		<Grid placeItems="center" w="100vw" h="100vh">
			<IconButton
				position="fixed"
				top="4"
				left="4"
				aria-label="Back button"
				icon={<MdArrowBack />}
				onClick={() => navigate('/login')}
			/>

			<GridItem p="4" w="full" maxW="96">
				<Heading as="h1" size={'2xl'} marginBottom="8">
					Forgot password
				</Heading>

				<form onSubmit={handleSubmit(onSubmit)}>
					<FormControl isInvalid={!(errors.email == null)} mb="4">
						<FormLabel>Email</FormLabel>
						<Input
							type="email"
							placeholder="Email"
							{...register('email', { required: true })}
						/>
						<FormErrorMessage>Email required</FormErrorMessage>
					</FormControl>

					<Button
						type="submit"
						loadingText="Log in"
						colorScheme="green"
						w="full"
					>
						Submit
					</Button>
				</form>
			</GridItem>
		</Grid>
	);
}
