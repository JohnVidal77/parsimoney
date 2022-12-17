import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	IconButton,
	Input,
	useToast,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MdArrowBack } from 'react-icons/md';

import { useCreateUser } from '../../../../data/hooks/user/useCreateUser';
import { AuthError } from 'firebase/auth';
import { ToastConfig } from '../../../../configs/toast.config';
import { useNavigate } from 'react-router-dom';

interface FormValues {
	username: string;
	email: string;
	password: string;
}

const schema = Yup.object({
	email: Yup.string().required().email(),
	password: Yup.string().min(6).required(),
	username: Yup.string().required(),
}).required();

export function RegisterPage() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});
	const toast = useToast();
	const { mutateAsync, isLoading } = useCreateUser();

	const onSubmit = async (data: FormValues) => {
		try {
			await mutateAsync(data);

			toast({
				...ToastConfig,
				title: 'User created',
				description: 'User created successfully',
				status: 'success',
			});
		} catch (error) {
			const err = error as AuthError;

			toast({
				...ToastConfig,
				title: 'Error creating user',
				description: err.message,
				status: 'error',
			});
		}
	};

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
							<FormErrorMessage>{errors.username?.message}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!(errors.email == null)} mb="4">
							<FormLabel>Email</FormLabel>
							<Input
								type="email"
								placeholder="Email"
								{...register('email', { required: true })}
							/>
							<FormErrorMessage>{errors.email?.message}</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={!(errors.password == null)} mb="4">
							<FormLabel>Password</FormLabel>
							<Input
								type="password"
								placeholder="Password"
								{...register('password', { required: true, min: 6 })}
							/>
							<FormErrorMessage>{errors.password?.message}</FormErrorMessage>
						</FormControl>
					</Box>

					<Button
						type="submit"
						loadingText="Log in"
						colorScheme="green"
						w="full"
						isLoading={isLoading}
					>
						Create an account
					</Button>
				</form>
			</GridItem>
		</Grid>
	);
}
