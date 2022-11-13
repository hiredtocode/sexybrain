import { useState, useEffect } from 'react';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import { db, storage } from '../firebase.config';
import { useNavigate, useParams } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, getDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import './Auth.scss';
import {
	FormContainer,
	Form,
	FormButton,
	FormLabel,
	FormInput,
	FormSelect,
} from '../components/styles/FormContainer.styled.js';

const AddEdit = ({ user, setActive }) => {
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
		'What I learned',
	];
	const [form, setForm] = useState({
		title: '',
		tags: [],
		category: '',
		body: '',
	});
	const [file, setFile] = useState(null);
	const [progress, setProgress] = useState(null);
	const { id } = useParams();
	const navigate = useNavigate();
	const blogCollectionRef = collection(db, 'blogPosts');

	const { title, body, tags, category } = form;

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
		setActive(null);
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
	const handleTags = (tags) => {
		setForm({ ...form, tags });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (category && title && body && tags) {
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
		<FormContainer>
			<div className='l-form'>
				<Form className='form' onSubmit={handleSubmit}>
					<h1 className='form__title'>{id ? 'Update Blog' : 'Create Blog'}</h1>
					{/* Title section  */}
					<div className='form__div'>
						<FormInput
							type='text'
							className='form__input'
							placeholder=''
							name='title'
							value={title}
							onChange={onTitleChange}
						/>
						<FormLabel htmlFor='title' className='form__label'>
							Title
						</FormLabel>
					</div>
					{/* Title section end */}
					{/* Tag section */}
					<div className='form__div'>
						Tags
						<ReactTagInput tags={tags} onChange={handleTags} className='' />
					</div>
					{/* Tag section end */}
					{/* category section */}
					<div className='form__div'>
						<FormSelect value={category} onChange={onCategoryChange} className=''>
							<option>Please select category</option>
							{categoryOption.map((option, index) => (
								<option value={option || ''} key={index}>
									{option}
								</option>
							))}
						</FormSelect>
					</div>
					{/* category section end */} {/* body section */}
					<div className='form__div'>
						<textarea
							className='form__input'
							placeholder='body'
							value={body}
							name='body'
							onChange={onBodyChange}
						/>
					</div>
					{/* body section end  */}
					{/* file upload section */}
					<div className=''>
						<input type='file' className='' onChange={(e) => setFile(e.target.files[0])} />
					</div>
					<div className=''>
						<h3>Uploaded {progress}%</h3>
						<FormButton className='' type='submit' disabled={progress !== null && progress < 100}>
							{id ? 'Update' : 'Submit'}
						</FormButton>
					</div>
					{/* file upload section end  */}
				</Form>
			</div>
		</FormContainer>
	);
};

export default AddEdit;
