import { useState, useEffect } from 'react';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import { db, storage } from '../firebase.config';
import { useNavigate, useParams } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, getDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import {
	FormContainer,
	Form,
	FormSubmitButton,
	FormLabel,
	FormInput,
	FormSelect,
	FormCancelButton,
	Textarea,
} from '../components/styles/FormContainer.styled.js';
import Flex from '../components/styles/Flex.styled.js';
import rehypeHighlight from 'rehype-highlight';
import ReactMarkdown from 'react-markdown';
import { MarkdownContainer } from '../components/styles/MarkdownContainer.styled.js';
import { v4 as uuidv4 } from 'uuid';

const AddEdit = (props) => {
	const { user } = props;
	const categoryOption = [
		'JavaScript',
		'TypeScript',
		'React',
		'Angular',
		'CSS',
		'HTML',
		'SASS',
		'Bootstrap',
		'Material UI',
		'Tailwind CSS',
		'Styled Components',
		'Firebase',
		'Wordpress',
		'What I learned',
	];
	const [form, setForm] = useState({
		title: '',
		tags: [],
		category: '',
		body: '',
		description: '',
	});
	const [file, setFile] = useState(null);
	const [progress, setProgress] = useState(null);
	const { id } = useParams();
	const navigate = useNavigate();
	const blogCollectionRef = collection(db, 'blogPosts');

	const { title, body, tags, category, description } = form;

	// Upload file
	useEffect(() => {
		const uploadFile = () => {
			if (!file) return;

			const storageRef = ref(storage, file.name);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
					setProgress(progress);
				},
				(error) => toast.error(`${error}`),
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
						setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
						toast.info(`Image upload to firebase successfully and the URL is: ${downloadUrl}`);
					});
				}
			);
		};
		file && uploadFile();
		return () => uploadFile();
	}, [file]);
	// Upload file end

	useEffect(() => {
		id && getBlogDetail();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const getBlogDetail = async () => {
		const docRef = doc(db, 'blogPosts', id);
		const snapshot = await getDoc(docRef);
		if (snapshot.exists()) {
			setForm({ ...snapshot.data() });
		}
	};

	const onCategoryChange = (e) => {
		setForm({ ...form, category: e.target.value });
	};
	const onTitleChange = (e) => {
		setForm({ ...form, title: e.target.value });
	};
	const onBodyChange = (e) => {
		setForm({ ...form, body: e.target.value });
	};
	const onDescriptionChange = (e) => {
		setForm({ ...form, description: e.target.value });
	};
	const handleTags = (tags) => {
		setForm({ ...form, tags });
	};
	const onFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (category && title && body && tags && description) {
			if (!id) {
				try {
					await addDoc(blogCollectionRef, {
						...form,
						timestamp: serverTimestamp(),
						author: user.displayName,
						userId: user.uid,
					});
					toast.success('Blog created successfully');
				} catch (err) {
					toast.error(`There was an error ${err}`);
				}
			} else {
				try {
					await updateDoc(doc(db, 'blogPosts', id), {
						...form,
						timestamp: serverTimestamp(),
						author: user.displayName,
						userId: user.uid,
					});
					toast.success('Blog updated successfully');
				} catch (err) {
					toast.error(`There was an error ${err}`);
				}
			}
		} else {
			return toast.error('All fields are mandatory to fill');
		}
		navigate('/');
	};
	// Submit handle end

	return (
		<>
			<FormContainer>
				<Form className='form' onSubmit={handleSubmit}>
					{/* Title section  */}
					<div>
						<FormLabel htmlFor='title'>Title</FormLabel>
						<FormInput
							type='text'
							placeholder=''
							name='title'
							value={title}
							onChange={onTitleChange}
						/>
					</div>
					{/* Title section end */}
					{/* Tag section */}
					<div>
						<FormLabel htmlFor='tags'>Tags</FormLabel>
						<ReactTagInput tags={tags} onChange={handleTags} removeOnBackspace={true} maxTags={5} />
					</div>
					{/* Tag section end */}
					{/* category section */}
					<FormSelect value={category} onChange={onCategoryChange}>
						<option>Select a category</option>
						{categoryOption.map((option) => (
							<option value={option || ''} key={uuidv4()}>
								{option}
							</option>
						))}
					</FormSelect>
					{/* category section end */} {/* body section */}
					<Textarea placeholder='body' value={body} name='body' onChange={onBodyChange} />
					<div>
						<FormLabel htmlFor='description'>Description</FormLabel>
						<FormInput
							type='text'
							placeholder=''
							name='description'
							value={description}
							onChange={onDescriptionChange}
						/>
					</div>
					{/* body section end  */}
					{/* file upload section */}
					<input type='file' onChange={onFileChange} />
					<Flex>
						<FormCancelButton className='cancel' onClick={() => navigate('/')}>
							Cancel
						</FormCancelButton>
						<FormSubmitButton type='submit' disabled={progress !== null && progress < 100}>
							{id ? 'Update' : 'Submit'}
						</FormSubmitButton>
					</Flex>
					{/* file upload section end  */}
				</Form>
			</FormContainer>
			<MarkdownContainer>
				<ReactMarkdown rehypePlugins={[rehypeHighlight]} children={body ?? ''} />
			</MarkdownContainer>
		</>
	);
};

export default AddEdit;
