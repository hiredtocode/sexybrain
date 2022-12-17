import { useSelector } from 'react-redux';
import { GithubIconContainer } from './styles/portfolio/ProjectContainer.styled.js';

const GithubButtonForPortfolio = props => {
	const { link, title } = props;
	const mode = useSelector(state => state.darkmode.mode);

	return (
		<>
			<GithubIconContainer
				//TODO Make this a component and reuse it in portfolio
				href={link}
				aria-label={title}
				target='_blank'
				rel='noreferrer'
			>
				<svg
					width='32px'
					height='32px'
					viewBox='0 0 32 32'
					xmlns='http://www.w3.org/2000/svg'
					className='icon'
				>
					<g fill='none' fillRule='evenodd'>
						<path d='m0 0h32v32h-32z' fill='#64ffda000' />
						<path
							d='m7.12879292.51417785c1.11274139.23426134 2.47362429.82048782 4.11150568 1.85174647l.1402084.08827939.1615653-.03671938c2.9884399-.67919088 6.1124421-.67919088 8.961135-.00093066l.1674659.03987284.144082-.09420748c1.5716721-1.02763176 2.9182496-1.61310022 4.0524237-1.84775693.759192-.15707421 1.3120134-.14192842 1.7266168-.03827759.2666462.090124.4499633.27344118.5486711.56956426.6704248 1.74425402.8026962 3.4637821.4052819 5.18591101l-.0441449.19129423.1243184.15194469c1.1968139 1.46277248 1.8488866 3.31603184 1.8488866 5.2875725 0 6.3485866-2.8063027 9.1853925-7.7312723 10.4166349l-.419054.1047635.1365949.4097846c.2531851.7595554.3950384 1.6816016.3950384 2.5054211v5.2638242c0 .6102163-.3750007.9852169-.9852169.9852169-.6102163 0-.9852169-.3750006-.9852169-.9852169v-5.4023459c.1418506-1.1099017-.2422784-2.0702241-1.0868091-2.9147549-.3044473-.3044473-.3790379-.6525363-.227066-.8804941l.0552369-.1248658c.0757101-.3028408.3814371-.532136.8466076-.6871928 5.3120827-.5399498 8.0307236-2.8327794 8.0307236-8.6907748 0-1.6564285-.6131873-3.26604496-1.7632966-4.55991791-.2672232-.26819938-.3184945-.62709819-.1965338-.99298027.421569-1.12340343.4584237-2.30275287.1471054-3.54802595l-.0925045-.3700178-.3739989.07479979c-.9478211.18956418-2.1473179.75403325-3.7508016 1.86413736-.1857796.1766551-.4230883.19822862-.7539984.08792526-2.8475111-.81394761-5.9339607-.85464499-8.7911309-.12649584l-.4491585.12135959c-.3628223.12054277-.6384702.09757211-.9149267-.08673225-1.42751816-1.0714084-2.69253421-1.64970145-3.74499762-1.86019412l-.373999-.0747998-.09250445.37001782c-.31131829 1.24527311-.27446362 2.42462255.15204701 3.5619842.10109463.41385961.07644663.71100916-.06562638.86216475l-.13584907.11685726c-1.15010933 1.29387299-1.76329656 2.90348951-1.76329656 4.55991791 0 5.8579954 2.71864082 8.150825 8.11605497 8.7091782.3774067.0021233.658493.2576563.7612762.6687894.1010375.4041497.0114892.8220417-.1718291 1.0053599-.7436348.7436349-1.0868091 1.6587662-1.0868091 2.7762332v5.4023459c0 .6102163-.3750006.9852169-.9852169.9852169-.6102162 0-.9852169-.3750006-.9852169-.9852169v-2.8270529l-.46575959.0776266c-2.54724.42454-4.24481989-.2444101-5.77209467-1.8206127l-.17550688-.1858852c-.2604301-.2828668-.33970082-.3776481-.88018386-1.0382385l-.36159501-.4498172c-.20278887-.2491665-.28041984-.3335268-.4270144-.4801213-.31004981-.3100499-.60764766-.5050278-.94769786-.5900403-.50153879-.1007695-.86640495-.6978232-.69527541-1.1256471.10960673-.5162087.63701397-.8684616 1.05468442-.7739997l.08762892.0271823c1.09149998.3291047 1.69332587.8449555 2.89233084 2.2437946 1.52216405 2.0951415 2.69032089 2.7199695 5.36532835 2.2104443l.32515515-.0619343v-.4695228c0-.8356368.1444822-1.7386502.3869558-2.3448342l.1761248-.4403121-.4637039-.0993651c-4.85568756-1.0405045-7.71806969-4.1305761-7.71806969-10.2750493 0-1.9715406.65207273-3.82479999 1.84888659-5.28757249l.13251746-.16196578-.0574908-.20121779c-.52680966-1.84383388-.39831649-3.54636846.39413925-5.26335592.11499725-.33725524.29831442-.52057241.59443749-.61928009.38670854-.09546266.89997964-.11002355 1.64383232.04657702z'
							fill={mode === 'dark' ? '#64ffda' : '#087ea4'}
							fill-rule='nonzero'
							transform='translate(1)'
						/>
					</g>
				</svg>
			</GithubIconContainer>
		</>
	);
};

export default GithubButtonForPortfolio;
