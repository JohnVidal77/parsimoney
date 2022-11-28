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

interface FormValues {
	username: string;
	email: string;
	password: string;
}

export function RegisterPage() {
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
					Create an account
				</Heading>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Box marginBottom="4">
						<FormControl isInvalid={!(errors.email == null)} mb="4">
							<FormLabel>User name</FormLabel>
							<Input
								type="text"
								placeholder="User name"
								{...register('username', { required: true })}
							/>
							<FormErrorMessage>User name required</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!(errors.email == null)} mb="4">
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								placeholder="Email"
								{...register('email', { required: true })}
							/>
							<FormErrorMessage>Email required</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!(errors.password == null)} mb="4">
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								placeholder="Password"
								{...register('password', { required: true, min: 6 })}
							/>
							<FormErrorMessage>Password required</FormErrorMessage>
						</FormControl>
					</Box>

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
