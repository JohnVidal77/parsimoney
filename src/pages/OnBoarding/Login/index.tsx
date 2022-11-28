import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	Input,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface FormValues {
	email: string;
	password: string;
}

export function LoginPage() {
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
			<GridItem p="4">
				<Heading as="h1" size={'2xl'} marginBottom="8">
					Login
				</Heading>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Box marginBottom="4">
						<FormControl isInvalid={!(errors.email == null)} mb="4">
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								placeholder="Email"
								{...register('email', { required: true })}
							/>
							<FormErrorMessage>Enter your email right</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!(errors.password == null)} mb="4">
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								placeholder="Password"
								{...register('password', { required: true })}
							/>
							<FormErrorMessage>Enter your password right</FormErrorMessage>
						</FormControl>
					</Box>

					<Button
						type="submit"
						loadingText="Log in"
						colorScheme="green"
						w="full"
						mb={'4'}
					>
						Submit
					</Button>
					<Button
						type="submit"
						loadingText="Log in"
						colorScheme="green"
						w="full"
						variant={'outline'}
						onClick={() => navigate('/register')}
						mb={'4'}
					>
						Create an account
					</Button>
					<Button
						type="submit"
						loadingText="Log in"
						colorScheme="green"
						w="full"
						variant="link"
						onClick={() => navigate('/forgot-password')}
					>
						Forgot password? Click here
					</Button>
				</form>
			</GridItem>
		</Grid>
	);
}
