import { useTheme } from './ThemeProvider';
import Button from './Button';

const ToggleThemeButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button onClick={toggleTheme}>
			{theme === 'light' ? 'dark' : 'light'}
		</Button>
	);
};

export default ToggleThemeButton;
